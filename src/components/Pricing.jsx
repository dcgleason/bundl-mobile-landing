'use client'

import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logomark } from '@/components/Logo'
import { CheckCircleIcon } from '@heroicons/react/20/solid'


const plans = [
  {
    name: 'The Starter',
    featured: false,
    price: '$99',
    description:
      'Ideal for making your proposal unique with personal touches.',
    button: {
      label: 'Get the app',
      href: '/register',
    },
    features: [
      'Custom prompts',
      'Digital Bundl Book preview',
      'Easy submissions collection',
      'Guided prompts for supportive, meaningful messages',
      'Paperback quality',
      '20 pages max',
    ],
    logomarkClassName: 'fill-gray-300',
  },
  {
    name: 'The Heartwarmer',
    featured: false,
    price: '$149',
    description:
      'Take your proposal further. More customization, more memories, more love.',
    button: {
      label: 'Get the app',
      href: '/register',
    },
    features: [
      'All Starter features',
      'Pick your cover color',
      'Priority help',
      // 'Gift wrap option',
      'Fast delivery',
      'Hardback quality',
      '40 pages max',
    ],
    logomarkClassName: 'fill-gray-500',
  },
  {
    name: 'The Romantic',
    featured: true,
    price: '$249',
    description:
      'The ultimate proposal gift.',
    button: {
      label: 'Get the app',
      href: '/register',
    },
    features: [
      'All Heartwarmer features',
      // 'Personal proposal planning',
      // 'Premium gift wrap',
      'Exclusive proposal resources',
      'Linen hardback quality',
      'Unlimited pages',
      'Audio clips included',
    ],
    logomarkClassName: 'fill-[#DF9496]',
  },
]

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
        fill="currentColor"
      />
      <circle
        cx="12"
        cy="12"
        r="8.25"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Plan({
  name,
  price,
  description,
  button,
  features,
  featured = false,
  logomarkClassName,
}) {
  return (
    <section
      className={clsx(
        'flex flex-col overflow-hidden rounded-3xl p-6 shadow-lg shadow-gray-900/5',
        featured ? 'order-first bg-gray-900 lg:order-none' : 'bg-white'
      )}
    >
      <h3
        className={clsx(
          'flex items-center text-sm font-semibold',
          featured ? 'text-white' : 'text-gray-900'
        )}
      >
        <Logomark className={clsx('h-6 w-6 flex-none', logomarkClassName)} />
        <span className="ml-4">{name}</span>
      </h3>
      <p
        className={clsx(
          'mt-5 flex text-3xl tracking-tight',
          featured ? 'text-white' : 'text-gray-900'
        )}
      >
        {price}
      </p>
      <p
        className={clsx(
          'mt-3 text-sm',
          featured ? 'text-gray-300' : 'text-gray-700'
        )}
      >
        {description}
      </p>
      <div className="order-last mt-6">
        <ul
          role="list"
          className={clsx(
            '-my-2 divide-y text-sm',
            featured
              ? 'divide-gray-800 text-gray-300'
              : 'divide-gray-200 text-gray-700'
          )}
        >
          {features.map((feature) => (
            <li key={feature} className="flex py-2">
              <CheckIcon
                className={clsx(
                  'h-6 w-6 flex-none',
                  featured ? 'text-white' : 'text-[#DF9496]'
                )}
              />
              <span className="ml-4">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <Button
        href={button.href}
        style={{ backgroundColor: featured ? '#DF9496' : 'gray' }}
        className="mt-6"
        aria-label={`Get started with the ${name} plan for ${price}`}
      >
        {button.label}
      </Button>
    </section>
  )
}



function Price() {
  let [activePeriod, setActivePeriod] = useState('Monthly')

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-title"
      className="border-t border-gray-200 bg-gray-100 py-20 sm:py-32"
    >
      <Container>
      <div class="bg-white py-24 sm:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl sm:text-center">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Place gift order in-app.</h2>
      <p class="mt-6 text-lg leading-8 text-gray-600">Caution: it is likely your gift recipient cries tears of joy.</p>
    </div>
    <div class="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
      <div class="p-8 sm:p-10 lg:flex-auto">
        <h3 class="text-2xl font-bold tracking-tight text-gray-900">Digital Bundl</h3>
        <p class="mt-6 text-base leading-7 text-gray-600">Automated, stylized, and meant to pull all of the heartstrings.</p>
        <div class="mt-10 flex items-center gap-x-4">
          <h4 class="flex-none text-sm font-semibold leading-6 text-black">What&apos;s included</h4>
          <div class="h-px flex-auto bg-gray-100"></div>
        </div>
        <ul role="list" class="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
          <li class="flex gap-x-3">
            <svg class="h-6 w-5 flex-none text-black" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
            </svg>
            Automated submission collection
          </li>
          <li class="flex gap-x-3">
            <svg class="h-6 w-5 flex-none text-black" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
            </svg>
            Book PDF delivered via email
          </li>
          <li class="flex gap-x-3">
            <svg class="h-6 w-5 flex-none text-black" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
            </svg>
            Scheduled delivery 
            </li>
          <li class="flex gap-x-3">
            <svg class="h-6 w-5 flex-none text-black" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
            </svg>
            Personalized messaging (from you)
          </li>
        </ul>
      </div>
      <div class="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
          <div class="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
            <div class="mx-auto max-w-xs px-8">
              <p class="mt-6 flex items-baseline justify-center gap-x-2">
                <span class="text-5xl font-bold tracking-tight text-gray-900 line-through">$29.99</span>
                <span class="text-2xl font-bold text-gray-900">FREE</span>
              </p>
              <a href="#" class="mt-10 block w-full rounded-md bg-[#DF9496] px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600">Download app</a>
              <p class="mt-6 text-xs leading-5 text-gray-600">The world&apos;s most meaningful gift...now free. </p>
            </div>
          </div>
        </div>
    </div>
  </div>
</div>
      </Container>
    </section>
  )
}



const tiers = [
  {
    name: 'Digital Bundl',
    id: 'tier-digital',
    href: '#',
    price: { monthly: 'Free', annually: 'Free' },
    description: 'A heartfelt digital book for special occasions.',
    features: [
      'Digital, styled PDF of all submission',
      'Automated submission collection',
      'Scheduled delivery via email',
      'Personalized messaging from you',
    ],
  },
  {
    name: 'Hardcover Bundl',
    id: 'tier-hardcover',
    href: '#',
    price: { monthly: '$99', annually: '$99' }, 
    description: 'Everything in Digital, plus a hardcover book.',
    features: [
      'All Digital Bundl features',
      'Designed hardcover book',
      'Priority support',
    ],
  },
  {
    name: 'Linen Bundl + Virtual Reveal',
    id: 'tier-virtual-event',
    href: '#',
    price: { monthly: '$199', annually: '$199' },
    description: 'Includes all Hardcover features, plus a help planning for a virtual event on the reveal of your Bundl. ',
    features: [
      'Linen Hardcover Bundl',
      'Video projector for immersive experience virtual reveal',
      'Custom digital & physcial invitations for virtual reveal',
      'Event planning & coordination for your virtual, group reveal call',
      'Tech support for virtual call',
        ],
  },
]


export function Pricing() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl sm:text-center">
          <h2 className="text-base font-semibold leading-7 text-[#DF9496]">Pricing</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Choose the right option for&nbsp;you
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 sm:text-center">
         Purchases happen in the mobile app.

        </p>
        <div className="mt-20 flow-root">
          <div className="isolate -mt-16 grid max-w-sm grid-cols-1 gap-y-16 divide-y divide-gray-100 sm:mx-auto lg:-mx-8 lg:mt-0 lg:max-w-none lg:grid-cols-3 lg:divide-x lg:divide-y-0 xl:-mx-4">
            {tiers.map((tier) => (
              <div key={tier.id} className="pt-16 lg:px-8 lg:pt-0 xl:px-14">
                <h3 id={tier.id} className="text-base font-semibold leading-7 text-gray-900">
                  {tier.name}
                </h3>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">{tier.price.monthly}</span>
                  {/* <span className="text-sm font-semibold leading-6 text-gray-600">/month</span> */}
                </p>
                {/* <p className="mt-3 text-sm leading-6 text-gray-500">{tier.price.annually} per month if paid annually</p> */}
                <a
                  href={tier.href}
                  aria-describedby={tier.id}
                  className="mt-10 block rounded-md bg-[#DF9496] px-3 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#C78386] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DF9496]"
                >
                  Purchase in mobile app
                </a>
                <p className="mt-10 text-sm font-semibold leading-6 text-gray-900">{tier.description}</p>
                <ul role="list" className="mt-6 space-y-3 text-sm leading-6 text-gray-600">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckCircleIcon className="h-6 w-5 flex-none text-[#DF9496]" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}