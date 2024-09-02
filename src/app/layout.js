import NavBarComponent from '../components/NavBarComponent';
import FooterComponent from '../components/FooterComponent';
import CustomCursor from '../components/CustomCursor';
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Head from 'next/head';

export const metadata = {
  title: "Sunny Shaban - Full Stack Developer | React, Next.js, Django Expert",
  description: "Sunny Shaban is a skilled full stack developer specializing in React, Next.js, and Django. Discover his portfolio showcasing innovative projects and professional achievements in web development.",
  keywords: "Sunny Shaban, Full Stack Developer, React.js, Next.js, Django, Web Development, Portfolio, React Developer, Next.js Expert, Django Developer",
  author: "Sunny Shaban",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content="https://www.sunnyallana.com/images/og-image.jpg" /> {/* Replace with actual URL */}
        <meta property="og:url" content="https://www.sunnyallana.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Sunny Shaban Portfolio" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content="https://www.sunnyallana.com/images/twitter-card-image.jpg" /> {/* Replace with actual URL */}
        <meta name="twitter:url" content="https://www.sunnyallana.com" />
        <link rel="canonical" href="https://www.sunnyallana.com" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Sunny Shaban Ali Allana",
              "description": "Sunny Shaban is a skilled full stack developer specializing in React, Next.js, and Django. Discover his portfolio showcasing innovative projects and professional achievements in web development.",
              "url": "https://www.sunnyallana.com",
              "jobTitle": "Full Stack Developer",
              "affiliation": {
                "@type": "Organization",
                "name": "Bytewise LTD"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Pakistan"
              },
              "sameAs": [
                "https://www.linkedin.com/in/sunnyallana",
                "https://github.com/sunnyallana"
              ]
            }
          `}
        </script>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <meta name="application-name" content="Sunny Shaban Portfolio" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <body>
        <NavBarComponent />
        {children}
        <FooterComponent />
        <CustomCursor />
      </body>
    </html>
  );
}