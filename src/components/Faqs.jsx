import Link from 'next/link'

import { Container } from '@/components/Container'

const faqs = [
  [
    {
      question: 'How does Bundl Book work?',
      answer:
        "Bundl Book allows you to collect notes and pictures from your significant other's family and friends. Simply import contacts, choose your prompts, and we'll create a special book for your proposal.",
    },
    {
      question: 'Can I customize the prompts for the messages?',
      answer:
        'Yes! While we provide guided prompts, you can also create your own to make the messages even more personal.',
    },
  ],
  [
    {
      question: 'What are the pricing options?',
      answer:
       "We offer various proposal packages to suit your needs. From the basic Bundl Book to complete proposal planning, you can view our pricing here.",
    },
    {
      question: 'Can I see examples of successful proposals with Bundl Book?',
      answer:
       "Absolutely! You can watch videos and read reviews from those who've made their proposals extraordinary with Bundl Book here.",
    },
    {
      question: 'How long does it take to create a Bundl Book?',
      answer:
        'Typically, it takes 2 weeks for the automated collection process to complete and the book to be printed and shipped. For urgent requests, please contact us.',
    },
    {
      question: 'How do you keep the book a secret?',
      answer:
        "Beyond requesting your family and friends don't tell your S/O about the surprise, we also send the book to you in descreet package.",
    },
  ],
  [
    {
      question: 'Can I include international family and friends in the Bundl Book?',
      answer:
        'Yes! You can import contacts from various platforms or input emails, allowing you to include loved ones from around the world.',
    },
    {
      question: 'What if I need help or have specific requests?',
      answer:
        "We're here to assist you! You can log in to your account and access our support, or reach out to us directly at [contact information].",
    },
    {
      question: 'Is there a mobile app for Bundl Book?',
      answer:
        "Yes! You can download our app to manage your Bundl Book on the go. Download now.",
    },
    {
      question: 'Can I cancel or modify my Bundl Book order?',
      answer:
        "You can modify your order within 24 hours of placing it. For cancellations or further modifications, please review our cancellation policy.",
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
