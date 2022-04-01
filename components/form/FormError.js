import ErrorIcon from '../../public/assets/images/icons/ErrorIcon';

const FormError = ({ children }) => {
  return (
    <p className="text-sm font-semibold text-magenta tracking-wide flex items-center space-x-1 my-2 uppercase">
      <ErrorIcon />
      <span className="ml-4">{children}</span>
    </p>
  );
};

export default FormError;
