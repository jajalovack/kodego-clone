import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import C1 from "./assets/New folder/C1.png";
import C2 from "./assets/New folder/C2.png";
import C3 from "./assets/New folder/C3.png";
import C4 from "./assets/New folder/C4.png";
import C5 from "./assets/New folder/C5.png";
import C6 from "./assets/New folder/C6.png";
import C7 from "./assets/New folder/C7.png";
import C8 from "./assets/New folder/C8.png";
import C9 from "./assets/New folder/C9.png";
import C10 from "./assets/New folder/C10.jpg";
import "./app.css";

const App = () => {
  return (
    <>
      <Container className="mt-5">
        <div className="header">
          <h1 className="KG-title">KodeGo Blog</h1>
          <p className="sub">
            Check out the latest on KodeGo and all things tech!
          </p>
        </div>
        <div className="search-container">
          <div className="search">
            <input
              className="form-control input-search"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
      </Container>
      <section>
        <Container>
          <Row>
            <Col className="col-lg-4 col-md-6 col-sm-12">
              <Card className="card-blog">
                <Card.Img className="cover" variant="top" src={C1} />
                <Card.Body>
                  <Card.Title className="blog-title">
                    Best VA Companies to Work for in the Philippines
                  </Card.Title>
                  <Card.Text className="blog-text">
                    Being part of a VA agency can help you gain experience and
                    credibility. Here ar
                  </Card.Text>
                  <Card.Text className="blog-author">
                    Jami Samson <span>13 September 2023</span>
                  </Card.Text>
                  <Card.Text className="blog-footer">Read More</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="col-lg-4 col-md-6 col-sm-12">
              <Card className="card-blog">
                <Card.Img className="cover" variant="top" src={C2} />
                <Card.Body>
                  <Card.Title className="blog-title">
                    How to Become a Virtual Assistant Without Any
                  </Card.Title>
                  <Card.Text className="blog-text">
                    Being a VA has many perks like work-life balance. Learn how
                    to become a virtua
                  </Card.Text>
                  <Card.Text className="blog-author">
                    Jami Samson <span>06 September 2023</span>
                  </Card.Text>
                  <Card.Text className="blog-footer">Read More</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="col-lg-4 col-md-6 col-sm-12">
              <Card className="card-blog">
                <Card.Img className="cover" variant="top" src={C3} />
                <Card.Body>
                  <Card.Title className="blog-title">
                    Essential Virtual Assistant Tools for Boosting Efficiency
                  </Card.Title>
                  <Card.Text className="blog-text">
                    Here are virtual assistant tools to integrate into your
                    workflow so you can
                  </Card.Text>
                  <Card.Text className="blog-author">
                    Jami Samson <span>17 August 2023</span>
                  </Card.Text>
                  <Card.Text className="blog-footer">Read More</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="col-lg-4 col-md-6 col-sm-12">
              <Card className="card-blog">
                <Card.Img className="cover" variant="top" src={C4} />
                <Card.Body>
                  <Card.Title className="blog-title">
                    10 Must-Have Skills of Every Successful Virtual Assistant
                  </Card.Title>
                  <Card.Text className="blog-text">
                    A successful virtual assistant has skills that allow them to
                    easily manage task
                  </Card.Text>
                  <Card.Text className="blog-author">
                    Jami Samson <span>10 August 2023</span>
                  </Card.Text>
                  <Card.Text className="blog-footer">Read More</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="col-lg-4 col-md-6 col-sm-12">
              <Card className="card-blog">
                <Card.Img className="cover" variant="top" src={C5} />
                <Card.Body>
                  <Card.Title className="blog-title">
                    Top 8 In-Demand Jobs in the Philippines in 2023
                  </Card.Title>
                  <Card.Text className="blog-text">
                    Here are some of the most in-demand jobs that can give you
                    the advantage o
                  </Card.Text>
                  <Card.Text className="blog-author">
                    Jami Samson <span>03 August 2023</span>
                  </Card.Text>
                  <Card.Text className="blog-footer">Read More</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="col-lg-4 col-md-6 col-sm-12">
              <Card className="card-blog">
                <Card.Img className="cover" variant="top" src={C6} />
                <Card.Body>
                  <Card.Title className="blog-title">
                    Best WordPress Development Tools for Building Good
                  </Card.Title>
                  <Card.Text className="blog-text">
                    These recommended WordPress development tools can help you
                    work
                  </Card.Text>
                  <Card.Text className="blog-author">
                    Jami Samson <span>20 July 2023</span>
                  </Card.Text>
                  <Card.Text className="blog-footer">Read More</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="col-lg-4 col-md-6 col-sm-12">
              <Card className="card-blog">
                <Card.Img className="cover" variant="top" src={C7} />
                <Card.Body>
                  <Card.Title className="blog-title">
                    10 Tips for Effective WordPress Development
                  </Card.Title>
                  <Card.Text className="blog-text">
                    By following these best practices, you can enhance your
                    WordPress
                  </Card.Text>
                  <Card.Text className="blog-author">
                    Jami Samson <span>13 July 2023</span>
                  </Card.Text>
                  <Card.Text className="blog-footer">Read More</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="col-lg-4 col-md-6 col-sm-12">
              <Card className="card-blog">
                <Card.Img className="cover" variant="top" src={C8} />
                <Card.Body>
                  <Card.Title className="blog-title">
                    Fraud Alert: Beware of Scams Using the KodeGo Name
                  </Card.Title>
                  <Card.Text className="blog-text">
                    We advise everyone to beware of suspicious emails or text
                    messages
                  </Card.Text>
                  <Card.Text className="blog-author">
                    Jami Samson <span>11 July 2023</span>
                  </Card.Text>
                  <Card.Text className="blog-footer">Read More</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="col-lg-4 col-md-6 col-sm-12">
              <Card className="card-blog">
                <Card.Img className="cover" variant="top" src={C9} />
                <Card.Body>
                  <Card.Title className="blog-title">
                    Getting Started in WordPress Development
                  </Card.Title>
                  <Card.Text className="blog-text">
                    WordPress development entails familiarizing yourself with
                    WordPress,
                  </Card.Text>
                  <Card.Text className="blog-author">
                    Jami Samson <span>07 July 2023</span>
                  </Card.Text>
                  <Card.Text className="blog-footer">Read More</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="col-lg-4 col-md-6 col-sm-12 mb-5">
              <Card className="card-blog">
                <Card.Img className="cover" variant="top" src={C10} />
                <Card.Body>
                  <Card.Title className="blog-title">
                    All About Web APIs: A Comprehensive Guide
                  </Card.Title>
                  <Card.Text className="blog-text">
                    Web APIs are valuable tools that developers & businesses can
                    use to
                  </Card.Text>
                  <Card.Text className="blog-author">
                    Jami Samson <span>21 June 2023</span>
                  </Card.Text>
                  <Card.Text className="blog-footer">Read More</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default App;
