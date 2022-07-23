import Head from 'next/head';

import Home from '../components/Home';

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Ping Lu</title>
        <meta name="description" content="Frontend Developer" />
      </Head>
      <Home />
    </>
  );
};

export default HomePage;
