import sanityClient, { previewClient } from './sanity-client';

export async function getSingleSynopsis() {
  const data = await sanityClient.fetch(`*[_type == 'synopsis'][0]{
      title,
      _updatedAt,
    }`);

  return data;
}
