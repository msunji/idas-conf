import { useState } from 'react';
import getData from '../utils/getData';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import PageHeader from '../components/layout/PageHeader';

const Panels = ({ panelsSource }) => {
  console.log(panelsSource);
  const [content, setContent] = useState('Democracy and Governance Innovation');

  let filteredPanel = panelsSource.filter(
    (panel) => panel.panelTitle === content
  );

  return (
    <>
      <PageHeader pageTitle="Panels">
        Join any of our five fascinating panels and get to know know more about
        politics and international relations in the Asia-Pacific region.
      </PageHeader>

      <section className="container gap-12 grid md:grid-cols-[220px_1fr]">
        <div>
          <h3>Topics</h3>
          {panelsSource.map(({ id, panelTitle }) => (
            <div key={id} onClick={() => setContent(panelTitle)}>
              {panelTitle}
            </div>
          ))}
        </div>
        <div className="content">
          <h2>{filteredPanel[0].panelTitle}</h2>
          <MDXRemote {...filteredPanel[0].panelWriteup} />
        </div>
      </section>
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

  const panelsSource = await Promise.all(
    panels.map(async (panel) => {
      return { ...panel, panelWriteup: await serialize(panel.panelWriteup) };
    })
  );

  return {
    props: {
      panelsSource,
    },
  };
}
