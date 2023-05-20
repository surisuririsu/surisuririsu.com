import { Open_Sans } from 'next/font/google';
import Head from 'next/head'
import Image from 'next/image'
import { SiTwitter, SiPixiv, SiTiktok, SiInstagram, SiYoutube } from 'react-icons/si';
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
        <meta name="og:image" content="https://surisuririsu.com/avatar.jpg" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@surisuririsu" />
        <meta name="twitter:title" content="risりす" />
        <meta name="twitter:description" content="I make weeb art. Links to my socials." />
        <meta name="twitter:image" content="https://surisuririsu.com/avatar.jpg" />
      </Head>
      <main className={styles.main}>
        <div className={`${font.className} ${styles.profile}`}>
          <Image className={styles.avatar} src="/avatar.jpg" width={160} height={160} />
          <div className={styles.content}>
            <h1>risりす</h1>
            <div className={styles.links}>
              <a href="https://twitter.com/surisuririsu"><SiTwitter /></a>
              <a href="https://pixiv.me/surisuririsu"><SiPixiv /></a>
              <a href="https://www.tiktok.com/@surisuririsu"><SiTiktok /></a>
              <a href="https://www.instagram.com/surisuririsu"><SiInstagram /></a>
              <a href="https://www.youtube.com/@surisuririsu"><SiYoutube /></a>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
