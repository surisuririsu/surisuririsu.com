import { FaAngleDown } from 'react-icons/fa'
import {
  SiTwitter,
  SiPixiv,
  SiTiktok,
  SiInstagram,
  SiYoutube,
} from 'react-icons/si'
import styles from '@/styles/Navbar.module.scss'

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <h1>risりす</h1>
      <div className={styles.links}>
        <a href="https://twitter.com/surisuririsu" aria-label="Twitter">
          <SiTwitter />
        </a>
        <a href="https://pixiv.me/surisuririsu" aria-label="Pixiv">
          <SiPixiv />
        </a>
        <a href="https://www.tiktok.com/@surisuririsu" aria-label="TikTok">
          <SiTiktok />
        </a>
        <a href="https://www.instagram.com/surisuririsu" aria-label="Instagram">
          <SiInstagram />
        </a>
        <a href="https://www.youtube.com/@surisuririsu" aria-label="YouTube">
          <SiYoutube />
        </a>
      </div>
      <a className={styles.down} href="#hello">
        <FaAngleDown />
      </a>
    </div>
  )
}
