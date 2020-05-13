import Head from 'next/head';
import { Box } from 'rebass';
import { Basic, Combined } from '../styles/globalStyles';

const Home = () => (
  <>
    <Head>
      <title>Medical Synopses</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Box>
      <Basic>Cool Styles</Basic>
      <Combined>
        With <code>:hover</code>.
      </Combined>
    </Box>
  </>
);

export default Home;
