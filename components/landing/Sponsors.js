import Image from 'next/image';
import moeLogo from '../../public/assets/images/sponsors/moe-transparent.png';
import mostLogo from '../../public/assets/images/sponsors/most-transparent.png';
import nccuLogo from '../../public/assets/images/sponsors/nccu-transparent.png';
import demoLogo from '../../public/assets/images/sponsors/tw-foundation-for-democracy-transparent.png';

const Sponsor = ({ path, altText, small }) => {
  return (
    <div className={`${small ? 'max-w-[6rem]' : ''}`}>
      <Image src={path} alt={altText} placeholder="blur" />
    </div>
  );
};

const Sponsors = () => {
  return (
    <section className="bg-blue100 text-white">
      <div className="container">
        <p className="uppercase">Proudly sponsored by</p>
        <div className="flex items-center justify-center gap-8">
          <Sponsor path={moeLogo} alt="Ministry of Education Logo" small />
          <Sponsor
            path={mostLogo}
            alt="Ministry of Science and Technology Logo"
          />
          <Sponsor
            path={nccuLogo}
            alt="National Chengchi University Logo"
            small
          />
          <Sponsor path={demoLogo} alt="Taiwan Foundation for Democracy Logo" />
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
