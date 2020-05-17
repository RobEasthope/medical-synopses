import sanityClient, { previewClient } from './sanity-client';

export async function getSingleSynopsis() {
  const data = await sanityClient.fetch(`*[_type == 'synopsis'][0]{
      title,
      _updatedAt,
    }`);

  return data;
}

export async function getSynopsisWiythSlug() {
  const data = await sanityClient.fetch(`*[_type == 'synopsis'][0]{ 'slug': slug.en.current }{
      title,
      _updatedAt,
    }`);

  return data;
}
