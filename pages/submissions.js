import CustomHead from '../components/CustomHead';
import PageContent from '../components/layout/PageContent';
import PageHeader from '../components/layout/PageHeader';
import Spacer from '../components/layout/Spacer';

const themes = [
  'Democracy and Governance Innovation',
  'Regional Economic Integration',
  'Social and Cultural Flows',
  'Globalization and Civil Society',
  'Regional Powers and Security',
];

const Highlight = ({ children }) => {
  return (
    <p className="bg-magentaLight border-l-4 border-l-magenta py-6 px-6">
      {children}
    </p>
  );
};

const Submissions = () => {
  return (
    <>
      <CustomHead pageTitle="Call for Papers and Abstracts" />
      <PageHeader pageTitle="Submissions">
        We are calling for both paper and abstract submissions for this
        year&apos;s conference.
      </PageHeader>
      <PageContent>
        <div className="content">
          <h2>Information</h2>
          <p>
            A document containing an abstract (1,000 words max) and a brief
            biography (100 words) should be submitted before{' '}
            <strong>September 21, 2018*</strong>. Decisions for accepted papers
            will be made based on academic merit after a thorough double-blind
            review process.
          </p>
          <p>
            Acceptance notifications will be sent out before{' '}
            <strong>September 23, 2018</strong>. Once accepted, the full paper
            should be sent no later than <strong>November 9, 2018**</strong>
          </p>
          <Highlight>
            * Abstracts need to be submitted before September 21 17:00 GMT+8{' '}
            <br />
            ** Full papers need to be sent no later than November 9 17:00 GMT+8
          </Highlight>
          <Spacer />
          <h2>Topics Covered</h2>
          <p>
            In line with this year&apos;s theme, we welcome papers and abstracts
            that fall under any of the themes stated below.
          </p>
          <ol className="ml-4">
            {themes.map((theme) => (
              <li
                key={theme}
                className="before:content-['—'] before:text-magenta before:mr-4"
              >
                {theme}
              </li>
            ))}
          </ol>
          <Spacer />
          <h2>Submit your Abstract</h2>
          <p>
            Your file must be a <strong>PDF file</strong>, and must be{' '}
            <strong>5MB or smaller</strong>. Please email us at{' '}
            <strong>idasconf2018@protonmail.com</strong> with your name and
            abstract title included in the subject.
          </p>
          <Spacer />
        </div>
      </PageContent>
    </>
  );
};

export default Submissions;
