import { Open_Sans } from 'next/font/google'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import KofiWidget from '@/components/KofiWidget'
import Head from '@/components/Head'
import Hero from '@/components/Hero'
import ImageGrid from '@/components/ImageGrid'
import LinkButton from '@/components/LinkButton'
import Section from '@/components/Section'
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
      <KofiWidget />
      <main className={`${styles.main} ${font.className}`}>
        <Hero />
        <Section id="intro">
          <p>
            I&apos;m an otaku from Canada who loves Japanese anime and music.
            <br />
            <br />
            I recently started drawing anime-style art, and aspire to become an
            illustrator!
            <br />
            You can see a sample of my works here.
          </p>
          <ImageGrid />
        </Section>
        <Section id="commissions">
          <h2>Commissions</h2>
          <p>
            I currently accept commissions via pixiv Requests and Ko-fi only.
            <br />
            <br />
            Please read the terms and instructions before requesting, and
            include all necessary details in the request.
          </p>
          <LinkButton href="https://www.pixiv.net/request/send?creatorUserId=18820800&currentPlanId=113755">
            Request on pixiv
          </LinkButton>
          <LinkButton href="https://ko-fi.com/surisuririsu/commissions">
            Request on Ko-fi
          </LinkButton>
        </Section>
      </main>
    </>
  )
}
