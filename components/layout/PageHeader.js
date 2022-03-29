const PageHeader = ({ pageTitle, children }) => {
  return (
    <section className="bg-magenta">
      <div className="container">
        <h1>{pageTitle}</h1>
        <p>{children}</p>
      </div>
    </section>
  );
};

export default PageHeader;
