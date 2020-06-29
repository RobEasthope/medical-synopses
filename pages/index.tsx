import Head from "next/head";
import { GetStaticProps } from "next";

import { getTestSynopsis } from "../sanity/api-calls";

const Home = (): JSX.Element => {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">Index</h1>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await getTestSynopsis();

  return {
    props: {
      synopsis: data || undefined,
    },
  };
};

export default Home;
