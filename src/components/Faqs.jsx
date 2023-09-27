import Link from 'next/link'

import { Container } from '@/components/Container'
const faqs = [
  [
    {
      question: 'How does the digital Bundl work?',
      answer:
        "The digital Bundl compiles notes, photos, and audio clips from friends and family into a single PDF formatted like a book. This PDF is then sent to your chosen recipient via email.",
    },
    {
      question: 'What features are included in the digital Bundl?',
      answer:
        'The digital Bundl includes automated content collection, a beautifully designed PDF, and the option to include audio clips through embedded links.',
    },
    {
      question: 'How do I get started?',
      answer:
        "Sign up on our mobile app, select your recipients and contributors, and we'll handle the rest. You can also customize the prompts for the messages.",
    },
    {
      question: 'How do contributors submit their content?',
      answer:
        "Contributors receive an introductory email with automated reminders. Each email has a link to a web form where they can upload their notes, pictures, and optional audio clips.",
    },
  ],
  [
    {
      question: 'How long does it take to create a Bundl?',
      answer:
        'The creation time depends on how quickly contributors submit their content. Once all submissions are in, the digital Bundl is generated and sent. It can take anywhere from a few days to two weeks.',
    },
    {
      question: 'Can I modify or cancel my Bundl order?',
      answer:
        "Changes can be made within 24 hours of initiating the Bundl. For cancellations or additional changes, please contact us.",
    },
    {
      question: 'Is there a limit to the number of contributors?',
      answer:
        "No, invite as many contributors as you'd like. Each can submit one note, photo, and optional audio clip.",
    },
    {
      question: 'What is the surprise virtual event?',
      answer:
        'The surprise virtual event is an online gathering where the Bundl is revealed to the recipient. It brings together all contributors for a collective celebration.',
    },
    {
      question: 'How do I set up the surprise virtual event?',
      answer:
        'When you choose a package that includes the virtual event, we’ll guide you through the setup. Invitations and reminders are sent to all contributors and the recipient.',
    },
   
  ],
  [
    {
      question: 'Is Bundl mobile-friendly?',
      answer:
        "Absolutely, the submission process is mobile-friendly, and the PDF is designed to be easily readable on any device.",
    },
    {
      question: 'Can I include international contributors?',
      answer:
        'Yes, contributors can submit their content online, and the digital Bundl will be emailed to your recipient, regardless of location.',
    },
    {
      question: 'What is the Bundl book?',
      answer:
        'The Bundl book is a physical keepsake that compiles all the notes, photos, and messages from contributors into a beautifully designed hardcover book.',
    },
    {
      question: 'How is the Bundl book different from the digital Bundl?',
      answer:
        'While the digital Bundl is a PDF sent via email, the Bundl book is a tangible keepsake that you can hold, making it a more lasting memento.',
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
