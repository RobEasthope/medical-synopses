import Head from 'next/head';
import groq from 'groq';

import { Box } from 'rebass';

import sanityClient from '../lib/sanity-client';

function Home({ posts }) {
  console.log(posts);

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
      </Box>
    </>
  );
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library

  const pageQuery = groq`
    *[_type == 'synopsis' && slug.current == 'foo'][0]{
      title,
      _updatedAt,
    }
  `;

  const res = await fetch(pageQuery);
  const posts = await res.json();

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  };
}

export default Home;
