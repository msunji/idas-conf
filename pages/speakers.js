import getData from '../utils/getData';
import CustomHead from '../components/CustomHead';
import PageHeader from '../components/layout/PageHeader';
import PageContent from '../components/layout/PageContent';
import Image from 'next/image';
import Link from 'next/link';

const Speaker = ({ name, title, photo, slug }) => {
  return (
    <div>
      <div className="mb-3 overflow-hidden">
        <Link href={`/speakers/${slug}`}>
          <a>
            <div className="transition ease-in duration-200 grayscale hover:scale-110 hover:filter-none">
              <Image
                src={photo.url}
                width={photo.width}
                height={photo.height}
                alt={title}
                layout="responsive"
                objectFit="contain"
              />
            </div>
          </a>
        </Link>
      </div>
      <div className="px-1">
        <Link href={`/speakers/${slug}`}>
          <a className="font-serif text-2xl mb-2 text-magenta hover:underline">
            {name}
          </a>
        </Link>
        <p className="text-sm">{title}</p>
      </div>
    </div>
  );
};

const Speakers = ({ speakers }) => {
  return (
    <>
      <CustomHead pageTitle="Our Featured Speakers" />
      <PageHeader pageTitle="Speakers">
        This year&apos;s international conference features an exciting line-up
        of speakers with a wide range of experience in their respective fields
        of research. We can&apos;t wait for you to meet them.
      </PageHeader>
      <PageContent>
        <div className="gap-8 grid grid-cols-2 md:grid-cols-3">
          {speakers.map(({ speakerName, id, speakerTitle, photo, slug }) => (
            <Speaker
              key={id}
              name={speakerName}
              title={speakerTitle}
              photo={photo}
              slug={slug}
            />
          ))}
        </div>
      </PageContent>
    </>
  );
};

export default Speakers;

export async function getStaticProps() {
  const query = `{
    speakers {
      id
      speakerBio
      speakerName
      speakerTitle
      speakerProfileLink
      photo {
        url(transformation: {image: {resize: {height: 362, width: 287}}})
        height
        width
      }
      slug
    }
  }
  `;

  const { speakers } = await getData(query);

  return {
    props: {
      speakers,
    },
  };
}
