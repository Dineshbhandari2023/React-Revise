const ImageShow = ({ data }) => {
  return (
    <div>
      <a href={data.urls.regular}>
        <img src={data.urls.small} alt={data.alt_description} />
      </a>
    </div>
  );
};

export default ImageShow;
