import sanityClient, { previewClient } from './sanity-client';

export async function getSingleSynopsis() {
  const data = await sanityClient.fetch(`*[_type == 'synopsis'][0]{
      title,
      slug,
      _updatedAt,
    }`);

  return data;
}

const getUniquePosts = posts => {
  const slugs = new Set();
  return posts.filter(post => {
    if (slugs.has(post.slug)) {
      return false;
    }
    slugs.add(post.slug);
    return true;
  });
};

const getClient = preview => (preview ? previewClient : sanityClient);

export async function getSynopsesWithSlug() {
  const data = await sanityClient.fetch(
    `*[_type == "synopsis"][0]{ 'slug': slug.en.current }`
  );
  return data;
}

export async function getSynopsisAndSynopses(slug, preview) {
  const curClient = getClient(preview);
  const [synopsis, synopses] = await Promise.all([
    curClient
      .fetch(
        `*[_type == "synopsis" && slug.en.current == $slug] | order(_updatedAt desc) {
        title,
      }`,
        { slug }
      )
      .then(res => res?.[0]),
    curClient.fetch(
      `*[_type == "synopsis" && slug.en.current != $slug] | order(date desc, _updatedAt desc){
        title,
      }[0...2]`,
      { slug }
    ),
  ]);

  console.log(synopsis);

  return { synopsis, synopses: getUniquePosts(synopses) };
}
