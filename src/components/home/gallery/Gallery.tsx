import "./Gallery.css";
import { galleryData } from "../../../util/bannerData";
import { GalleryProps } from "../../../types/HomePageProps.type";
import GalleryItem from "./GalleryItem";
import { Box } from "@mui/material";

const Gallery = () => {
  // Function to render images based on mainCategoryName

  return (
    <div className="common_bg section_padding">
      <Box sx={{ textAlign: "center" }}>
        <h2 className="common_title heading_padding">Our Gallery </h2>
      </Box>
      <div className="galleryBody">
        {galleryData?.map((item: GalleryProps, index: number) => (
          <GalleryItem
            index={index}
            title={item?.title}
            photo={item?.photo}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
