import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'مقاول ترميم بناء ملاحق صباغ',
  description: 'ترميم مباني بناء ملاحق اصباغ اصباغ خارجيه\ اصباغ داخليه \ ازالة اصباغ قديمة \ اعمال بروفايل \ كسر ركام',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir='ltr' className='scroll-smooth overflow-x-hidden'>
      <body className="overflow-x-hidden">{children}</body>
    </html>
  )
}
