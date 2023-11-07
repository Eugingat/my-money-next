import type { Metadata } from 'next'
import './global.css'

export const metadata: Metadata = {
  title: 'My money',
  description: 'Application for your money',
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en">
      <body className='bg-slate-200 dark:bg-slate-900'>
      {children}
      </body>
    </html>
  )
}
