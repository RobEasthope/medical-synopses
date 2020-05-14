import Head from 'next/head';
import { Box } from 'rebass';
import { Basic, Combined, Animated, bounce } from '../styles/globalStyles';

const Home = () => (
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

export default Home;
