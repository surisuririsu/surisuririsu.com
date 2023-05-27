import Image from 'next/image'
import Navbar from '@/components/Navbar'
import styles from '@/styles/Hero.module.scss'
import heroImage from './hero.jpg'

export default function Hero() {
  return (
    <div className={styles.hero}>
      <Image
        className={styles.heroImage}
        src={heroImage}
        alt="Digital drawing of girl sleeping, surrounded by small animals"
        priority
      />
      <Navbar />
    </div>
  )
}
