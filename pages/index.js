import { Open_Sans } from 'next/font/google'
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
        <div className={styles.content} id="content">
          <section>
            <h2>Hello</h2>
            <p>
              I'm an otaku from Canada who loves Japanese anime and music.
              <br />
              <br />
              I recently started drawing anime-style art, and aspire to become
              an illustrator!
              <br />
              You can see a sample my works here.
            </p>
            <ImageGrid />
          </section>
        </div>
      </main>
    </>
  )
}
