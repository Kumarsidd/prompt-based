"use client"
import { Provider } from 'react-redux';
import { store } from './redux/store';
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'GPT',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body className={inter.className}>
          {children}
        </body>
      </html>
    </Provider>
  )
}