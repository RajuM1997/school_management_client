import { GalleryItemProps } from "../../../types/HomePageProps.type";

const renderImages = (photos: string) => {
  return `url(${photos})`;
};

const GalleryItem = (props: GalleryItemProps) => {
  const bgStyle = {
    backgroundImage: renderImages(props.photo),
  };

  return (
    <div
      className={`galleryItemBody ${
        props.index === 0
          ? "bigItem1"
          : props.index === 1
          ? "bigItem2"
          : props.index === 8
          ? "bigItem1"
          : props.index === 9
          ? "bigItem2"
          : `smallItem${props.index}`
      }`}
    >
      <div style={bgStyle} className="galleryImg"></div>
      <div className="galleryImageOverlay">
        <h4>{props.title}</h4>
      </div>
    </div>
  );
};

export default GalleryItem;
