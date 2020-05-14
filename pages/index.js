import Head from 'next/head';
import groq from 'groq';

import { Box } from 'rebass';

import { getSingleSynopsis } from '../lib/api';

function Home({ synopsis }) {
  return (
    <>
      <Head>
        <title>Medical Synopses</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Box>
        <h2>Sanity test</h2>
        <p>Foo</p>
        {synopsis && <p>Title: {synopsis.title}</p>}
      </Box>
    </>
  );
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps({
  params = { slug: 'foo' },
  preview = false,
}) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library

  const data = await getSingleSynopsis(params.slug, preview);

  console.log(data);

  return {
    props: {
      preview,
      synopsis: data || null,
    },
  };
}

export default Home;
