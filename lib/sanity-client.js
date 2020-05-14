const sanityClientPkg = require('@sanity/client');

const sanityClient = sanityClientPkg({
  projectId: ``,
  dataset: ``,
  token: '', // or leave blank to be anonymous user
  useCdn: false, // `false` if you want to ensure fresh data
});

module.exports = sanityClient;
