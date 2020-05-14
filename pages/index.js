import Head from 'next/head';
import { Box, Heading } from 'rebass';

import { getSingleSynopsis } from '../lib/api';

function Home({ synopsis }) {
  return (
    <>
      <Head>
        <title>Medical Synopses</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Box>{synopsis && <Heading>{synopsis.title}</Heading>}</Box>
    </>
  );
}

export async function getStaticProps({
  params = { slug: 'foo' },
  preview = false,
}) {
  const data = await getSingleSynopsis(params.slug, preview);

  return {
    props: {
      preview,
      synopsis: data || null,
    },
  };
}

export default Home;
