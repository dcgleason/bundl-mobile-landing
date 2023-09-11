import Link from 'next/link'

import { Container } from '@/components/Container'

const faqs = [
  [
    {
      question: 'How does the free Bundl email series work?',
      answer:
        "The Bundl email series allows you to send a collection of special notes, audio, and memorable pictures from friends and family to your loved one. These are sent as stylized emails, spaced out for prolonged value.",
    },
    {
      question: 'What features are included in the free email series?',
      answer:
        'The free email series includes automated submission collection, stylized emails, spaced-out daily delivery, and the ability to include audio clips.',
    },
    {
      question: 'How do I get started?',
      answer:
        "Simply sign up on our mobile app, choose your recipients and contributors, and we'll handle the rest. You can also customize the prompts for the messages.",
    },
    {
      question: 'How do contributors submit their content?',
      answer:
        "We send a welcome email to your selected contributors, followed by automated reminder emails. Each email contains a link to a web form where contributors can submit their notes, pictures, and optional audio clips.",
    },
  ],
  [
    {
      question: 'How long does the email series last?',
      answer:
        'The duration of the email series depends on the number of contributors. Each contributor’s submission is sent as a separate email.',
    },
    {
      question: 'Can I modify or cancel the email series?',
      answer:
        "You can modify the series within 24 hours of starting it. For cancellations or further modifications, please reach out to us.",
    },
    {
      question: 'Is there a limit to the number of contributors?',
      answer:
        "No, you can invite as many contributors as you like. However, each contributor can submit only one note, picture, and optional audio clip.",
    },
    {
      question: 'Can I include international contributors?',
      answer:
        'Absolutely! Since this is an email-based service, you can include contributors from anywhere in the world.',
    },
  ],
  [
    {
      question: 'Is the email series mobile-friendly?',
      answer:
        'Yes, the email series is designed to be viewed on both desktop and mobile devices.',
    },
    {
      question: 'What if I need help or have specific requests?',
      answer:
        "We're here to assist you. You can log in to your account and access our support, or reach out to us directly.",
    },
    {
      question: 'Is there a mobile app for the Bundl email series?',
      answer:
        "Currently, the Bundl email series is accessible through our website. We're working on integrating it into our mobile app.",
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
