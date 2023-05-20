import { Open_Sans } from 'next/font/google';
import Head from 'next/head'
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import styles from '@/styles/Home.module.scss'

const font = Open_Sans({
  subsets: ['latin'],
  weight: 'variable',
});

export default function Home() {
  return (
    <>
      <Head>
        <title>risりす</title>
        <meta name="author" content="risりす" />
        <meta name="description" content="I make weeb art. Links to my socials." />
        <meta name="keywords" content="Art, Anime, Illustration, surisuririsu" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="og:title" content="risりす" />
        <meta name="og:url" content="http://surisuririsu.com/" />
        <meta name="og:description" content="I make weeb art. Links to my socials." />
        <meta name="og:image" content="https://surisuririsu.com/og_image.jpg" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@surisuririsu" />
        <meta name="twitter:title" content="risりす" />
        <meta name="twitter:description" content="I make weeb art. Links to my socials." />
        <meta name="twitter:image" content="https://surisuririsu.com/twitter_image.jpg" />
      </Head>
      <main className={`${styles.main} ${font.className}`}>
        <Hero />
        <Navbar />
      </main>
    </>
  )
}
