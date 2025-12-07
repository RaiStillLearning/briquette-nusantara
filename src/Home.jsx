import React from "react";
import { Helmet } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";

import Layout from "./components/layout";
import LandingPage from "./landing/LandingPage";
import CertificateCarousel from "./components/CertificateCarousel";
import CallToAction from "./components/CallToAction";

const Home = () => {
  return (
    <Layout>
      {/* SEO */}
      <SEO
        title="Briquette Nusantara – Sustainable Briquette Manufacturer"
        description="Briquette Nusantara adalah produsen briket kelapa berkualitas ekspor yang ramah lingkungan. Menghadirkan solusi energi bersih untuk kebutuhan internasional."
        image="/logo/briquette-logo.png"
        url="https://briquette-nusantara.vercel.app/"
      />

      {/* Landing Section */}
      <section
        id="landing"
        style={{
          backgroundColor: "#FFF5EE",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <LandingPage />
      </section>

      {/* About Us Section */}
      <section id="about" className="py-5">
        <Container>
          <Row className="justify-content-center text-center">
            <Col md={8} lg={6}>
              <h2 className="mb-4">About Our Company</h2>
              <p className="text-muted">
                We are a leading briquette manufacturer dedicated to sustainable
                energy innovation. Using modern technology and selected raw
                materials, we produce export-quality briquettes that are
                efficient, clean, and environmentally friendly.
              </p>
            </Col>
          </Row>

          {/* Official Documents */}
          <Row className="justify-content-center text-center mt-5">
            <Col md={8} lg={6}>
              <h2 className="mb-4">Official Documents</h2>
              <p className="text-muted">
                Briquettenusantara is committed to operating with transparency
                and integrity. This section provides comprehensive information
                regarding our licenses, certificates, legality, and compliance
                with industry standards.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-5 bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col md={10} lg={8}>
              <CertificateCarousel />
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section>
        <CallToAction />
      </section>
    </Layout>
  );
};

export default Home;
