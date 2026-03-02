import './globals.css'

export const metadata = {
  title: 'OMEGA X GODMODE',
  description: 'Sovereign Autonomous AI System',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: 'black' }}>
        {children}
      </body>
    </html>
  )
}

