import getData from '../../utils/getData';
import Globe from '../../public/assets/images/icons/Globe';
import LeftArrow from '../../public/assets/images/icons/LeftArrow';
import { serialize } from 'next-mdx-remote/serialize';
import CustomHead from '../../components/CustomHead';
import PageHeader from '../../components/layout/PageHeader';
import PageContent from '../../components/layout/PageContent';
import { MDXRemote } from 'next-mdx-remote';
import Image from 'next/image';
import Link from 'next/link';

const Speaker = ({ speaker }) => {
  const { photo, speakerBio, speakerName, speakerProfileLink, speakerTitle } =
    speaker;
  return (
    <>
      <CustomHead pageTitle={speakerName} />
      <PageHeader pageTitle={''}></PageHeader>
      <PageContent>
        <div className="grid mx-auto max-w-[75%] gap-2 mb-8 bg-violet text-white md:max-w-full md:gap-8 md:grid-cols-[300px_1fr]">
          <div className="mix-blend-screen grayscale">
            <Image
              src={photo.url}
              height={photo.height}
              width={photo.width}
              alt={speakerName}
              layout="responsive"
              objectFit="fill"
            />
          </div>
          <div className="px-4 py-4 bg-violet self-center">
            <h1 className="text-4xl md:text-6xl">{speakerName}</h1>
            <p className="mb-4">{speakerTitle}</p>
            <a
              className="font-bold flex gap-2 items-center"
              href={speakerProfileLink}
            >
              <Globe />
              View Profile
            </a>
          </div>
        </div>
        <div>
          <div className="grid gap-8 mb-8  md:grid-cols-[300px_1fr]">
            <div />
            <div className="content">
              <MDXRemote {...speakerBio} />
              <div>
                <Link href="/speakers">
                  <a className="text-magenta font-serif text-3xl flex items-center mt-8">
                    <LeftArrow width="w-12" height="h-12" />
                    <span className="ml-4">Return to Speakers</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </PageContent>
    </>
  );
};

export default Speaker;

export async function getStaticProps({ params }) {
  const speakerQuery = `
    query Speaker($slug: String!) {
      speaker(where: { slug: $slug }) {
        id
        photo {
          height
          url
          width
        }
        slug
        speakerBio
        speakerName
        speakerProfileLink
        speakerTitle
      }
    }
  `;
  const { speaker } = await getData(speakerQuery, { slug: params.slug });

  const speakerSource = await serialize(speaker.speakerBio);

  return {
    props: {
      speaker: {
        ...speaker,
        speakerBio: speakerSource,
      },
    },
  };
}

export async function getStaticPaths() {
  const pathQuery = `{
    speakers {
      id
      slug
    }
  }`;

  const { speakers } = await getData(pathQuery);

  return {
    paths: speakers.map(({ slug }) => ({ params: { slug: slug } })),
    fallback: false,
  };
}
