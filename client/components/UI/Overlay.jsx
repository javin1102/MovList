const Overlay = ({ setIsClickOverlay, bgColor }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen ${bgColor} z-40`}
      onClick={() => {
        setIsClickOverlay(true);
      }}
    ></div>
  );
};

export default Overlay;
