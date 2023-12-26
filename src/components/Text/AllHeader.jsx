// eslint-disable-next-line react/prop-types
const AllHeader = ({header, text}) => {
  return (
    <div>
      <div className="section-title text-center mb-55 header-text">
        <h2>{header}</h2>
      </div>
      <p>{text}</p>
    </div>
  );
};

export default AllHeader;
