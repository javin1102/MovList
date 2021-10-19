const Overlay = ({ setIsClickOverlay, bgColor }) => {
  return (
    <div
      className={`block fixed top-0 left-0 h-screen ${bgColor} w-full z-20`}
      onClick={() => {
        setIsClickOverlay(true);
      }}
    ></div>
  );
};

export default Overlay;
