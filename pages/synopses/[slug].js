import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Head from 'next/head';
import { Box, Heading } from 'rebass';

import { getSingleSynopsis } from '../../lib/api';

function Synopsis({ synopsis }) {
  const router = useRouter();
  if (!router.isFallback && !synopsis?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <>
      <Head>
        <title>{synopsis.title.en}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Box>{synopsis && <Heading>{synopsis.title.en}</Heading>}</Box>
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

export default Synopsis;
