import CustomHead from '../components/CustomHead';
import Link from 'next/link';
import PageHeader from '../components/layout/PageHeader';
import PageContent from '../components/layout/PageContent';
import routes from '/public/data/routes.json';

const Custom404 = () => {
  console.log(routes);
  return (
    <>
      <CustomHead pageTitle="Page not found" />
      <PageHeader pageTitle="Whoops!" />
      <div className="container max-w-6xl pb-20">
        <p className="mb-2">
          Looks like we can&apos;t find this page. You may want to check these
          pages instead:
        </p>
        <ul>
          {routes.map(({ page, route }) => (
            <Link key={page} href={route} passHref>
              <li className="list-item-dash">
                <a className="text-magenta">{page}</a>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Custom404;
