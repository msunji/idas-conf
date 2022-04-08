import Link from 'next/link';
import Mail from '/public/assets/images/icons/Mail';
import Tel from '/public/assets/images/icons/Tel';
import Location from '/public/assets/images/icons/Location';
import routes from '/public/data/routes.json';

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
    <footer className="bg-blue100 text-white text-[0.9rem] pt-12 md:pt-16 pb-28">
      <div className="container max-w-7xl w-full grid gap-8 tablet:grid-cols-3">
        <div>
          <h3>Site Map</h3>
          <ul className="columns-2">
            {routes.map(({ page, route }) => (
              <Link key={page} href={route} passHref>
                <li>
                  <a>{page}</a>
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <div>
          <h3>Related Links</h3>
          <ul className="footer-links">
            <li className="list-item-dash">
              <a className="ml-2" href="https://www.nccu.edu.tw/">
                National Chengchi University
              </a>
            </li>
            <li className="list-item-dash">
              <a className="ml-2" href="https://css.nccu.edu.tw/en/">
                College of Social Sciences
              </a>
            </li>
            <li className="list-item-dash">
              <a
                className="ml-2"
                href="https://internationalprograms.nccu.edu.tw/home-idas/"
              >
                International Doctoral Program in Asia-Pacific Studies (IDAS)
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Contact Us</h3>
          <ul>
            <li>
              <Location />
              <span>
                {' '}
                No. 64, Section 2, Zhinan Road, Wenshan District, Taipei City,
                Taiwan
              </span>
            </li>
            <li>
              <Tel />
              <span>+886-2-2939-3091 Ext. 51278</span>
            </li>
            <li>
              <Mail />
              <span>idas@nccu.edu.tw</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
