import { Open_Sans } from 'next/font/google'
import { RiExternalLinkLine } from 'react-icons/ri'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import Head from '@/components/Head'
import Hero from '@/components/Hero'
import ImageGrid from '@/components/ImageGrid'
import styles from '@/styles/Home.module.scss'

const font = Open_Sans({
  subsets: ['latin'],
  weight: 'variable',
})

export default function Home() {
  return (
    <>
      <Head />
      <GoogleAnalytics />
      <main className={`${styles.main} ${font.className}`}>
        <Hero />
        <div className={styles.content} id="intro">
          <section>
            <p>
              I&apos;m an otaku from Canada who loves Japanese anime and music.
              <br />
              <br />
              I recently started drawing anime-style art, and aspire to become
              an illustrator!
              <br />
              You can see a sample of my works here.
            </p>
            <ImageGrid />
          </section>
        </div>
        <div className={styles.content} id="commissions">
          <section>
            <h2>Commissions</h2>
            <p>
              I currently do not accept commissions, except for requests via{' '}
              <a
                href="https://www.pixiv.net/request/send?creatorUserId=18820800&currentPlanId=113755"
                target="_blank"
                rel="noopener noreferrer"
              >
                pixiv Requests
                <RiExternalLinkLine />
              </a>
              . (Target price: 9000JPY)
              <br />
              <br />
              Note that for pixiv Requests, there will be NO rough sketch
              provided before the final artwork, so please provide all necessary
              details up front.
              <br />
              <br />
              Non-commercial use only.
            </p>
          </section>
        </div>
      </main>
    </>
  )
}
