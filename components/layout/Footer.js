import routes from '../../public/data/routes.json';

const Footer = () => {
  console.log(routes);
  return (
    <footer>
      {routes.map((route) => (
        <p key={route.name}>{route.name}</p>
      ))}
    </footer>
  );
};

export default Footer;
