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
    default: "Bundl - Your Best Gift Ever",
  },
  description:
    'Bundl helps you create personalized keepsakes for your loved ones. With customizable prompts, design options, and quality materials, you can craft a unique gift that captures memories and emotions. Perfect for proposals, anniversaries, and special occasions, Bundl is the way to make your gift truly special.',
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
