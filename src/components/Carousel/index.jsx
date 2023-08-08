import { Container } from './style';
import CaretRight from '../../assets/caretRight.svg';
import { useRef } from 'react';

export function Carousel({ children, onClick, ...rest }) {
  const moveCarousel = useRef(null);

  const handleCarouselScroll = (direction, carouselRef) => {
    carouselRef.current.scrollLeft +=
      direction === 'left'
        ? -carouselRef.current.offsetWidth
        : carouselRef.current.offsetWidth;
  };

  return (
    <Container ref={moveCarousel} {...rest}>
      <div className="ButtonLeft">
        <button onClick={() => handleCarouselScroll('left', moveCarousel)}>
          <img src={CaretRight} alt="Arrow pointing left" />
        </button>
      </div>

      {children}

      <div className="ButtonRight">
        <button onClick={() => handleCarouselScroll('right', moveCarousel)}>
          <img src={CaretRight} alt="Arrow pointing right" />
        </button>
      </div>
    </Container>
  );
}
