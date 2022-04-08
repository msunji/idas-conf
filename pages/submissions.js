import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { string, object, mixed } from 'yup';
import CustomHead from '../components/CustomHead';
import FormError from '../components/form/FormError';
import FormSuccess from '../components/form/FormSuccess';
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
  const schema = object({
    fullName: string().required('Please enter your full name'),
    email: string()
      .email('Please enter a valid email address')
      .required('Please enter a valid email address'),
    org: string(),
    select: mixed('Please select a theme')
      .required('Please select a theme')
      .oneOf(themes, 'Please select a theme'),
    file: mixed()
      .test('required', 'Please provide a file', (value) => {
        return value && value.length;
      })
      .test('fileSize', 'The file is too large', (value, context) => {
        return value && value[0] && value[0].size <= 5242880;
      }),
  }).required();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data, e) => {
    e.preventDefault();
    await fetch('/api/submission', {
      method: 'POST',
      body: new FormData(submissionsForm),
    });
    reset();
  };

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
            <strong>5MB or smaller</strong>. For larger files, please email us
            at <strong>IDAS.program@gmail.com</strong> with your name and
            abstract title included in the subject.
          </p>
          <Spacer />
          <div className="w-full tablet:w-3/5 tablet:max-w-2/4 tablet:mx-auto">
            <form
              id="submissionsForm"
              method="post"
              encType="multipart/form-data"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="mb-8">
                <label className="block mb-4">
                  <span className="uppercase font-semibold">
                    Full Name
                    <span className="font-semibold text-lg text-magenta ml-[2px]">
                      *
                    </span>
                  </span>
                  <input
                    type="text"
                    name="fullName"
                    className="mt-0 block w-full px-2 border-0 border-b-2 border-gray focus:ring-0 focus:border-yellow"
                    {...register('fullName')}
                  />
                  {errors.fullName?.message && (
                    <FormError>{errors.fullName?.message}</FormError>
                  )}
                </label>
                <label className="block mb-4">
                  <span className="uppercase font-semibold">
                    Email Address
                    <span className="font-semibold text-lg text-magenta ml-[2px]">
                      *
                    </span>
                  </span>
                  <input
                    type="text"
                    name="email"
                    className="mt-0 block w-full px-2 border-0 border-b-2 border-gray focus:ring-0 focus:border-yellow"
                    {...register('email')}
                  />
                  {errors.email?.message && (
                    <FormError>{errors.email?.message}</FormError>
                  )}
                </label>
                <label className="block mb-4">
                  <span className="uppercase font-semibold">
                    School or Organization
                  </span>
                  <input
                    name="org"
                    type="text"
                    className="mt-0 block w-full px-2 border-0 border-b-2 border-gray focus:ring-0 focus:border-yellow"
                    {...register('org')}
                  />
                </label>
                <label className="block mb-4">
                  <span className="uppercase font-semibold">
                    Theme
                    <span className="font-semibold text-lg text-magenta ml-[2px]">
                      *
                    </span>
                  </span>
                  <select
                    name="select"
                    {...register('select')}
                    className="form-select appearance-none
                                block
                                w-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding bg-no-repeat
                                border border-solid border-grey
                                rounded
                                transition
                                ease-in-out
                                mt-1
                                focus:bg-white focus:ring-yellow focus:border-yellow focus:outline-none"
                  >
                    <option defaultValue>Select a Theme</option>

                    {themes.map((theme) => (
                      <option key={theme} value={theme}>
                        {theme}
                      </option>
                    ))}
                  </select>
                  {errors.select?.message && (
                    <FormError>{errors.select?.message}</FormError>
                  )}
                </label>
                <label className="block mb-4">
                  <span className="uppercase font-semibold">
                    Upload your paper
                    <span className="font-semibold text-lg text-magenta ml-[2px]">
                      *
                    </span>
                  </span>
                  <input
                    name="file"
                    type="file"
                    accept="application/pdf"
                    className="mt-2 cursor-pointer block w-full text-sm text-gray-500 px-2 border-0 border-b-2 file:mr-4 file:mb-2 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 focus:ring-0 focus:outline-none"
                    {...register('file')}
                  />
                  {errors.file?.message && (
                    <FormError>{errors.file?.message}</FormError>
                  )}
                </label>
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="font-semibold bg-blue300 text-white px-4 py-2 mr-4  hover:bg-yellow hover:text-blue300 focus:ring-0 focus:outline-yellow"
                >
                  Submit
                </button>
                <div>
                  {isSubmitSuccessful && (
                    <FormSuccess>Paper successfully submitted!</FormSuccess>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </PageContent>
    </>
  );
};

export default Submissions;
