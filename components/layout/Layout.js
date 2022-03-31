import Navigation from './Navigation';
import Footer from './footer';

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <main className="mt-20 md:mt-40">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
