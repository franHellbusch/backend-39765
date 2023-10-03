import { useState } from "react";
import {
  CarouselContainer,
  ControlButton,
  Controls,
  DotsControl,
  DotsControlsContainer,
  Slide,
} from "./styled-components";
import { FlexContainer } from "@/styled-components";

const Carrousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const handleNextSlide = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  const HandleCurrentSlide = (current) => {
    setCurrentIndex(current);
  };

  return (
    <FlexContainer $position='relative' $width='80%' $margin='3rem 10% 0'>
      <CarouselContainer>
        {images.map((image, index) => (
          <Slide
            key={index}
            $backgroundImage={image.imageUrl}
            $translate={`-${currentIndex * 100}%`}
          ></Slide>
        ))}
      </CarouselContainer>

      <Controls>
        <ControlButton onClick={handlePrevSlide}>{"<"}</ControlButton>
        <ControlButton onClick={handleNextSlide}>{">"}</ControlButton>
      </Controls>

      <DotsControlsContainer>
        {images.map((_, index) => (
          <DotsControl
            onClick={() => HandleCurrentSlide(index)}
            key={index}
            $current={currentIndex == index}
          ></DotsControl>
        ))}
      </DotsControlsContainer>
    </FlexContainer>
  );
};

export default Carrousel;
