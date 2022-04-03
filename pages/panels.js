import { useState } from 'react';
import getData from '../utils/getData';
import getMarkdown from '../utils/getMarkdown';
import { MDXRemote } from 'next-mdx-remote';
import CustomHead from '../components/CustomHead';
import PageContent from '../components/layout/PageContent';
import PageHeader from '../components/layout/PageHeader';

const Panels = ({ panelsSource }) => {
  const [content, setContent] = useState('Democracy and Governance Innovation');
  let filteredPanel = panelsSource.filter(
    (panel) => panel.panelTitle === content
  );

  return (
    <>
      <CustomHead pageTitle="Conference Panel Themes" />
      <PageHeader pageTitle="Panels" bgColor="magenta">
        Join any of our five fascinating panels and get to know know more about
        politics and international relations in the Asia-Pacific region.
      </PageHeader>
      <PageContent>
        <section className="divide-y divide-grey gap-12 grid md:divide-y-0 md:grid-cols-[220px_1fr]">
          <div className="space-y-3">
            <h3>Topics</h3>
            {panelsSource.map(({ id, panelTitle }) => (
              <div
                key={id}
                onClick={() => setContent(panelTitle)}
                className="cursor-pointer"
              >
                <span
                  className={`${
                    panelTitle === content
                      ? 'font-semibold underline decoration-yellow decoration-4 underline-offset-2'
                      : ''
                  }`}
                >
                  {panelTitle}
                </span>
              </div>
            ))}
          </div>
          <div className="content">
            <h2 className="mt-8 md:mt-0">{filteredPanel[0].panelTitle}</h2>
            <MDXRemote {...filteredPanel[0].panelWriteup} />
          </div>
        </section>
      </PageContent>
    </>
  );
};

export default Panels;

export async function getStaticProps() {
  const query = `{
    panels {
      id
      panelTitle
      panelWriteup
    }
  }
  `;

  const { panels } = await getData(query);
  const panelsSource = await getMarkdown(panels, 'panelWriteup');

  return {
    props: {
      panelsSource,
    },
  };
}
