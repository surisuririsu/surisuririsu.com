import Image from 'next/image'
import styles from '@/styles/Hero.module.scss'
import heroImage from './hero.jpg'

export default function Hero() {
    return (
        <Image
            className={styles.hero}
            src={heroImage}
            alt="Digital drawing of girl sleeping, surrounded by small animals"
        />
    )
}
