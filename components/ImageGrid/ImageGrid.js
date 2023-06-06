import Image from 'next/image'
import LinkButton from '@/components/LinkButton'
import styles from '@/styles/ImageGrid.module.scss'
import img_2023_05_28_mashiro from './2023_05_28_mashiro.jpg'
import img_2023_06_02_koharu_chie_miria from './2023_06_02_koharu_chie_miria.jpg'
import img_2023_06_05_ageha from './2023_06_05_ageha.jpg'
import img_2023_05_23_nene from './2023_05_23_nene.jpg'
import img_2023_05_19_koharu from './2023_05_19_koharu.jpg'
import img_2023_05_12_arisu from './2023_05_12_arisu.jpg'
import img_2023_05_10_momoka_arisu_chie from './2023_05_10_momoka_arisu_chie.jpg'
import img_2023_05_03_roko from './2023_05_03_roko.jpg'
import img_2023_05_02_arisu from './2023_05_02_arisu.jpg'

const IMAGES = [
  {
    src: img_2023_05_28_mashiro,
    url: 'https://www.pixiv.net/artworks/108540842',
  },
  {
    src: img_2023_06_02_koharu_chie_miria,
    url: 'https://www.pixiv.net/artworks/108664761',
  },
  {
    src: img_2023_06_05_ageha,
    url: 'https://www.pixiv.net/artworks/108780257',
  },
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
      <LinkButton href="https://pixiv.me/surisuririsu">
        See more on pixiv
      </LinkButton>
    </>
  )
}
