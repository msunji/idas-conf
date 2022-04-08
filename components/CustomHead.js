import Head from 'next/head';

const CustomHead = ({ pageTitle }) => {
  return (
    <Head>
      <title>
        2018 IDAS International Conference |{' '}
        {pageTitle
          ? `${pageTitle}`
          : `Transformation and Challenges in Asia Pacific`}
      </title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="description"
        content="2018 IDAS International Conference. Transformation and Challenges in Asia Pacific: The Next Decade and Beyond. Nov 24-25, 2018 at NCCU, Taipei."
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/public/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/public/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/public/favicon-16x16.png"
      />
      <meta name="theme-color" content="#ffffff" />
    </Head>
  );
};

export default CustomHead;
