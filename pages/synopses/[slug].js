import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import { getSynopsesWithSlug, getSynopsisAndSynopses } from '../../lib/api';

export default function Synopsis({ synopsis, synopses, preview }) {
  const router = useRouter();
  // if (!router.isFallback && !synopsis?.slug) {
  //   return <ErrorPage statusCode={404} />;
  // }
  return (
    <div>
      {/* // <Layout preview={preview}> */}
      {router.isFallback ? (
        <h1>Loading…</h1>
      ) : (
        <div>
          <article>
            <h1>{synopsis && synopsis.title.en}</h1>
          </article>
          {/* {synopses.length > 0 && <MoreStories synopses={synopses} />} */}
        </div>
      )}
      {/* // </Layout> */}
    </div>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getSynopsisAndSynopses(params.slug, preview);
  return {
    props: {
      preview,
      synopsis: data?.synopsis || null,
      synopses: data?.synopses || null,
    },
  };
}

export async function getStaticPaths() {
  const synopses = await getSynopsesWithSlug();

  console.log(synopses);

  return {
    paths: [],
    fallback: true,
  };
}
