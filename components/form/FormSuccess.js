import Check from '../../public/assets/images/icons/Check';
const FormSuccess = ({ children }) => {
  return (
    <p className="text-sm font-semibold text-green tracking-wide flex items-center space-x-1 my-2 uppercase">
      <Check />
      <span className="ml-4">{children}</span>
    </p>
  );
};

export default FormSuccess;
