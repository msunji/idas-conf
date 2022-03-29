import Link from 'next/link';
import routes from '../../public/data/routes.json';

const DropdownLinks = ({ links }) => {
  return (
    <>
      {links.map(({ page, route }) => (
        <li key={page}>
          <Link href={route}>
            <a>{page}</a>
          </Link>
        </li>
      ))}
    </>
  );
};

const Footer = () => {
  return (
    <footer className="bg-blue100 text-white pt-10 pb-20 text-[0.9rem]">
      <div className="container flex flex-col gap-4 md:flex-row">
        <div className="basis-1/4">
          <h3>Site Map</h3>
          <ul>
            {routes.map(({ page, route, withDropdown, dropdownLinks }) => {
              return withDropdown ? (
                <DropdownLinks key="dropdown" links={dropdownLinks} />
              ) : (
                <li key={page}>
                  <Link href={route}>
                    <a>{page}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="basis-1/4">
          <h3>Related Links</h3>
          <ul className="footer-links">
            <li>
              <a href="https://www.nccu.edu.tw/">
                National Chengchi University
              </a>
            </li>
            <li>
              <a href="https://css.nccu.edu.tw/en/">
                College of Social Sciences
              </a>
            </li>
            <li>
              <a href="https://internationalprograms.nccu.edu.tw/home-idas/">
                International Doctoral Program in Asia-Pacific Studies (IDAS)
              </a>
            </li>
          </ul>
        </div>
        <div className="grow">
          <h3>Contact Us</h3>
          <ul>
            <li>
              No. 64, Section 2, Zhinan Road, Wenshan District, Taipei City,
              Taiwan
            </li>
            <li>+886-2-2939-3091 Ext. 51278</li>
            <li>idas@nccu.edu.tw</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
