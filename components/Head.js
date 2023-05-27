import NextHead from 'next/head'

export default function Head() {
  return (
    <NextHead>
      <title>Anime Art - risりす</title>
      <meta name="author" content="risりす" />
      <meta
        name="description"
        content="I make anime-style art and aspire to become an illustrator. See a sample of my works and links to my socials."
      />
      <meta name="keywords" content="Art, Anime, Illustration, surisuririsu" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <meta name="og:title" content="Anime Art - risりす" />
      <meta name="og:url" content="https://surisuririsu.com/" />
      <meta
        name="og:description"
        content="I make anime-style art and aspire to become an illustrator. See a sample of my works and links to my socials."
      />
      <meta name="og:image" content="https://surisuririsu.com/og_image.jpg" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@surisuririsu" />
      <meta name="twitter:title" content="Anime Art - risりす" />
      <meta
        name="twitter:description"
        content="I make anime-style art and aspire to become an illustrator. See a sample of my works and links to my socials."
      />
      <meta
        name="twitter:image"
        content="https://surisuririsu.com/twitter_image.jpg"
      />
    </NextHead>
  )
}
