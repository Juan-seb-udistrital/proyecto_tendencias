import Navigation from '/components/Navigation'
import '/styles/globals.css'

export default function RootLayout ({ children }) {
  return (
    <html>
      <head />
      <body>
        <main className='flex'>
          <Navigation />
          {children}
        </main>
      </body>
    </html>
  )
}
