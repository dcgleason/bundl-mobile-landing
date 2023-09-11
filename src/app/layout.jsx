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
    default: "Bundl - The world's most meaningful gift...free.",
  },
  description:
  'Bundl helps you craft a personalized keepsake gift for a family member or friend. It is one of the most meaningful gifts you can give...words of affirmation from loved ones.  Great for milestone birthdays, baby showers, or retirements, our custom prompts, design choices, and quality materials make your gift truly special.',
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
