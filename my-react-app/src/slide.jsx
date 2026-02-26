import { Carousel } from "react-bootstrap";
import "./Slide.css";

function Slide() {
  return (
   <Carousel
  className="hero-carousel"
  controls
  indicators
  interval={4000}
  pause={false}   
  fade
>

      <Carousel.Item>
        <div
          className="hero-slide bg-zoom"
          style={{ backgroundImage: `url(/images/slide1.png)` }}
        >
          <div className="hero-overlay" />

          <div className="container hero-content">
            <h1 className="hero-title animate-up">
              Prepare for Entrance Exams
            </h1>
            <p className="hero-subtitle animate-up delay-1">
              Get access to comprehensive mock tests and practice questions designed by experts
            </p>

            <div className="hero-actions animate-up delay-2">
              <a href="/mock-tests" className="btn btn-warning btn-lg px-4">
                Mock Tests →
              </a>
              <a href="/practice" className="btn btn-outline-light btn-lg px-4 ms-3">
                Practice Q&A
              </a>
            </div>
          </div>
        </div>
      </Carousel.Item>

      
      <Carousel.Item>
        <div
          className="hero-slide bg-zoom"
          style={{ backgroundImage: `url(/images/slide2.png)` }}
        >
          <div className="hero-overlay" />

          <div className="container hero-content text-center">
            <h1 className="hero-title animate-up">Practice Daily. Improve Fast.</h1>
            <p className="hero-subtitle animate-up delay-1">
              Smart practice questions with instant feedback.
            </p>
          </div>
        </div>
      </Carousel.Item>

     
      <Carousel.Item>
        <div
          className="hero-slide bg-zoom"
          style={{ backgroundImage: `url(/images/slide3.png)` }}
        >
          <div className="hero-overlay" />

          <div className="container hero-content text-center">
            <h1 className="hero-title animate-up">Track Your Progress</h1>
            <p className="hero-subtitle animate-up delay-1">
              Detailed analytics to help you improve faster.
            </p>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slide;