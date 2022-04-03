import { useState } from 'react';
import getData from '../utils/getData';
import getMarkdown from '../utils/getMarkdown';
import { MDXRemote } from 'next-mdx-remote';
import CustomHead from '../components/CustomHead';
import PageContent from '../components/layout/PageContent';
import PageHeader from '../components/layout/PageHeader';

const Event = ({ name, content, time, breaktime }) => {
  return (
    <div
      className={`gap-2 tablet:gap-8 py-4 px-4 grid md:grid-cols-[100px_1fr] ${
        breaktime ? 'bg-blue' : ''
      }`}
    >
      <span className="text-lg">{time}</span>
      <div>
        <h3 className="mb-1">{name}</h3>
        <MDXRemote {...content} />
      </div>
    </div>
  );
};

const Agenda = ({ eventsSource }) => {
  const [tab, setTab] = useState('Saturday');
  const filteredEvents = eventsSource.filter((event) => event.day === tab);

  return (
    <>
      <CustomHead pageTitle="Conference Agenda" />
      <PageHeader pageTitle="Conference Agenda" bgColor="magenta">
        This year&apos;s conference lasts from November 24-25 — Saturday to
        Sunday.
        <br />
        Check out our schedule below to learn more about our exciting activites.
      </PageHeader>
      <PageContent>
        <div>
          <div className="w-full flex mb-8 border-b border-grey">
            <div
              className={`cursor-pointer text-center px-8 mw-[200px] py-2 text-grey100 ${
                tab === 'Saturday' ? 'agenda-tab-highlight' : ''
              }`}
              onClick={() => setTab('Saturday')}
            >
              <span className="uppercase text-sm tracking-widest text-grey100">
                Saturday
              </span>
              <p
                className={`semibold ${
                  tab === 'Saturday' ? 'text-blue300' : ''
                }`}
              >
                Nov 24
              </p>
            </div>
            <div
              className={`cursor-pointer text-center px-8 mw-[200px] py-2 text-grey100 ${
                tab === 'Sunday' ? 'agenda-tab-highlight' : ''
              }`}
              onClick={() => setTab('Sunday')}
            >
              <span className="uppercase text-sm tracking-widest text-grey100">
                Sunday
              </span>
              <p
                className={`semibold ${tab === 'Sunday' ? 'text-blue300' : ''}`}
              >
                Nov 25
              </p>
            </div>
          </div>
          <div className="mb-8">
            <h2>
              Showing events for{' '}
              <span className="text-magenta">
                {tab === 'Saturday'
                  ? 'Saturday, November 24'
                  : 'Sunday, November 25'}
              </span>
            </h2>
          </div>
          <div className="divide-y divide-grey divide-dashed">
            {filteredEvents.map(
              ({ id, eventName, eventDetails, eventTime, breaktime }) => (
                <Event
                  key={id}
                  name={eventName}
                  content={eventDetails}
                  time={eventTime}
                  breaktime={breaktime}
                />
              )
            )}
          </div>
        </div>
      </PageContent>
    </>
  );
};

export default Agenda;

export async function getStaticProps() {
  const query = `{
    events {
      breaktime
      day
      eventName
      eventTime
      id
      eventDetails
    }
  }
  `;

  const { events } = await getData(query);
  const eventsSource = await getMarkdown(events, 'eventDetails');

  return {
    props: { eventsSource },
  };
}
