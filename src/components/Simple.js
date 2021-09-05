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
  "https://i.ibb.co/PFLKPLR/pngegg-1.png",
  "https://upload.wikimedia.org/wikipedia/commons/9/99/Rinnai_Logo_2019.png",
  "https://seeklogo.com/images/S/Sime-logo-03CB03F4EB-seeklogo.com.png"
];

const Simple = ({ deviceType }) => {
  return (
    <Carousel
      ssr
      partialVisbile
      renderArrowPrev
      deviceType={deviceType}
      itemClass="image-item"
      responsive={responsive}
    >
      {images.slice(0, 4).map(image => {
        return (
          <Image
            draggable={false}
            style={{ width: "200px", height: "100px", objectFit: "scale-down"}}
            src={image}
          />
        );
      })}
    </Carousel>
  );
};

export default Simple;