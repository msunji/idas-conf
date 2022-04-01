const HeaderWave = () => {
  return (
    <div className="absolute top-0 left-0 -z-10 w-full overflow-x-hidden">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#f3f4f5"
          fillOpacity="1"
          d="M0,192L720,128L1440,256L1440,0L720,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
};

const PageHeader = ({ pageTitle, children }) => {
  return (
    <header>
      <HeaderWave />
      <section className="container max-w-6xl mt-20 md:mt-40">
        <div className="max-w-prose">
          <h1 className="mb-8 text-4xl md:text-6xl">{pageTitle}</h1>
          <p>{children}</p>
        </div>
      </section>
    </header>
  );
};

export default PageHeader;
