// OBJECTIVE: renders the guide page.
// ****************IMPORTS*************
// here we only import what we need from react bstrap
import { Link } from "react-router-dom";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// *****************************************
// guide renders tabs from react-bootstrap
function Guide() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <div className="guide-header-text">
              <h1>The Beginners Guide</h1>
              <p>
                If you have made it this far, you have a taste for adventure. It
                looks good on you! The purpose of this guide is to focus on
                getting started at a very low cost. Important information about
                laws and how to find out if an area is an active mining claim.
                The basics is a learning resource on how to prospect. Of course,
                don’t forget the gear you will need. I took cost into account so
                sticking with pure needs vs. wants on the gear list guys. Almost
                all the resources I have provided on this website are free to
                use. My Land Matters I am sure would love your support if you
                are able to donate. Like and subscribe if you like the content I
                have linked from YouTube as well! I love to support independent
                content makers for their insight and efforts!
              </p>
            </div>
          </Col>
          <Col>
            <div className="guide-header-text">
              <h1>Steps to take</h1>
              <ol>
                <li>
                  <h5>
                    Educate yourself on your area's mining history and laws
                  </h5>

                  <h5>Note: Every states mining laws are different</h5>
                </li>
                <li>
                  <h5>
                    Learn the basics first, before buying a bunch of equipment
                  </h5>
                </li>
                <li>
                  <h5>Join a prospecting club!</h5>
                </li>
              </ol>

              {/* <h1 className="gpaa-title">Check out the GPAA!</h1> */}
              <h1> Check out the GPAA!</h1>

              <button className="gpaa-button">
                <Link
                  className="gppa-btn-text"
                  to="https://gpaastore.com/pages/membership-in-the-gold-prospectors-association-of-america"
                  alt="GPAA membership sign-up"
                >
                  <img
                    className="gpaa-button-image"
                    src="/images/GPAA-logo.png"
                    alt="GPAA sign up"
                  ></img>
                </Link>
              </button>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <h1 className="guide-header-text">Checkout the tabs below. 👇</h1>
        <Tabs
          defaultActiveKey="Resources"
          data-bs-theme="dark"
          className="mb-3"
          justify
        >
          <Tab eventKey="Resources" title="Important">
            <h1 className="guide-header-text">Lost but found?</h1>
            <p>
              The mining and geological history of the area you want to prospect
              is very important to know. Familiarize yourself with maps of these
              areas. I am in Idaho, I have provided a link below to a historical
              mining document on the Snake River for an example. It will give
              you some sort of clue what to look for and where they were finding
              gold. If you can see what the old-timers had to say it will help
              you on your way! They knew a lot that has been lost to time.
            </p>
            <Container>
              <div className="guide-link-btn-wrapper">
                <button className="guide-link-buttons">
                  <Link
                    className="guide-link-text"
                    to="https://digitalatlas.cose.isu.edu/geog/historic/histtxt/Gold.pdf"
                  >
                    Snake River historical notes
                  </Link>
                </button>
                <button className="guide-link-buttons">
                  <Link
                    className="guide-link-text"
                    to="https://mrdata.usgs.gov/mrds/map-commodity.html"
                  >
                    Mineral Resources Data System
                  </Link>
                </button>
              </div>
            </Container>
            <p>
              I am in the beautiful state of Idaho, where it's pretty simple. if
              it is public lands, for example a national forrest, you can pan
              for gold without a permit. You do however need to be aware of
              existing mining claims. They are marked with white PVC posts now
              days. It should contain a map of the claim as well. It's a good
              idea if you come across this to take a picture of it with your
              phone. You don't want to be on someone's claim prospecting, in
              Idaho claim jumping is a serious offense.
            </p>
            <h3 className="guide-header-text">
              Use these maps to check for past and active claims
            </h3>
            <div className="guide-link-btn-wrapper">
              <br></br>
              <button className="guide-link-buttons">
                <Link
                  className="guide-link-text"
                  to="https://mlrs.blm.gov/s/research-map#3,43.09333164338794,-111.31132999999994"
                >
                  Nationwide Mineral & Land Records System
                </Link>
              </button>
              <button className="guide-link-buttons">
                <Link
                  className="guide-link-text"
                  to="http://mylandmatters.org/Maps/"
                >
                  My Land Matters
                </Link>
              </button>
            </div>
            <Container>
              <h1 className="guide-header-text">Look for me!</h1>
              <div className="guide-image-container">
                <img
                  className="guide-images"
                  src="https://findinggoldincolorado.com/wp-content/uploads/2018/09/53FBC387-130E-4598-8349-2F6A12C33933-e1587751759644.jpeg"
                  alt="mining claim post"
                ></img>
              </div>
            </Container>
          </Tab>
          <Tab eventKey="The Basics" title="The Basics">
            <Container>
              <div>
                <h1>The Basics</h1>
                <h5>Learn to pan</h5>
                <p>
                  Obviously, you'll need to know HOW to pan for gold. It's not
                  hard if you understand the concept. Gold is very heavy and
                  dense. So, when you pan for it you are mimicking the river and
                  making the heavy materials go to the bottom and the light to
                  the top. That way you can wash those light materials off and
                  get to the gold at the bottom!
                </p>
                <h5>Rookie Panning Trick:</h5>
                <p>
                  Put a BB in your pan before you start panning, if it's still
                  there when you are done. Theoretically you didn't lose any
                  gold. It's recommended to buy a paydirt bag to pan out. This
                  gives you a feel for how gold behaves in the pan.
                </p>
                <h4>Trick:</h4>
                <p>
                  Pre-condition your gold pan. take some very fine grain
                  sandpaper. In my case I used plumber sand paper and roughed up
                  the bottom and sides.
                </p>

                <h5>Test everything, document and search!</h5>
                <p>
                  Not all that is gold glitters, You might have read that
                  somewhere before. It's true. Gold is pushed up from the core
                  of the earth during volcanic activity. The weather or glaciers
                  then erode the mountain down over years of time. As you can
                  imagine the gold inside the rock in the mountain is also
                  eroded down and the gold is then deposited in the creeks and
                  rivers nearby. they call this type of gold placer gold. It
                  will be small and in consentrated locations. you are looking
                  for those concentrated locations. It could be anywhere that's
                  why they say test everything by panning it out. that's why
                  number one you should learn to pan.
                </p>
                <Container>
                  <Row>
                    <Col>
                      <h5>Have you found a concetration?</h5>
                      <p>
                        If you have found a place where you’re getting a lot
                        more gold in a single pan. You would consider learning
                        to use a sluice box. They can be made or purchased.
                        There is a lot of argument as what type of sluice to
                        use. In my own experience using all of them. Each of
                        them has a purpose. But the most well balanced was steel
                        bars and miner’s moss. It's also very light and can fit
                        in my pack! No machinery required to operate!
                      </p>
                    </Col>
                    <Col>
                      <img
                        src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR26QmDeaeNV2Sqt-t-ksRW5BcE6qKHr7CeUpwC77w4zZAuxoOdLrG5huDhCP9H0hWFNh0obtOO6alzrVGdnvbPNRxMLOfq8JVTnoTyv4wI0CZvlS9tI1z7"
                        alt="Vivor sluice box"
                      ></img>
                    </Col>
                  </Row>
                </Container>
              </div>
              <Container>
                <div>
                  <h1>Resources to learn:</h1>

                  <button className="guide-link-buttons">
                    <Link
                      className="guide-link-text"
                      to="https://www.youtube.com/watch?v=Y2z5ScWa3Vo "
                    >
                      Gold Panning Tutorial with Klesh
                    </Link>
                  </button>
                  <button className="guide-link-buttons">
                    <Link
                      className="guide-link-text"
                      to="https://www.youtube.com/watch?v=DuIhvyhPND0"
                    >
                      Sluice Box Setup Vo-Gus
                    </Link>
                  </button>
                </div>
              </Container>
            </Container>
          </Tab>
          <Tab eventKey="Gear" title="Gear">
            <Container>
              <Row>
                <div className="">
                  <h5>Note:</h5>
                  Take into account what environment you will be in and dress
                  accordingly. Your gear will also vary based on where you are
                  as well. This is for basic field testing load out to find the
                  deposit.
                </div>
              </Row>
              <Row>
                <div>
                  <h1>Basic Field Testing Load-Out List</h1>
                  <ul>
                    <li>
                      Pack with a reinforced frame (make sure it fits your body
                      & can adjust to size)
                    </li>
                    <li>3 classifiers </li>
                    <ul>
                      <h5>Should fit on top a 5 gallon bucket.</h5>
                      <h5>Sizes:</h5>
                      <li>1/2"</li>
                      <li>1/4"</li>
                      <li>1/8"</li>
                    </ul>
                    <li> Sniffer Bottle (Suck up any gold you find!)</li>
                    <li>
                      Method to document gold count & location in each test pan
                    </li>
                    <li>Bags for taking samples home and panning</li>
                    <li>
                      Light-weight bottle of JetDry or equivalant (Gold can
                      float if there are oils from your skin in the pan, a few
                      small drops will prevent that.)
                    </li>
                    <li>
                      Garden Shovel (Think light-weight & can be used for a
                      walking stick!)
                    </li>
                    <li>
                      Duel-End Garden Hand-Pick (Thinking light-weight agian)
                    </li>
                    <li>
                      Light-weight Pruning Hand-Sheers (To cut through
                      obstructions)
                    </li>
                    <li>14" Gold Pan</li>
                    <li> 10" Gold Pan</li>
                    <li>Jeweler's loop (Optional)</li>

                    <li>
                      Reliable navigation device of some type. (Your phone has
                      an app for that!)
                    </li>
                  </ul>
                </div>
              </Row>
              <Row>
                <Col>
                  <div></div>
                </Col>
              </Row>
            </Container>
          </Tab>
        </Tabs>
      </Container>
    </>
  );
}

export default Guide;
