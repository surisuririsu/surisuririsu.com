import NextHead from 'next/head'

export default function Head() {
  const title = 'Anime Art, Commissions - risりす (@surisuririsu)'
  const description =
    'I make anime-style art and aspire to become an illustrator. See illustrations, links to my socials, and request arkworks.'

  return (
    <NextHead>
      <title>{title}</title>
      <meta name="author" content="risりす" />
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="risりす,ris,surisuririsu,art,illustration,illustrator,artist,commission,art commission,request,artwork,drawing,digital art,anime,otaku,イラスト,絵描き,アニメ,ris_sound"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <meta name="og:title" content={title} />
      <meta name="og:url" content="https://surisuririsu.com/" />
      <meta name="og:description" content={description} />
      <meta name="og:image" content="https://surisuririsu.com/og_image.jpg" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@surisuririsu" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content="https://surisuririsu.com/twitter_image.jpg"
      />
    </NextHead>
  )
}
