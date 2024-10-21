import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Cormorant, Montserrat } from 'next/font/google';
import "./globals.css"

const cormorant = Cormorant({
  subsets: ['latin'],  
  weight: ['400'], 
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600'], 
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${cormorant.className} ${montserrat.className}`}>
        <nav>
          <Navbar/>
        </nav>
        <main className='bg-[rgb(252,245,243)]'>
          {children}
        </main>
        <footer>
          <Contact/>
          <Footer/>
        </footer>
      </body>
    </html>
  );
}
