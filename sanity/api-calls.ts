/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import sanityClient from "../settings/sanity-client";

interface Synopsis {
  title?: string;
}

export const getSingleSynopsis = async (): Promise<Synopsis> => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  const data: Synopsis = await sanityClient.fetch(`*[_type == 'synopsis'][0]{
      title,
    }`);

  return data;
};

/* eslint-enable @typescript-eslint/no-unsafe-member-access */
/* eslint-enable @typescript-eslint/no-unsafe-assignment */
