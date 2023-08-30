'use client'

import React, { useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Head from "next/head"
import axios from 'axios';
import Image from 'next/image';
import engagementImage from "/src/images/bundl-engagement.png"


function Login({ seedTracks, seedGenre, additionalInfo, setIsLoginModalOpen, setApiCall, setIsAuthenticated }) {

  const handleSpotifyLogin = () => {

    localStorage.setItem('formData', JSON.stringify({ seedTracks, seedGenre, additionalInfo }));

    const clientId = '059ae809216348fe92b12f856c2a392a';
    const redirectUri = encodeURIComponent('https://yay-api.herokuapp.com/login/auth/callback'); // Changed to /auth/callback
    const scopes = encodeURIComponent('user-read-private user-read-email playlist-modify-private');
    
    // Redirect to Spotify login
    window.location.href = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=${scopes}`;
    setIsAuthenticated(true); 
    setIsLoginModalOpen(false);
    setApiCall(true);
  };


  return (
    <div className="App">

    <button className="block w-full rounded-md bg-[#8B0000] px-3.5 py-2.5 z-10 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#f55249] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#f55249]" onClick={handleSpotifyLogin}>
      Login with Spotify
    </button>

    </div>
  );
}


function WebPlayback(props) {
  const [player, setPlayer] = useState(undefined);
  const [is_paused, setPaused] = useState(false);
  const [is_active, setActive] = useState(false);
  const [current_track, setTrack] = useState({
    name: "",
    album: {
      images: [
        { url: "" }
      ]
    },
    artists: [
      { name: "" }
    ]
  });

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://sdk.scdn.co/spotify-player.js";
    script.async = true;
  
    document.body.appendChild(script);
  
    window.onSpotifyWebPlaybackSDKReady = () => {
      const newPlayer = new window.Spotify.Player({
        name: 'Web Playback SDK',
        getOAuthToken: cb => { cb(props.token); },
        volume: 0.5
      });
  
      newPlayer.addListener('ready', ({ device_id }) => {
        console.log('Ready with Device ID', device_id);
  
        // Play the playlist if a playlist ID is provided
        if (props.playlistId) {
          fetch(`https://api.spotify.com/v1/me/player/play?device_id=${device_id}`, {
            method: 'PUT',
            body: JSON.stringify({ context_uri: `spotify:playlist:${props.playlistId}` }),
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${props.token}`
            },
          });
        }
      });
  
      newPlayer.addListener('not_ready', ({ device_id }) => {
        console.log('Device ID has gone offline', device_id);
      });
  
      newPlayer.addListener('player_state_changed', (state) => {
        if (!state) {
          return;
        }
  
        setTrack(state.track_window.current_track);
        setPaused(state.paused);
  
        newPlayer.getCurrentState().then(state => {
          (!state) ? setActive(false) : setActive(true);
        });
      });
  
      newPlayer.connect();
      setPlayer(newPlayer);
    };
  }, []);

  return (
    <>
      <div className="container">
        <div className="main-wrapper">
          <img src={current_track.album.images[0]?.url} className="now-playing__cover" alt="" />
          <div className="now-playing__side">
            <div className="now-playing__name">{current_track.name}</div>
            <div className="now-playing__artist">{current_track.artists[0]?.name}</div>
          </div>
          <button className="btn-spotify" onClick={() => { player.previousTrack() }} >
            &lt;&lt;
          </button>
          <button className="btn-spotify" onClick={() => { player.togglePlay() }} >
            {is_paused ? "PLAY" : "PAUSE"}
          </button>
          <button className="btn-spotify" onClick={() => { player.nextTrack() }} >
            &gt;&gt;
          </button>
        </div>
      </div>
    </>
  );
}



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function AIForm() {
  const [agreed, setAgreed] = useState(false)

const [seedTracks, setSeedTracks] = useState('');
const [seedGenre, setSeedGenre] = useState('');
const [additionalInfo, setAdditionalInfo] = useState('');
const [isModalOpen, setIsModalOpen] = useState(false);
const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
const [apiResponse, setApiResponse] = useState('');
const [isLoading, setIsLoading] = useState(false);  // New state variable
const [formData, setFormData] = useState({})
const [apiCall, setApiCall ] = useState(false)
const [isAuthenticated, setIsAuthenticated] = useState(false);
const [accessToken, setAccessToken] = useState('');

const [tokenReady, setTokenReady] = useState(false);

let access_token;
if (typeof window !== 'undefined') {
  const urlParams = new URLSearchParams(window.location.search);
  access_token = urlParams.get('access_token');
}

useEffect(() => {
  if (access_token) {
    setAccessToken(access_token);
    setTokenReady(true);
  }
}, [access_token]);



// useEffect(() => {
//   if (!isAuthenticated) return; // Exit if not authenticated

//   const fetchData = async () => {
//     try {
//       setIsLoading(true)
//       const response = await fetch('https://yay-api.herokuapp.com/openai/create-playlist', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       const responseData = await response.json();
//       console.log('api response:', responseData.playlist);
//       setApiResponse(responseData.playlist);
//       setIsModalOpen(true);
//     } catch (error) {
//       console.error('Error:', error);
//     } finally {
//       setIsLoading(false);  // Set loading to false when the request ends
//     }
//   };

//   fetchData();
// }, [apiCall, isAuthenticated]); // Make sure apiCall is defined

  // This useEffect runs when the component mounts
  useEffect(() => {
    // Check if there's saved form data in localStorage
    const savedFormData = localStorage.getItem('formData');
    if (savedFormData) {
      const { seedTracks, seedGenre, additionalInfo } = JSON.parse(savedFormData);
      setSeedTracks(seedTracks);
      setSeedGenre(seedGenre);
      setAdditionalInfo(additionalInfo);
    }
  }, []);

useEffect(() => {
  const urlParams = new URLSearchParams(window.location.search);
  const access_token = urlParams.get('access_token');
  
  if (access_token) {
    console.log("Access token is " + access_token);
    setAccessToken(access_token);
    setIsAuthenticated(true);
        // Kick off the API call to generate the playlist
     generatePlaylist();

    // Retrieve formData from local storage
    const savedFormData = JSON.parse(localStorage.getItem('formData'));
    if (savedFormData) {
      console.log('savedform data' + savedFormData.seed_tracks)
     setSeedTracks(savedFormData.seed_tracks);
     setSeedGenre(savedFormData.seed_genre)
     setAdditionalInfo(savedFormData.additionalInfo)
     setAccessToken(access_token)
    }


  }
}, []);



const exchangeCodeForToken = async (code) => {
  try {
    const response = await fetch('https://yay-api.herokuapp.com/login/auth/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ code }),
    });


    const json = await response.json();
    const access_token = json.access_token;

    if (access_token) {
      setAccessToken(access_token);
      setIsAuthenticated(true);
  
      // Kick off the API call to generate the playlist
      generatePlaylist();
    }
  } catch (error) {
    console.error('Error:', error);
  }
};

const generatePlaylist = async () => {
  if (!accessToken || !isAuthenticated) {
    console.log("Token not ready or not authenticated");
    return;
  }
  const savedFormData = JSON.parse(localStorage.getItem('formData'));
  let currentSeedTracks = seedTracks;
  let currentSeedGenre = seedGenre;
  let currentAdditionalInfo = additionalInfo
  let currentAccessToken = accessToken

  const urlParams = new URLSearchParams(window.location.search);
  const access_token = urlParams.get('access_token');
  
  if (savedFormData) {
    setSeedTracks(savedFormData.seed_tracks);
    setSeedGenre(savedFormData.seed_genre);
    setAdditionalInfo(savedFormData.additionalInfo);
    currentSeedTracks = savedFormData.seed_tracks;
    currentSeedGenre = savedFormData.seed_genre;
    currentAdditionalInfo = savedFormData.additionalInfo
    currentAccessToken = access_token


  }
  
  if (!currentSeedTracks || !currentSeedGenre) {
    console.error('Missing seedTracks or seedGenre');
    return;
  }

  setIsLoading(true);
  try {
    const response = await fetch('https://yay-api.herokuapp.com/openai/create-playlist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ seed_genre: currentSeedGenre, seed_tracks: currentSeedTracks, additionalInfo: currentAdditionalInfo, access_token: currentAccessToken }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const responseData = await response.json();
    console.log('responsedata.playlist' + responseData.playlist)
    setApiResponse(responseData.playlist);
    setIsModalOpen(true);
  } catch (error) {
    console.error('Error:', error);
  } finally {
    setIsLoading(false);
  }
};





const [countdown, setCountdown] = useState(29);


// useEffect(() => {
//   async function getToken() {
//     const response = await fetch(' https://yay-api.herokuapp.com/login/auth/token');
//     const json = await response.json();
//     setToken(json.access_token);
//   }
//   if(!token){
//   getToken();
//   }
// }, [isAuthenticated]);

useEffect(() => {
  let timer;
  if (isLoading && countdown > 0) {
    timer = setTimeout(() => {
      setCountdown(countdown - 1);
    }, 1000);
  } else {
    setCountdown(29); // Reset the countdown when loading is done
  }
  return () => clearTimeout(timer);
}, [isLoading, countdown]);


async function handleSubmit(e) {
  e.preventDefault();

  // If token is empty, show login modal and exit
  if (accessToken === '') {
    setIsLoginModalOpen(true);
    setIsLoading(false);
    return;
  }

  // Get access_token from URL
  const urlParams = new URLSearchParams(window.location.search);
  const currentAccessToken = urlParams.get('access_token') || accessToken;

  // Get saved form data from local storage
  const savedFormData = JSON.parse(localStorage.getItem('formData')) || {};

  // Use saved data if available, else use current form data
  const currentSeedTracks = savedFormData.seed_tracks || seedTracks;
  const currentSeedGenre = savedFormData.seed_genre || seedGenre;
  const currentAdditionalInfo = savedFormData.additionalInfo || additionalInfo;

  // Save current form data to local storage
  localStorage.setItem('formData', JSON.stringify({ seed_tracks: currentSeedTracks, seed_genre: currentSeedGenre, additionalInfo: currentAdditionalInfo }));

  // Validate required fields
  if (!currentSeedTracks || !currentSeedGenre) {
    console.error('Missing seedTracks or seedGenre');
    return;
  }

  setIsLoading(true);
  try {
    const response = await fetch('https://yay-api.herokuapp.com/openai/create-playlist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ seed_genre: currentSeedGenre, seed_tracks: currentSeedTracks, additionalInfo: currentAdditionalInfo, access_token: currentAccessToken }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const responseData = await response.json();
    console.log('api response ' + responseData.playlistId)
    setApiResponse(responseData.playlistId);
    setIsModalOpen(true);
  } catch (error) {
    console.error('Error:', error);
  } finally {
    setIsLoading(false);
  }
}

  return (
    <>
    <Head>
    <title>Bundl - Proposal Playlist Generator</title>
    <meta name="description" content="Bundl - AI Gift Idea Generator" />
  </Head>
  <Transition show={isModalOpen} as={React.Fragment}>
  <Dialog
    as="div"
    className="fixed inset-0 z-50 overflow-y-auto"
    onClose={() => setIsModalOpen(false)}
  >
    <div className="min-h-screen px-4 z-50 text-center">
      <Transition.Child
        as={React.Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75" />
      </Transition.Child>

      {/* This element is to trick the browser into centering the modal contents. */}
      <span
        className="inline-block h-screen align-middle"
        aria-hidden="true"
      >
        &#8203;
      </span>

      <Transition.Child
        as={React.Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle bg-white rounded-lg shadow-xl">
          <Dialog.Title
            as="h3"
            className="text-lg font-medium leading-6 text-gray-900"
          >
            Proposal playlist: 
          </Dialog.Title>
          <div className="mt-2">
          {tokenReady ? (
            accessToken ? 
              <Login seedGenre={seedGenre} additionalInfo={additionalInfo} seedTracks={seedTracks} setAccessToken={setAccessToken} setIsLoginModalOpen={setIsLoginModalOpen} setIsAuthenticated={setIsAuthenticated} setApiCall={setApiCall} /> :  
              <WebPlayback token={'BQCKWF9Dv4zdp8G6lXznQ-sGdtsoXulqviPCeAdukCnCwYfuX-CqJtreQmdKKi63p7BMTIiV4aYl3RPP5Avnf6iAHK8sgGh3B38LXBxlzTZx68xKXdb7B32FLT8H0Li4Lv5JszIyDsoWLNikUDgDUApPaZPm4f_t-X8vnm0crF6wvpcD2rWZY3tlKnaM06KyO4JTwJFn'} playlistId={apiResponse.playlistId} />
          ) : (
            <p>Loading...</p>
          )}
        </div>


          <div className="mt-4 flex justify-between">
            <button
              type="button"
              className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-red-400 border border-transparent rounded-md hover:bg-red-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500"
              onClick={() => setIsModalOpen(false)}
            >
              Close
            </button>
            <button
              onClick={() => window.location.href='https://www.givebundl.com'}
              className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-red-400 border border-transparent rounded-md hover:bg-red-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500"
            >
              Get your Bundl book
            </button>
          </div>
        </div>
      </Transition.Child>
    </div>
  </Dialog>
</Transition>


<Transition show={isLoginModalOpen} as={React.Fragment}>
  <Dialog
    as="div"
    className="fixed inset-0 z-50 overflow-y-auto"
    onClose={() => setIsLoginModalOpen(false)}
  >
    <div className="min-h-screen px-4 z-50 text-center">
      <Transition.Child
        as={React.Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75" />
      </Transition.Child>

      {/* This element is to trick the browser into centering the modal contents. */}
      <span
        className="inline-block h-screen align-middle"
        aria-hidden="true"
      >
        &#8203;
      </span>

      <Transition.Child
        as={React.Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle bg-white rounded-lg shadow-xl">
          <Dialog.Title
            as="h3"
            className="text-lg font-medium leading-6 text-gray-900"
          >Login first...
          </Dialog.Title>
          <div className="mt-2">

          <Login seedGenre={seedGenre} additionalInfo={additionalInfo} seedTracks={seedTracks} setAccessToken={setAccessToken} setIsLoginModalOpen={setIsLoginModalOpen} setIsAuthenticated={setIsAuthenticated} setApiCall={setApiCall}  />
         </div> 

  
        </div>
      </Transition.Child>
    </div>
  </Dialog>
</Transition>
<div className="relative bg-[#ffcdcb] py-24 px-6 sm:py-32 lg:px-8">
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <svg
          className="relative left-1/2 -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-40rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF0008" />
              <stop offset={1} stopColor="#FF8080" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Bundl AI Proposal Playlist Generator</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
         (we&apos;ll give you the perfect playlist in just a few seconds)
        </p>
      </div>
      <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
      <div className="grid grid-cols-1 gap-y-6 gap-x-8">
      {/* Image on the left side */}
      <div className="absolute top-350 left-40 z-0">
          <Image src={engagementImage} alt="Engagement Image" width={500} height={300} />
        </div>

        <div className="grid grid-cols-1 gap-y-6 gap-x-8 z-10">
          <div className="sm:col-span-2">
            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-[#FFFFFF]">
           What song(s) do you want this playlist to be based off of?
            </label>
            <div className="mt-2.5">
            <textarea
                name="message"
                id="message"
                rows={4}
                value={seedTracks}
                onChange={(e) => setSeedTracks(e.target.value)}
                className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-[#FFFFFF]">
            What genres do you want this playlist to be based off of?
            </label>
            <div className="mt-2.5">
            <textarea
                name="message"
                id="message"
                rows={4}
                value={seedGenre}
                onChange={(e) => setSeedGenre(e.target.value)}
                className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-[#FFFFFF]">
              Please include on any additional information you would like to share.
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows={4}
                value={additionalInfo}
                onChange={(e) => setAdditionalInfo(e.target.value)}
                className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
              />
            </div>
          </div>
        
        </div>
        {/* <div className="hidden sm:block sm:col-span-2">
        <Image src={engagementImage} alt="Engagement Image" className="w-32 h-32 object-cover" />
      </div> */}
        <button
          type="submit"
          onClick={handleSubmit}
          className="block w-full rounded-md bg-[#8B0000] px-3.5 py-2.5 z-10 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#f55249] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#f55249]"
          disabled={isLoading} // Disable the button while loading
        >
          {isLoading ? `Generating your proposal playlist... T-minus ${countdown}` : 'Generate an awesome proposal idea'}
        </button>
          </div>
      </form>
    </div>
    </>
  )
}