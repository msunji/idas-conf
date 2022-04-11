import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import routes from '/public/data/routes.json';
import Link from 'next/link';

const useCheckPage = () => {
  const router = useRouter();
  return router.pathname === '/' ? true : false;
};

const Logo = () => {
  return (
    <div className="hidden tablet:flex leading-tight">
      <div className="w-6 h-6 bg-yellow rounded-full mr-2 -mt-2 self-start" />
      <Link href="/">
        <a className="hover:no-underline text-blue-100">
          <span className="tracking-widest font-semibold text-sm leading-[0]">
            2018 IDAS
          </span>
          <p className="text-2xl leading-[0.9rem] font-bold">Conference</p>
        </a>
      </Link>
    </div>
  );
};

const RegistrationBtn = ({ closeMobile }) => {
  return (
    <Link href="/#registration">
      <a>
        <button
          className="rounded-full uppercase bg-transparent bg-magenta text-white py-2 px-8 font-semibold transition ease-in duration-200 hover:bg-yellow tablet:py-1 tablet:px-4"
          onClick={closeMobile}
        >
          Register
        </button>
      </a>
    </Link>
  );
};

const Navigation = () => {
  const { pathname } = useRouter();
  const [openMobile, setOpenMobile] = useState(false);
  const [clientWindowHeight, setClientWindowHeight] = useState('');
  const [navBg, setNavBg] = useState('bg-transparent');
  const [navPadding, setNavPadding] = useState('py-8');

  const handleMobileToggle = () => setOpenMobile(!openMobile);
  const closeMobile = () => setOpenMobile(false);
  useCheckPage();

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  useEffect(() => {
    let threshold = clientWindowHeight / 600;
    if (threshold > 0) {
      setNavBg('bg-white');
      setNavPadding('py-5');
    } else {
      setNavBg('bg-transparent');
      setNavPadding('py-8');
    }
  }, [clientWindowHeight]);

  return (
    <nav
      className={`fixed top-0 left-0 z-10 w-screen ${navBg} text-4xl tablet:text-base`}
    >
      <div className={`container relative tablet:hidden`}>
        <div
          className="absolute z-10 right-0 pt-8 px-[inherit]"
          onClick={handleMobileToggle}
        >
          <div>
            <div
              className={`w-8 h-[2px] mb-[8px] transition linear duration-300 ${
                openMobile
                  ? 'bg-white rotate-45 translate-y-[5px]'
                  : 'bg-blue300'
              }`}
            ></div>
            <div
              className={`w-8 h-[2px] transition linear duration-300 ${
                openMobile
                  ? 'bg-white -rotate-45 -translate-y-[5px]'
                  : 'bg-blue300'
              }`}
            ></div>
          </div>
        </div>
      </div>
      <div
        className={`container max-w-7xl w-screen ${navPadding} bg-violet text-white h-screen tracking-wide ${
          openMobile ? 'flex flex-col justify-center' : 'hidden'
        } tablet:flex tablet:flex-row tablet:h-auto tablet:justify-between tablet:items-center tablet:text-blue300 tablet:bg-transparent`}
      >
        <Logo />
        <ul className="gap-4 flex flex-col mb-10 tablet:mb-0 tablet:w-auto tablet:flex-row">
          {routes.map(({ page, route }) => (
            <Link key={page} href={route} passHref>
              <a className="hover:no-underline" onClick={closeMobile}>
                <li>
                  <span
                    className={`py-1 px-1 ${
                      pathname == route ? 'border-b-4 border-yellow' : ''
                    } hover:border-b-4 border-yellow`}
                  >
                    {page}
                  </span>
                </li>
              </a>
            </Link>
          ))}
        </ul>
        <RegistrationBtn closeMobile={closeMobile} />
      </div>
    </nav>
  );
};

export default Navigation;
