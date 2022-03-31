const PageHeader = ({ pageTitle, children }) => {
  return (
    <section className="container max-w-6xl">
      <div className="max-w-prose">
        <h1 className="text-4xl md:text-6xl">{pageTitle}</h1>
        <p>{children}</p>
      </div>
    </section>
  );
};

export default PageHeader;
