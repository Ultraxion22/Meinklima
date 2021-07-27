import Carousel from "react-multi-carousel";
import { Image } from "semantic-ui-react";

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
  "https://neufert-cdn.archdaily.net/uploads/account_logo/logo/971/large_anwo_logo.png",
  "https://agrotendencia.tv/agroshow/wp-content/uploads/2021/05/logo-cosmoplas.png",
  "https://www.agrificiente.cl/wp-content/uploads/2017/05/descarga-300x111.png",
  "https://i.ibb.co/XZqZmgK/recal.jpg"
];

const Simple2 = ({ deviceType }) => {
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
            style={{ width: "300px", height: "200px",objectFit: "scale-down"}}
            src={image}
          />
        );
      })}
    </Carousel>
  );
};

export default Simple2;