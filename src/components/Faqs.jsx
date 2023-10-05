import Link from 'next/link'

import { Container } from '@/components/Container'


const faqs = [
  [
    {
      question: 'How do I get started with Bundl?',
      answer:
        'Sign up on our mobile app, select the loved one you wish to celebrate, and invite contributors. We handle the rest, including customizable prompts for heartfelt messages.',
    },
    {
      question: 'How do contributors submit their content?',
      answer:
        'Contributors will receive an introductory email with automated reminders. Each email contains a link to a web form where they can upload their notes, pictures, and optional audio clips.',
    },
    {
      question: 'How long does it take to receive a Bundl?',
      answer:
        'The time frame depends on how quickly contributors submit their content. Once all submissions are in, the keepsake book is generated and sent, typically within a few days to two weeks.',
    },
    {
      question: 'Can I modify or cancel my Bundl order?',
      answer:
        'You can make changes within 24 hours of initiating the Bundl. For cancellations or additional adjustments, please contact us.',
    },
  ],
  [
    {
      question: 'Is there a limit to the number of contributors?',
      answer:
        'No, feel free to invite as many contributors as you like. Each contributor can submit one note, photo, and optional audio clip.',
    },
    {
      question: 'How does Bundl make gifts more meaningful?',
      answer:
        'Bundl creates a unique keepsake filled with personal notes, photos, and audio clips from friends and family, making it a deeply touching gift.',
    },
    {
      question: 'What is included in the keepsake book?',
      answer:
        'The keepsake book is a hardcover compilation of all the submitted notes, photos, and messages, elegantly designed to be a cherished memento.',
    },
  ],
  [
    {
      question: 'Is Bundl mobile-friendly?',
      answer:
        'Yes, the submission process is mobile-optimized, making it easy for contributors to participate from any device.',
    },
    {
      question: 'Can I include international contributors?',
      answer:
        'Absolutely, contributors can submit their content online, making it accessible regardless of geographical location.',
    },
    {
      question: 'How do I pay for Bundl?',
      answer:
        'We offer flexible payment options. You pay only for the keepsake books you choose to send.',
    },
  ],
];


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
