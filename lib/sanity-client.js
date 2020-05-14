const sanityClient = require('@sanity/client');

const client = sanityClient({
  projectId: `${process.env.sanity_project_id}`,
  dataset: `${process.env.sanity_dataset}`,
  token: '', // or leave blank to be anonymous user
  useCdn: false, // `false` if you want to ensure fresh data
});

module.exports = client;
