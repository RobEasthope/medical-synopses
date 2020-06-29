import Head from "next/head";
import { GetStaticProps } from "next";

import { getTestSynopsis } from "../sanity/api-calls";

type IndexProps = { synopsis: { title: { en: string } } };

const Home = ({ synopsis }: IndexProps): JSX.Element => {
  return (
    <>
      {synopsis && (
        <div className="container">
          <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <main>
            <h1 className="title">{synopsis.title.en}</h1>
          </main>
        </div>
      )}
    </>
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
