
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Script from "next/script"

import '../public/css/bootstrap.css';
import '../public/vendors/linericon/style.css';
import '../public/css/font-awesome.min.css';
import '../public/vendors/owl-carousel/owl.carousel.min.css';
import '../public/css/magnific-popup.css';
import '../public/vendors/nice-select/css/nice-select.css';
import '../public/css/style.css';


// Define metadata including various types of icons
export const metadata = {
  title: 'Ameer Hamza',
  description: 'Ameer Hamza’s portfolio site showcasing projects and skills in Next.js, React, and JavaScript.',
  referrer: 'origin-when-cross-origin',
  keywords: ['Next.js', 'React', 'JavaScript'],
  authors: [{ name: 'Ameer Hamza', url: 'https://example.com' }],
  creator: 'Ameer Hamza',
  publisher: 'Ameer Hamza',
  icons: {
    icon: '/hamza-favicon.svg',
  },
  metadataBase: new URL('https://example.com'), // Base URL for metadata
};

// Export viewport settings separately
export const viewport = {
  width: 'device-width',
  initialScale: 1,
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />

        <Script src="/js/jquery-3.2.1.min.js" strategy="beforeInteractive" />
      <Script src="/js/popper.js" strategy="beforeInteractive" />
      <Script src="/js/bootstrap.min.js" strategy="beforeInteractive" />
      <Script src="/js/stellar.js" strategy="beforeInteractive" />
      <Script src="/js/jquery.magnific-popup.min.js" strategy="beforeInteractive" />
      <Script src="/vendors/nice-select/js/jquery.nice-select.min.js" strategy="beforeInteractive" />
      <Script src="/vendors/isotope/imagesloaded.pkgd.min.js" strategy="beforeInteractive" />
      <Script src="/vendors/isotope/isotope-min.js" strategy="beforeInteractive" />
      <Script src="/vendors/owl-carousel/owl.carousel.min.js" strategy="beforeInteractive" />
      <Script src="/js/jquery.ajaxchimp.min.js" strategy="beforeInteractive" />
      <Script src="/js/mail-script.js" strategy="beforeInteractive" />
      <Script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCjCGmQ0Uq4exrzdcL6rvxywDDOvfAu6eE" strategy="beforeInteractive" />
      <Script src="/js/gmaps.min.js" strategy="beforeInteractive" />
      <Script src="/js/theme.js" strategy="lazyOnload" />
      </body>
    </html>
  )
}
