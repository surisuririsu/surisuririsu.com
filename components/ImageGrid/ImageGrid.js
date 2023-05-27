import Image from 'next/image'
import styles from '@/styles/ImageGrid.module.scss'
import img_2023_05_23_nene from './2023_05_23_nene.jpg'
import img_2023_05_19_koharu from './2023_05_19_koharu.jpg'
import img_2023_05_12_arisu from './2023_05_12_arisu.jpg'
import img_2023_05_10_momoka_arisu_chie from './2023_05_10_momoka_arisu_chie.jpg'
import img_2023_05_03_roko from './2023_05_03_roko.jpg'
import img_2023_05_02_arisu from './2023_05_02_arisu.jpg'
import img_2023_05_01_yayoi from './2023_05_01_yayoi.jpg'
import img_2023_04_25_yume from './2023_04_25_yume.jpg'
import img_2023_04_20_adelheid from './2023_04_20_adelheid.jpg'

const IMAGES = [
  {
    src: img_2023_05_23_nene,
    url: 'https://www.pixiv.net/artworks/108392883',
  },
  {
    src: img_2023_05_19_koharu,
    url: 'https://www.pixiv.net/artworks/108260976',
  },
  {
    src: img_2023_05_12_arisu,
    url: 'https://www.pixiv.net/artworks/108088961',
  },
  {
    src: img_2023_05_10_momoka_arisu_chie,
    url: 'https://www.pixiv.net/artworks/108022011',
  },
  {
    src: img_2023_05_03_roko,
    url: 'https://www.pixiv.net/artworks/107817047',
  },
  {
    src: img_2023_05_02_arisu,
    url: 'https://www.pixiv.net/artworks/107759985',
  },
  {
    src: img_2023_05_01_yayoi,
    url: 'https://www.pixiv.net/artworks/107724177',
  },
  {
    src: img_2023_04_25_yume,
    url: 'https://www.pixiv.net/artworks/107533027',
  },
  {
    src: img_2023_04_20_adelheid,
    url: 'https://www.pixiv.net/artworks/107385736',
  },
]

export default function ImageGrid() {
  return (
    <>
      <div className={styles.grid}>
        {IMAGES.map(({ src, url }) => (
          <a key={url} href={url} target="_blank" rel="noopener noreferrer">
            <Image src={src} className={styles.backImg} />
            <Image src={src} />
          </a>
        ))}
      </div>
      <a
        className={styles.pixivCta}
        href="https://pixiv.me/surisuririsu"
        target="_blank"
        rel="noopener noreferrer"
      >
        See more on pixiv
      </a>
    </>
  )
}
