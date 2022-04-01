const FormError = ({ children }) => {
  return (
    <p className="text-sm font-semibold text-magenta tracking-wide flex items-center space-x-1 my-2 uppercase">
      {children}
    </p>
  );
};

export default FormError;
