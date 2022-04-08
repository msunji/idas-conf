import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { string, object } from 'yup';
import registerImg from '/public/assets/images/reg-photo-3.jpg';
import FormSuccess from '../form/FormSuccess';
import FormError from '../form/FormError';
import Image from 'next/image';

const schema = object({
  fullName: string().required('Please enter your full name'),
  email: string()
    .email('Please enter a valid email address')
    .required('Please enter a valid email address'),
}).required();

const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data, e) => {
    e.preventDefault();
  };

  return (
    <div className="relative" id="registration">
      <div className="bg-violet h-[15rem] w-[15rem] rounded-full absolute -top-[8rem] -left-[5rem] tablet:h-[26rem] tablet:w-[26rem] tablet:-top-[15rem] tablet:-left-[10rem]" />
      <div className="container grid gap-8 py-11 md:py-16 tablet:grid-cols-2 bg-yellow">
        <div className="self-center">
          <Image
            src={registerImg}
            alt="Picture of a group of people"
            placeholder="blur"
          />
        </div>
        <div>
          <h2 className="mb-6 md:text-4xl">Keen to join us?</h2>
          <form className="landing-text" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-8">
              <label className="block mb-4">
                <span>Full name</span>
                <input
                  type="text"
                  className="mt-0 block w-full tablet:w-5/6 px-2 border-0 border-b-2 border-gray focus:ring-0 focus:border-yellow"
                  {...register('fullName')}
                />
                {errors.email?.message && (
                  <FormError>{errors.email?.message}</FormError>
                )}
              </label>
              <label className="block mb-4">
                <span>Email address</span>
                <input
                  type="text"
                  className="mt-0 block w-full tablet:w-5/6 px-2 border-0 border-b-2 border-gray focus:ring-0 focus:border-yellow"
                  {...register('email')}
                />
                {errors.email?.message && (
                  <FormError>{errors.email?.message}</FormError>
                )}
              </label>
            </div>

            <button
              type="submit"
              className="bg-blue300 text-white px-4 py-2 hover:bg-violet focus:ring-0 focus:outline-yellow"
            >
              Register Now
            </button>
            <div>
              {isSubmitSuccessful && (
                <FormSuccess>Registration completed!</FormSuccess>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
