import PageContent from '../components/layout/PageContent';
import PageHeader from '../components/layout/PageHeader';

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
      <PageHeader pageTitle="Submissions">
        We are calling for both paper and abstract submissions for this
        year&apos;s conference.
      </PageHeader>
      <PageContent>
        <div>
          <div className="content">
            <h2>Information</h2>
            <p>
              A document containing an abstract (1,000 words max) and a brief
              biography (100 words) should be submitted before{' '}
              <strong>September 21, 2018*</strong>. Decisions for accepted
              papers will be made based on academic merit after a thorough
              double-blind review process.
            </p>
            <p>
              Acceptance notifications will be sent out before{' '}
              <strong>September 23, 2018</strong>. Once accepted, the full paper
              should be sent no later than <strong>November 9, 2018**</strong>
            </p>
            <Highlight>
              * Papers need to be submitted before September 21 17:00 GMT+8{' '}
              <br />
              ** Full papers need to be sent no later than November 9 17:00
              GMT+8
            </Highlight>
            <h2>Topics Covered</h2>
            <p>
              In line with this year&apos;s theme, we welcome papers and
              abstracts that fall under any of the themes stated below.
            </p>
            <h2>Submit a Paper</h2>
            <p>
              Your file must either be a PDF or a Microsoft Word file, and must
              be 5MB or smaller. For larger files, please email us at
              IDAS.program@gmail.com with your name and abstract title included
              in the subject.
            </p>
          </div>
        </div>
      </PageContent>
    </>
  );
};

export default Submissions;
