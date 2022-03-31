const PageContent = ({ children }) => {
  return (
    <section className="container max-w-6xl mx-auto md:flex md:justify-end">
      <div className="max-w-4xl">{children}</div>
    </section>
  );
};

export default PageContent;
