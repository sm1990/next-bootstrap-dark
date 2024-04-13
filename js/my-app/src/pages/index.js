import { Button, Col, Container, Row } from 'react-bootstrap';
import ThemeSwitcher from '@/components/theme-switcher/ThemeSwitcher';
import TopNav from '@/components/top-nav/TopNav';

const Index = () => {

  return (
    <div>

      {/* Add top navigation */}
      <TopNav />

      {/* Add a hero section */}
      <div className="px-4 py-5 my-5 text-center">
        <img className="d-block mx-auto mb-4" src="/images/logo.png" alt="logo" width="72" height="57" />
        <h1 className="display-5 fw-bold">MyApp</h1>
        <Col lg={6} className="mx-auto">
          <p className="lead mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <Button type="button" variant="primary" size="lg" className="px-4 gap-3">Primary button</Button>
            <Button type="button" variant="secondary" size="lg" className="px-4">Secondary</Button>
          </div>
        </Col>
      </div>

      {/* Add a feature section */}
      <Container className="px-4 py-5" id="featured-3">
        <h2 className="pb-2 border-bottom">Features</h2>
        <Row xs={1} lg={3} className="g-4 py-5">
          <Col className="feature">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">
              <img className="d-block mx-auto mb-4" src="images/cloud.png" alt="" width="85" height="57" />
            </div>
            <h3 className="fs-2">Featured one</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <a href="#" className="icon-link">
              Learn more
            </a>
          </Col>
          <Col className="feature">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">
              <img className="d-block mx-auto mb-4" src="images/docs.png" alt="" width="72" height="57" />
            </div>
            <h3 className="fs-2">Featured two</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <a href="#" className="icon-link">
              Learn more
            </a>
          </Col>
          <Col className="feature">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">
              <img className="d-block mx-auto mb-4" src="images/mail.png" alt="" width="72" height="57" />
            </div>
            <h3 className="fs-2">Featured three</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <a href="#" className="icon-link">
              Learn more
            </a>
          </Col>
        </Row>
      </Container>

      {/* Add a footer section */}
      <Container>
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Home</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Features</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Pricing</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">FAQs</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">About</a></li>
          </ul>
          <p className="text-center text-body-secondary">&copy; 2023 Company, Inc</p>
        </footer>
      </Container>

      {/* Add theme switcher */}
      <ThemeSwitcher />

    </div>
  )
}

export default Index