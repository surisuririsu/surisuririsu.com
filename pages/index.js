import { Open_Sans } from 'next/font/google'
import Head from '@/components/Head'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import styles from '@/styles/Home.module.scss'

const font = Open_Sans({
  subsets: ['latin'],
  weight: 'variable',
})

export default function Home() {
  return (
    <>
      <Head />
      <main className={`${styles.main} ${font.className}`}>
        <Hero />
        <Navbar />
      </main>
    </>
  )
}
