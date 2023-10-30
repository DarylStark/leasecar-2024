import type { Metadata } from 'next'
import './globals.scss'

export const metadata: Metadata = {
  title: 'Leaseauto 2024',
  description: 'Leaseauto berekening voor 2024',
}

function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div id='main'>
          {children}
        </div>
      </body>
    </html>
  )
}

export default RootLayout;