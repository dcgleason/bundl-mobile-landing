"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react';
import Data from "../../components/components/Data"
import {AppDemo} from "../../components/AppDemo"
import { PhoneFrame } from '../../components/PhoneFrame'
import { useId } from 'react'



import { ContactSection } from '../../components/components/ContactSection'
import { Container } from '../../components/components/Container'
import { FadeIn, FadeInStagger } from '../../components/components/FadeIn'
import { List, ListItem } from '../../components/components/List'
import { SectionIntro } from '../../components/components/SectionIntro'
import { StylizedImage } from '../../components/components/StylizedImage'
import { Testimonial } from '../../components/components/Testimonial'
import logoBrightPath from '../../images/images/clients/bright-path/logo-light.svg'
import logoFamilyFund from '../../images/images/clients/family-fund/logo-light.svg'
import logoGreenLife from '../../images/images/clients/green-life/logo-light.svg'
import logoHomeWork from '../../images/images/clients/home-work/logo-light.svg'
import logoMailSmirk from '../../images/images/clients/mail-smirk/logo-light.svg'
import logoNorthAdventures from '../../images/images/clients/north-adventures/logo-light.svg'
import logoPhobiaDark from '../../images/images/clients/phobia/logo-dark.svg'
import logoPhobiaLight from '../../images/images/clients/phobia/logo-light.svg'
import logoUnseal from '../../images/images/clients/unseal/logo-light.svg'
import imageLaptop from '../../images/images/laptop.jpg'
import { loadCaseStudies } from '../../lib/mdx'
import { useState } from 'react'

const clients = [
  ['Phobia', logoPhobiaLight],
  ['Family Fund', logoFamilyFund],
  ['Unseal', logoUnseal],
  ['Mail Smirk', logoMailSmirk],
  ['Home Work', logoHomeWork],
  ['Green Life', logoGreenLife],
  ['Bright Path', logoBrightPath],
  ['North Adventures', logoNorthAdventures],
]


function BackgroundIllustration(props) {
  let id = useId()

  return (
    <div {...props}>
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full animate-spin-slow"
      >
        <path
          d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z"
          stroke="#D4D4D4"
          strokeOpacity="0.7"
        />
        <path
          d="M513 1025C230.23 1025 1 795.77 1 513"
          stroke={`url(#${id}-gradient-1)`}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-1`}
            x1="1"
            y1="513"
            x2="1"
            y2="1025"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#06b6d4" />
            <stop offset="1" stopColor="#06b6d4" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full animate-spin-reverse-slower"
      >
        <path
          d="M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z"
          stroke="#D4D4D4"
          strokeOpacity="0.7"
        />
        <path
          d="M913 513c0 220.914-179.086 400-400 400"
          stroke={`url(#${id}-gradient-2)`}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-2`}
            x1="913"
            y1="513"
            x2="913"
            y2="913"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#06b6d4" />
            <stop offset="1" stopColor="#06b6d4" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            We&apos;ve worked with hundreds of amazing people
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <Image src={logo} alt={client} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies() {
  return (
    <>
      <SectionIntro
        title="Harnessing technology for a brighter future"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          We believe technology is the answer to the world&apos;s greatest
          challenges. It&apos;s also the cause, so we find ourselves in bit of a
          catch 22 situation.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time
                    dateTime={caseStudy.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Case study</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))} */}
        </FadeInStagger>
      </Container>
    </>
  )
}
function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Data-Driven ROI"
        title="Transform Your Business Metrics with Bundl"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Utilize Bundl and experience an increase in productivity, a reduction in voluntary turnover, and reduction in absenteeism. <a href="https://www.selectsoftwarereviews.com/blog/employee-recognition-statistics" target="_blank" rel="noopener noreferrer">[Source]</a>
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Boost Productivity by 17%">
              A Gallup study shows a 17% increase in productivity with effective recognition. <a href="https://news.gallup.com/businessjournal/200108/damage-inflicted-poor-managers.aspx#:~:text=17%25%20higher%20productivity" target="_blank" rel="noopener noreferrer">[Source]</a>
            </ListItem>
            <ListItem title="Enhance Work Culture 5x">
              Workhuman states that recognition programs make employees 5x more likely to feel connected to their work culture. <a href="https://www.workhuman.com/resources/reports-guides/unleashing-the-human-element-at-work-transforming-workplaces-through-recognition/" target="_blank" rel="noopener noreferrer">[Source]</a>
            </ListItem>
            <ListItem title="Reduce Turnover by 31%">
              According to Deloitte, high-recognition companies cut voluntary turnover rates by 31%. <a href="https://www2.deloitte.com/us/en/insights/deloitte-review/issue-16/employee-engagement-strategies.html" target="_blank" rel="noopener noreferrer">[Source]</a>
            </ListItem>
            <ListItem title="Boost Wellbeing with Authentic Recognition">
            When employees strongly agree that the recognition they receive is authentic, they are 6-8X more likely to strongly agree that their organization cares about their wellbeing. <a href="/GallupRecognitionPaper.pdf" target="_blank" rel="noopener noreferrer">[Source]</a>
          </ListItem>

          </List>
        </div>
      </Container>
    </>
  )
}

function ProductDescription() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            What is Bundl?
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeIn className="mt-10 text-white">
          <p>
            Bundl is a mobile platform that revolutionizes the way you recognize and reward your employees. 
            It allows you to collect and gift digital and/or physical books filled with co-worker praise in the form of audio, pictures, and text to individual employees.
          </p>
        </FadeIn>
      </Container>
    </div>
  );
}


export default function Home() {
  // let caseStudies = (await loadCaseStudies()).slice(0, 3)
  const [stats, setStats] = useState([]);

  const calculateTotalAmount = () => {
    console.log("Current Stats:", stats);
    return stats.reduce((total, item) => {
      const amount = parseInt(item.stat.replace(/[^0-9]/g, ''), 10);
      return total + amount;
    }, 0);
  };

  const totalAmount = calculateTotalAmount();
  return (
    <>
        <Container className="-mb-20 mt-24 sm:mt-32 md:mt-56">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start">
            <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
          Increase Productivity and Build Culture with Remote Employees.
            </h1>
            <p className="mt-6 text-xl text-neutral-600 ">
              Bundl is a mobile platform that makes it 
              <span className="text-[#DF9496]"> easy </span> 
              to <span className='underline'>recognize</span> and <span className='underline'>reward</span> employees, which research shows drives business success as a result <a className="italic" href="/GallupRecognitionPaper.pdf" target="_blank" rel="noopener noreferrer">[source]</a>. <br></br><br></br>Bundl allows your team members to easily create digital or physical company-branded books that contain praise and positive feedback from co-workers. This praise can be in the form of text, audio, or pictures, offering a personalized way to appreciate your colleagues.
            </p>
            </FadeIn>
          <div className="relative mt-10 sm:mt-20 lg:mt-0 lg:flex lg:justify-center">
            <BackgroundIllustration className="absolute left-1/2 top-4 h-[1026px] w-[1026px] -translate-x-1/3 stroke-gray-300/70 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0" />
            <div className="mx-auto h-[600px] max-w-[800px] px-9 [mask-image:linear-gradient(to_bottom,white_60%,transparent)] lg:px-0 lg:pt-10 xl:-bottom-32">
              <PhoneFrame className="mx-auto max-w-[800px] h-[600px]" priority>
                <AppDemo />
              </PhoneFrame>
            </div>
          </div>
        </div>
      </Container>


      <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
          <FadeIn className="flex items-center gap-x-8">
            <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
              Bundl ROI Calculator
            </h2>
            <div className="h-px flex-auto bg-neutral-800" />
          </FadeIn>
          {/* Conditional rendering of the total amount */}
          {stats.length > 0 && (
          < div className="text-white text-center mt-10">
              Recognition with Bundl could generate <span style={{ textDecoration: 'underline' }}>${totalAmount.toLocaleString()}</span> <span style={{ textDecoration: 'underline' }}>annually</span>!
            </div>
          )}
          <Data setStats={setStats} stats={stats}/>
        </Container>
    </div>
     
     {/* <ProductDescription/> */}
      {/* <Clients /> */}

      {/* <CaseStudies /> */}

      {/* <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Phobia', logo: logoPhobiaDark }}
      >
        The team at Studio went above and beyond with our onboarding, even
        finding a way to access the user’s microphone without triggering one of
        those annoying permission dialogs.
      </Testimonial> */}

      <Services />

      <ContactSection id="ContactForm" />
    </>
  )
}
