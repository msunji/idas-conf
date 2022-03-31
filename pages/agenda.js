import { useState } from 'react';
import getData from '../utils/getData';
import getMarkdown from '../utils/getMarkdown';
import { MDXRemote } from 'next-mdx-remote';
import PageContent from '../components/layout/PageContent';
import PageHeader from '../components/layout/PageHeader';

const Event = ({ name, content, time, breaktime }) => {
  return (
    <div
      className={`gap-8 py-4 px-4 grid md:grid-cols-[100px_1fr] ${
        breaktime ? 'bg-yellow' : ''
      }`}
    >
      <div>{time}</div>
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
      <PageHeader pageTitle="Conference Agenda" bgColor="magenta">
        This year&apos;s conference lasts from November 24-25 — Saturday to
        Sunday.
        <br />
        Check out our schedule below to learn more about our exciting activites.
      </PageHeader>
      <PageContent>
        <div>
          <div className="flex justify-center">
            <div
              className={`text-center px-8 mw-[200px] border-grey border py-2 text-grey100 ${
                tab === 'Saturday'
                  ? 'border-t-4 border-grey border-t-yellow border border-b-0 border-r-0'
                  : ''
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
                November 24
              </p>
            </div>
            <div
              className={`text-center px-8 mw-[200px] border-grey border py-2 ${
                tab === 'Sunday'
                  ? 'border-t-4 border-grey border-t-yellow border border-b-0 border-l-0'
                  : ''
              }`}
              onClick={() => setTab('Sunday')}
            >
              <span className="uppercase text-sm tracking-widest text-grey100">
                Sunday
              </span>
              <p
                className={`semibold ${tab === 'Sunday' ? 'text-blue300' : ''}`}
              >
                November 25
              </p>
            </div>
          </div>
          <div className="mt-2 space-y-2">
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
