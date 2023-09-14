import Link from 'next/link'

import { Container } from '@/components/Container'

const faqs = [
  [
    {
      question: 'How does the free Bundl email series work?',
      answer:
        "The Bundl email series lets you send a curated collection of notes, photos, and audio clips from friends and family to your loved one. These are sent as stylized emails, spaced out over a series of days for ongoing engagement.",
    },
    {
      question: 'What features are included in the free email series?',
      answer:
        'The free email series includes automated content collection, customizable email templates, and the ability to include audio clips through embedded links.',
    },
    {
      question: 'How do I get started?',
      answer:
        "Just sign up on our mobile app, pick your recipients and contributors, and we'll take care of the rest. You can also tailor the prompts for the messages.",
    },
    {
      question: 'How do contributors submit their content?',
      answer:
        "We send an introductory email to your chosen contributors with automated reminders. Each email contains a link to a web form where they can upload their notes, pictures, and optional audio clips.",
    },
  ],
  [
    {
      question: 'How long does the email series last?',
      answer:
        'The length of the email series is determined by the number of contributors. Each submission is sent as a separate email.',
    },
    {
      question: 'Can I modify or cancel the email series?',
      answer:
        "You can make changes to the series within 24 hours of initiating it. For cancellations or additional changes, please contact us.",
    },
    {
      question: 'Is there a limit to the number of contributors?',
      answer:
        "Nope, invite as many contributors as you want. Each contributor can submit one note, photo, and optional audio clip.",
    },
    {
      question: 'Can I include international contributors?',
      answer:
        'Absolutely! Contributors can submit their content online, and the emails will be sent to your chosen recipient, no matter where they are.',
    },
  ],
  [
    {
      question: 'Is the email series mobile-friendly?',
      answer:
        "Yes, the submission process is mobile-friendly. The emails are designed to be easily readable on any device.",
    },
    {
      question: 'What if I need help or have specific requests?',
      answer:
        "We've got you covered. Log in to your account for support or reach out to us directly.",
    },
    {
      question: 'Is there a mobile app for the Bundl email series?',
      answer:
        "Yes, the Bundl email series is fully integrated into our mobile app for a smooth user experience.",
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-t border-gray-200 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            Frequently asked questions
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            If you have anything else you want to ask,{' '}
            <a
              href="mailto:info@example.com"
              className="text-gray-900 underline"
            >
              reach out to us
            </a>
            .
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="space-y-10">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="text-lg font-semibold leading-6 text-gray-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
