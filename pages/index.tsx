import Head from "next/head";

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

export default Home;
