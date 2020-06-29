/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import sanityClient from "@sanity/client";

const options = {
  // Find your project ID and dataset in `sanity.json` in your studio project
  dataset: process.env.SANITY_DATASET,
  projectId: process.env.SANITY_PROJECT_ID,
  useCdn: process.env.NODE_ENV === "production",
  // useCdn == true gives fast, cheap responses using a globally distributed cache.
  // Set this to false if your application require the freshest possible
  // data always (potentially slightly slower and a bit more expensive).
};

export const sanity = sanityClient(options);

export const sanityPreview = sanityClient({
  ...options,
  useCdn: false,
  token: process.env.SANITY_PREVIEW_SECRET,
});

/* eslint-enable @typescript-eslint/no-unsafe-assignment */
/* eslint-enable @typescript-eslint/no-unsafe-call */
