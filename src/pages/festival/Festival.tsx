import { Box, Container } from "@mui/material";
import "./Festival.css";
import useFetch from "../../hooks/useFetch";
import GalleryItem from "../../components/home/gallery/GalleryItem";

const Festival = () => {
  const { data } = useFetch<any>(
    `${import.meta.env.VITE_REACT_APP_BASE_URL}/festival`
  );
  return (
    <div className="common_bg section_padding">
      <Box sx={{ py: 10 }}>
        <Container maxWidth="xl">
          <h2 className="common_title heading_padding">Our festival photos</h2>
          <div className="galleryBody">
            {data?.map((item: any, index: number) => (
              <GalleryItem index={index} item={item} key={index} />
            ))}
          </div>
        </Container>
      </Box>
    </div>
  );
};

export default Festival;
