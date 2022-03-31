import RightArrow from '../../public/assets/images/icons/RightArrow';
import { useState } from 'react';

const Question = ({ question, answer }) => {
  const [current, setCurrent] = useState(false);
  const handleToggle = () => {
    setCurrent(!current);
  };

  return (
    <div
      className="px-2 py-2 md:py-4 md:text-2xl cursor-pointer"
      onClick={handleToggle}
    >
      <p className={`flex items-center ${current ? 'font-semibold' : ''}`}>
        <span className={`mr-2 ${current ? 'inline-block' : 'hidden'}`}>
          <RightArrow />
        </span>
        <span>{question}</span>
      </p>
      <p
        className={`transition-height linear duration-200 ${
          current
            ? 'h-full max-h-[550px] mt-4 mb-8'
            : 'max-h-0 overflow-y-hidden'
        } `}
      >
        {answer}
      </p>
    </div>
  );
};

const Faqs = ({ faqs }) => {
  return (
    <section className="container">
      <h2 className="text-center mx-auto max-w-prose mb-8 md:text-4xl">
        Frequently Asked Questions
      </h2>
      <div className="mx-auto max-w-prose divide-y divide-grey divide-dotted">
        {faqs.map(({ id, question, answer }) => (
          <Question key={id} question={question} answer={answer} />
        ))}
      </div>
    </section>
  );
};

export default Faqs;
