import { Inter } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata = {
  title: {
    template: 'Bundl',
    default: "Bundl - Your Perfect Proposal Gift",
  },
  description:
    'Bundl helps you craft a personalized keepsake for your proposal. With custom prompts, design choices, and quality materials, create a unique gift that captures the love and excitement of the moment. Bundl makes your proposal gift truly special.',
}



export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={clsx('h-full bg-gray-50 antialiased', inter.variable)}
    >
      <body className="flex h-full flex-col">
        <div className="flex min-h-full flex-col">{children}</div>
      </body>
    </html>
  )
}
