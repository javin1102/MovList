const RightArrow = (props) => {
  const { onClick } = props;
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute top-1/2 z-[1] cursor-pointer right-2 -translate-y-1/2  scale-75 lg:scale-100 lg:right-5"
      onClick={onClick}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M23.3372 47.0627C22.0875 45.8131 22.0875 43.7869 23.3372 42.5373L33.8744 32L23.3372 21.4627C22.0875 20.2131 22.0875 18.1869 23.3372 16.9373C24.5868 15.6876 26.613 15.6876 27.8626 16.9373L40.6626 29.7373C41.9123 30.9869 41.9123 33.0131 40.6626 34.2627L27.8626 47.0627C26.613 48.3124 24.5868 48.3124 23.3372 47.0627Z"
        fill="#E73959"
      />
    </svg>
  );
};

export default RightArrow;
