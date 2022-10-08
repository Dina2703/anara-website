import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function SlideShow() {
  return (
    <div>
      <Carousel
        autoPlay
        interval={4000}
        showThumbs={false}
        infiniteLoop
        showStatus={false}
      >
        <div>
          <img src="/anara01.jpeg" alt="anara" />
        </div>
        <div>
          <img src="/anara02.jpeg" alt="anara" />
        </div>
        <div>
          <img src="/anara03.jpeg" alt="anara" />
        </div>
      </Carousel>
    </div>
  );
}

export default SlideShow;
