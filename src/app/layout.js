import 'primeicons/primeicons.css';
import './globals.css';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/footer';

export const metadata = {
  title: 'My App',
  description: 'My Next.js App with Sticky Header',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
