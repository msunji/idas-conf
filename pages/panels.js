import getData from '../utils/getData';
import PageHeader from '../components/layout/PageHeader';

const Panels = ({ panels }) => {
  return (
    <>
      <PageHeader pageTitle="Panels">
        Join any of our five fascinating panels and get to know know more about
        politics and international relations in the Asia-Pacific region.
      </PageHeader>

      <section className="container"></section>
    </>
  );
};

export default Panels;

export async function getStaticProps() {
  const query = `
    {
      panels {
        id
        content
        panelTitle
      }
    }
  `;

  const { panels } = await getData(query);

  return {
    props: { panels },
  };
}
