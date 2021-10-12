const MovieDescriptionList = ({ type, res }) => {
  return (
    <li className=" font-semibold text-primary mb-1 last:mb-0">
      {`${type} : `}
      <span className=" font-light text-gray">{res}</span>
    </li>
  );
};

export default MovieDescriptionList;
