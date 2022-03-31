import getData from '../utils/getData';
import getMarkdown from '../utils/getMarkdown';
import PageHeader from '../components/layout/PageHeader';
import PageContent from '../components/layout/PageContent';
import Image from 'next/image';

const Speaker = ({ name, title, bio, photo, profileLink }) => {
  return (
    <div>
      <div className="mb-5 overflow-hidden">
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
      </div>
      <div className="">
        <p className="font-serif text-2xl mb-2 text-magenta max-w-[80%]">
          {name}
        </p>
        <p className="text-sm max-w-[80%]">{title}</p>
      </div>
    </div>
  );
};

const Speakers = ({ speakersSource }) => {
  console.log(speakersSource);
  return (
    <>
      <PageHeader pageTitle="Speakers" bgColor="violet">
        This year&apos;s international conference features an exciting line-up
        of speakers with a wide range of experience in their respective fields
        of research. We can&apos;t wait for you to meet them.
      </PageHeader>
      <PageContent>
        <div className="gap-8 grid sm:grid-cols-2 md:grid-cols-3">
          {speakersSource.map(
            ({
              speakerName,
              id,
              speakerBio,
              speakerTitle,
              speakerProfileLink,
              photo,
            }) => (
              <Speaker
                key={id}
                name={speakerName}
                title={speakerTitle}
                photo={photo}
              />
            )
          )}
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
        url(transformation: {})
        height
        width
      }
    }
  }
  `;

  const { speakers } = await getData(query);
  const speakersSource = await getMarkdown(speakers, 'speakerBio');

  return {
    props: {
      speakersSource,
    },
  };
}
