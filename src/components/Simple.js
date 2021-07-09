import Carousel from "react-multi-carousel";
import { Divider, Image } from "semantic-ui-react";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1300 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1300, min: 700 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 700, min: 0 },
    items: 1,
  }
};
const images = [
  "https://meinklima.cl/wp-content/uploads/2021/04/large_anwo_logo.png",
  "https://meinklima.cl/wp-content/uploads/2021/04/Baxi.png",
  "https://meinklima.cl/wp-content/uploads/2021/04/logo_rinnai.png",
  "https://meinklima.cl/wp-content/uploads/2021/04/logosime.png"
];

const Simple = ({ deviceType }) => {
  return (
    <Carousel
      ssr
      partialVisbile
      deviceType={deviceType}
      itemClass="image-item"
      responsive={responsive}
    >
      {images.slice(0, 4).map(image => {
        return (
          <Image
            draggable={false}
            style={{ width: "16rem", height: "5rem" }}
            src={image}
          />
        );
      })}
    </Carousel>
  );
};

export default Simple;