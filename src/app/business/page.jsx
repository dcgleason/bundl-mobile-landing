import Image from 'next/image'
import Link from 'next/link'
import React from 'react';
import Data from "../../components/components/Data"


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

function CaseStudies({ caseStudies }) {
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
          {caseStudies.map((caseStudy) => (
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
          ))}
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
          Partner with Bundl and experience an increase in productivity, a reduction in voluntary turnover, and reduction in absenteeism. <a href="https://www.selectsoftwarereviews.com/blog/employee-recognition-statistics" target="_blank" rel="noopener noreferrer">[Source]</a>
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
            <ListItem title="Skyrocket Productivity">
              Boost productivity by 17% as per a Deloitte study. More productivity means more growth.
            </ListItem>
            <ListItem title="Cultivate Culture">
              85% of employees feel more connected to culture with recognition programs, says Workhuman. Culture is your competitive edge. 
            </ListItem>
            <ListItem title="Slash Costs">
              Cut turnover by 31% and save up to 9 months of salary per retained employee, according to the Aberdeen Group. 
            </ListItem>
            <ListItem title="ROI You Can See">
              Enjoy a 12% higher return on equity with recognition programs, as found by Quantum Workplace. Track these gains in real-time. 
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}


export default async function Home() {
  // let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
          Increase Productivity. Lower Spend. Build Culture.
            </h1>
          <p className="mt-6 text-xl text-neutral-600">
          Bundl makes recognizing and rewarding people easier and more effective for everyone.  Contact us to see what employee recognition will do for you.
          </p>
        </FadeIn>
      </Container>


      <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            Bundl ROI Calculator
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <Data/>
      </Container>
    </div>
     
      {/* <Clients /> */}

      {/* <CaseStudies caseStudies={caseStudies} /> */}

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
