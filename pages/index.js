import getData from '../utils/getData';
import CustomHead from '../components/CustomHead';
import Hero from '../components/landing/Hero';
import Subtitle from '../components/landing/Subtitle';
import Registration from '../components/landing/Registration';
import Faqs from '../components/landing/Faqs';
import Sponsors from '../components/landing/Sponsors';

const LandingWave = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300">
      <path
        fill="#00cba9"
        fillOpacity="1"
        d="M0,192L48,181.3C96,171,192,149,288,122.7C384,96,480,64,576,42.7C672,21,768,11,864,10.7C960,11,1056,21,1152,42.7C1248,64,1344,96,1392,112L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
      ></path>
    </svg>
  );
};

export default function Home({ faqs }) {
  return (
    <div>
      <CustomHead pageTitle="" />
      <main>
        <div>
          <LandingWave className="absolute inset" />
        </div>
        <Hero />
        <Subtitle />
        <Registration />
        <Faqs faqs={faqs} />
        <Sponsors />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const query = `{
    faqs {
      answer
      id
      question
    }
  }
  `;

  const { faqs } = await getData(query);

  return {
    props: {
      faqs,
    },
  };
}
