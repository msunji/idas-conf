import Link from 'next/link';
const Hero = () => {
  return (
    <header className="pt-20 pb-20 md:pb-40 flex flex-col items-center">
      <p className="tracking-widest mb-6 text-center">
        November 24-45 — National Chengchi University
      </p>
      <div className="container max-w-4xl mb-8 text-blue100">
        <h1 className="text-4xl md:text-6xl text-center font-serif">
          Transformation and Challenges in Asia Pacific
          <br />
          <span className="text-3xl">The Next Decade and Beyond</span>
        </h1>
      </div>
      <div className="container flex text-grey100 gap-4 justify-center  items-center text-md tablet:text-2xl md:flex-row">
        <Link href="/#registration" passHref>
          <a>
            <button className="border border-2 border-yellow rounded-full py-1 px-6 bg-yellow text-blue300 hover:bg-transparent">
              Register Now
            </button>
          </a>
        </Link>

        <Link href="/submissions" passHref>
          <a>
            <button className="border border-2 border-green text-green rounded-full py-1 px-6 hover:bg-green hover:text-blue300">
              Submissions
            </button>
          </a>
        </Link>
      </div>
    </header>
  );
};

export default Hero;
