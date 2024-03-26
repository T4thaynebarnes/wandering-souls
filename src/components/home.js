// OBJECTIVE: will render the landing page, named Home
// **************IMPORTS***********************
import Footer from "./footer";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CarouselImage1 from "./carousel-image1";
import CarouselImage2 from "./carousel-image2";
import CarouselImage3 from "./carousel-image3";
// ************************************************************

function Home() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <Container className="landing-tab-wrapper">
        <Row>
          <Col>
            <div>
              <div className="landing-tab-header">
                <h1>Looking for gold?</h1>
              </div>
              <div className="landing-tab-text">
                <p>
                  Well, the answer is simple! You never know what you might find
                  out there or for that matter inside of yourself. This is a
                  hobby for most, as it should be. If you like the outdoors,
                  enjoy seeing breathe taking scenery, and enjoy some exercise.
                  Then prospecting is for you! It’s my excuse to get away for a
                  few days, enjoy the scenery, unwind, and maybe find some
                  treasure. This is my personal journey into prospecting. I
                  never thought about prospecting until my neighbor showed me a
                  small vile of gold he had found. I mean it was a small amount
                  but enough to see and admire. He gave me some tips on how to
                  prospect and where to start. I took advantage of the knowledge
                  on the internet about prospecting. After a lot of research, I
                  found a decent area I wanted to try. I went to places where
                  gold had been found in the mid 1800’s in a national forest
                  near me. I enjoyed camping and panning for gold, indeed I
                  found some, not any of major monetary value but still great
                  value to me. It gave me a sense of personal growth. It was
                  hard getting to the location. I had to pack in on foot 5 miles
                  through thick brush and with no roads and very little game
                  trails to use. The gold was not the item of value I walked
                  away with here. It was the knowledge and experience I had
                  acquired getting there and what I got to witness in nature. I
                  had the ability to acquire gold in its raw form straight from
                  the ground. It’s a sense of accomplishment and nurturing of
                  the soul in the peace and quiet of nature that was of real
                  value. In addition, it comes with great comradery, I have made
                  some good friends from it. I want others to experience this as
                  well. I have created a beginner’s guide to prospecting. In
                  which you will simply find things I wish I knew starting out.
                  I am no expert, just a guy who made a website about things he
                  is passionate about. Like making this website for example. One
                  might think you need a whole bunch of expensive equipment, you
                  don’t. I have made a place for youto post questions & your
                  findings. Of course, where you found it is your secret to
                  keep.
                </p>
              </div>
            </div>
          </Col>
          <Container>
            <Col md="auto">
              <div className="carousel-wrapper">
                <Carousel
                  className="carousel"
                  activeIndex={index}
                  onSelect={handleSelect}
                >
                  <Carousel.Item>
                    <CarouselImage1 text="vile of gold" />
                    <Carousel.Caption>
                      <h3>Just above a GPAA claim</h3>
                      <p>
                        Sometimes you have to go where no one else wants to go.
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <CarouselImage2 text="Second slide" />
                    <Carousel.Caption>
                      <h3>That's a picker!</h3>
                      <p>Best spot so far!</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <CarouselImage3 text="the Reveal on a clean out on a sluice run" />
                  </Carousel.Item>
                </Carousel>
              </div>
            </Col>
          </Container>
        </Row>
      </Container>
      <Container className="landing-tab-wrapper">
        <div>
          <Footer />
        </div>
      </Container>
    </>
  );
}

export default Home;
