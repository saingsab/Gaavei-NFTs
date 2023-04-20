import Head from 'next/head'
import { Container, Space } from '@mantine/core'
import { HeroSection, Learn, NewRelease, TopCollectors, Trending } from '@/components/Pages/Discover'

export default function Home() {
  return (
    <>
      <Head>
        <title>ROYAL.</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HeroSection />
        <Container size={820} py={48}>
          <Trending />
          <Space h={48} />
          <NewRelease />
          <Space h={48} />
          <TopCollectors />
          <Learn />
        </Container>
      </main>
    </>
  )
}
