const LeftArrow = (props) => {
  const { onClick } = props;
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute top-1/2 z-[1] cursor-pointer left-2 -translate-y-1/2 scale-75 lg:scale-100 lg:left-5"
      onClick={onClick}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M40.6626 16.9373C41.9123 18.1869 41.9123 20.2131 40.6626 21.4627L30.1254 32L40.6626 42.5373C41.9123 43.7869 41.9123 45.8131 40.6626 47.0627C39.413 48.3124 37.3868 48.3124 36.1372 47.0627L23.3372 34.2627C22.0875 33.0131 22.0875 30.9869 23.3372 29.7373L36.1372 16.9373C37.3868 15.6876 39.413 15.6876 40.6626 16.9373Z"
        fill="#E73959"
      />
    </svg>
  );
};

export default LeftArrow;
