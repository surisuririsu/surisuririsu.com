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
        <meta name="description" content="I make weeb art" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
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
