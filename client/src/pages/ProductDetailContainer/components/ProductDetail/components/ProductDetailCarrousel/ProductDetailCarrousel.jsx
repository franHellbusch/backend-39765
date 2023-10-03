import { useState } from "react";
import { FlexContainer } from "@/styled-components";
import {
  DetailCarouselContainer,
  DetailCarouselControlImage,
  DetailCarouselControls,
  DetailSlide,
} from "./styled-components";

const ProductDetailCarrousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const HandleCurrentSlide = (current) => {
    setCurrentIndex(current);
  };

  return (
    <FlexContainer $position='relative' $width='50%' $height='100%'>
      <DetailCarouselContainer>
        {images.map((image, index) => (
          <DetailSlide key={index} $backgroundImage={image} $translate={`-${currentIndex * 100}%`}>
            <img src={image} alt={`image${index}`} />
          </DetailSlide>
        ))}
      </DetailCarouselContainer>

      <DetailCarouselControls>
        {images.map((image, index) => (
          <DetailCarouselControlImage
            onMouseOver={() => HandleCurrentSlide(index)}
            $current={index == currentIndex}
            key={index}
          >
            <img src={image} alt={`image${index}`} />
          </DetailCarouselControlImage>
        ))}
      </DetailCarouselControls>
    </FlexContainer>
  );
};

export default ProductDetailCarrousel;
