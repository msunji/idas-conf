import gridImgTop from '../../public/assets/images/grid-photo-1.jpg';
import gridImgBottom from '../../public/assets/images/grid-photo-2.jpg';
import Image from 'next/image';

const TopWave = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#ffa6a6"
        fillOpacity="1"
        d="M0,160L60,138.7C120,117,240,75,360,58.7C480,43,600,53,720,85.3C840,117,960,171,1080,170.7C1200,171,1320,117,1380,90.7L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
      ></path>
    </svg>
  );
};
const BottomWave = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#ffa6a6"
        fillOpacity="1"
        d="M0,96L48,96C96,96,192,96,288,112C384,128,480,160,576,165.3C672,171,768,149,864,160C960,171,1056,213,1152,202.7C1248,192,1344,128,1392,96L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
      ></path>
    </svg>
  );
};
const Subtitle = () => {
  return (
    <>
      <TopWave />
      <div className="bg-salmon py-8 landing-text">
        <div className="container grid tablet:grid-cols-2 tablet:items-center">
          <div className="">
            <p className="w-auto mb-4 tablet:max-w-[30ch]">
              Join us this year at{' '}
              <strong className="low-highlight">
                National Chengchi University, Taipei
              </strong>{' '}
              on <strong className="low-highlight">November 24-25</strong> for
              the annual IDAS International Conference.
            </p>
            <p className="w-auto tablet:max-w-[30ch]">
              Organized by National Chengchi University&apos;s International
              Doctoral Program in Asia-Pacific Studies (IDAS) , this event
              features a number of highly-esteemed speakers and offers students
              a chance to participate in a variety of panel discussions.
            </p>
          </div>
          <div className="relative top-[95px] grid grid-cols-6 tablet:static tablet:ml-10">
            <div className="col-span-4 row-span-3">
              <Image
                src={gridImgTop}
                alt="Picture of someone gesturing"
                placeholder="blur"
              />
            </div>
            <div className="col-start-5 col-span-2 row-start-4">
              <Image
                src={gridImgBottom}
                alt="Picture of hands linked together"
                placeholder="blur"
              />
            </div>
          </div>
        </div>
      </div>
      <BottomWave />
    </>
  );
};

export default Subtitle;
