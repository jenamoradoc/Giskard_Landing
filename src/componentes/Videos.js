// import video_1 from "../img/video_1.mp4";
// import video_2 from "../img/video_2.mp4";
// import video_3 from "../img/video_3.mp4";

// import React from "react";
// import {
//   CarouselProvider,
//   Slider,
//   Slide,
//   ButtonBack,
//   ButtonNext,
// } from "pure-react-carousel";
// import "pure-react-carousel/dist/react-carousel.es.css";

// class Slider extends React.Component {
//   render() {
//     return (
//       <CarouselProvider
//         naturalSlideWidth={100}
//         naturalSlideHeight={125}
//         totalSlides={3}
//       >
//         <Slider>
//           <Slide index={0}>I am the first Slide.</Slide>
//           <Slide index={1}>I am the second Slide.</Slide>
//           <Slide index={2}>I am the third Slide.</Slide>
//         </Slider>
//         <ButtonBack>Back</ButtonBack>
//         <ButtonNext>Next</ButtonNext>
//       </CarouselProvider>
//     );
//   }
// }

// export default Slider;

import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import video_1 from "../img/video_1.mp4";
import video_2 from "../img/video_2.mp4";
import video_3 from "../img/video_3.mp4";

class Videos extends React.Component {
  render() {
    return (
      <div>
        <video controls autoplay className="video_controls" >
          <source src={video_1} />
          Your browser does not support the video tag.
        </video>
      </div>
      // <CarouselProvider
      //   naturalSlideWidth={100}
      //   naturalSlideHeight={125}
      //   totalSlides={3}
      // >
      //   <Slider>
      //     <Slide index={0}>
      //     <video controls autoplay >
      //       <source src={video_1} width="20rem" height="auto" />
      //       Your browser does not support the video tag.
      //     </video>
      //     </Slide>
      //     <Slide index={1}>I am the second Slide.</Slide>
      //     <Slide index={2}>I am the third Slide.</Slide>
      //   </Slider>
      //   <ButtonBack>Back</ButtonBack>
      //   <ButtonNext>Next</ButtonNext>
      // </CarouselProvider>
    );
  }
}

export default Videos;
