'use client'

import React, { useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Head from "next/head"
import axios from 'axios';



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function AIForm() {
  const [agreed, setAgreed] = useState(false)

const [meetStory, setMeetStory] = useState('');
const [milestone, setMilestone] = useState('');
const [memories, setMemories] = useState('');
const [budget, setBudget] = useState('');
const [interests, setInterests] = useState('');
const [timeline, setTimeline] = useState('');
const [location, setLocation] = useState('');
const [additionalInfo, setAdditionalInfo] = useState('');
const [isModalOpen, setIsModalOpen] = useState(false);
const [apiResponse, setApiResponse] = useState('');
const [isLoading, setIsLoading] = useState(false);  // New state variable

const [countdown, setCountdown] = useState(29);

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

  const formData = {
    meetStory: meetStory,
    milestone: milestone,
    memories: memories,
    budget: budget,
    interests: interests,
    timeline: timeline,
    location: location,
    additionalInfo: additionalInfo,
  };

  setIsLoading(true);  // Set loading to true when the request starts

  try {
    const response = await fetch('https://yay-api.herokuapp.com/openai/gift', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const responseData = await response.json();

    console.log('api response:' + responseData.messsage);
    console.log('response:' + responseData.message);
    setApiResponse(responseData.message);
    setIsModalOpen(true);
  } catch (error) {
    console.error('Error:', error);
  } finally {
    setIsLoading(false);  // Set loading to false when the request ends
  }
}

  return (
    <>
    <Head>
    <title>Bundl - Proposal Idea Generator</title>
    <meta name="description" content="Bundl - AI Gift Idea Generator" />
  </Head>
    <Transition show={isModalOpen} as={React.Fragment}>
  <Dialog
    as="div"
    className="fixed inset-0 z-10 overflow-y-auto"
    onClose={() => setIsModalOpen(false)}
  >
    <div className="min-h-screen px-4 text-center">
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
            Proposal idea: 
          </Dialog.Title>
          <div className="mt-2">
            <p className="text-sm text-gray-500">
              {/* Replace this with your OpenAI API answer */}
            {apiResponse}
            </p>
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
    <div className="isolate bg-white py-24 px-6 sm:py-32 lg:px-8">
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
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">AI proposal idea generator</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
         Fill out this form to generate a custom proposal idea. 
        </p>
      </div>
      <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-y-6 gap-x-8">
          <div className="sm:col-span-2">
            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
            How did you and your partner meet?
            </label>
            <div className="mt-2.5">
            <textarea
                name="message"
                id="message"
                rows={4}
                value={meetStory}
                onChange={(e) => setMeetStory(e.target.value)}
                className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
            What are some significant milestones in your relationship?
            </label>
            <div className="mt-2.5">
            <textarea
                name="message"
                id="message"
                rows={4}
                value={milestone}
                onChange={(e) => setMilestone(e.target.value)}
                className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
            What are some of your favorite shared memories?
            </label>
            <div className="mt-2.5">
            <textarea
                name="message"
                id="message"
                rows={4}
                value={memories}
                onChange={(e) => setMemories(e.target.value)}
                className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
            What is your budget for the proposal?
            </label>
            <div className="mt-2.5">
            <textarea
                name="message"
                id="message"
                rows={4}
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
            What are your partner&apos;s hobbies and interests?
            </label>
            <div className="mt-2.5">
            <textarea
                name="message"
                id="message"
                rows={4}
                value={interests}
                onChange={(e) => setInterests(e.target.value)}
                className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold leading-6 text-gray-900">
            What is your timeline for planning and executing the proposal?
            </label>
            <div className="mt-2.5">
            <textarea
                name="message"
                id="message"
                rows={4}
                value={timeline}
                onChange={(e) => setTimeline(e.target.value)}
                className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold leading-6 text-gray-900">
            Any ideas about where you want to propose?
            </label>
            <div className="relative mt-2.5">
            <textarea
                name="message"
                id="message"
                rows={4}
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
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
        <div className="mt-10">
        <button
          type="submit"
          onClick={handleSubmit}
          className="block w-full rounded-md bg-[#8B0000] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#f55249] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#f55249]"
          disabled={isLoading} // Disable the button while loading
        >
          {isLoading ? `Generating your proposal idea... T-minus ${countdown}` : 'Generate an awesome proposal idea'}
        </button>
          </div>
      </form>
    </div>
    </>
  )
}