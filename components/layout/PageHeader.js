const PageHeader = ({ pageTitle, children }) => {
  return (
    <section className="container max-w-6xl mt-20 md:mt-40">
      <div className="max-w-prose">
        <h1 className="mb-8 text-4xl md:text-6xl">{pageTitle}</h1>
        <p>{children}</p>
      </div>
    </section>
  );
};

export default PageHeader;
