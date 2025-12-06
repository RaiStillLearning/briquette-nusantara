import { Container, Row, Col } from "react-bootstrap";
import { Phone, Mail, Instagram, Music, MapPin } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "200px",
  borderRadius: "8px",
};

const center = {
  lat: -6.391702,
  lng: 106.794784,
};

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#fff",
        paddingTop: "40px",
        paddingBottom: "20px",
        borderTop: "1px solid #ddd",
      }}
    >
      <Container>
        {/* -------------- TOP SECTION -------------- */}
        <Row className="align-items-start mb-4">
          {/* GOOGLE MAP + LOGO */}
          <Col md={4} className="text-center text-md-start mb-4 mb-md-0">
            {/* LOGO */}
            <img
              src="/logo/briquette-logo.png"
              alt="Logo"
              style={{ height: "120px", marginBottom: "15px" }}
            />

            {/* MAP */}
            <LoadScript googleMapsApiKey="AIzaSyDmW2q9WTmBAM9sCEDdEMju0PPNe0CH0Bg">
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={14}
              />
            </LoadScript>
          </Col>

          {/* QUICK LINKS */}
          <Col md={4} className="mb-4 mb-md-0">
            <h6 style={{ fontWeight: "600", marginBottom: "15px" }}>
              quick link
            </h6>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                lineHeight: "28px",
              }}
            >
              <li>home</li>
              <li>product</li>
              <li>about us</li>
              <li>contact us</li>
            </ul>
          </Col>

          {/* CONTACT US */}
          <Col md={4}>
            <h6 style={{ fontWeight: "600", marginBottom: "15px" }}>
              contact us
            </h6>

            <p style={{ margin: 0 }}>
              <Phone size={18} color="red" style={{ marginRight: "10px" }} />
              +62 896 5698 3498
            </p>

            <p style={{ margin: 0 }}>
              <Mail size={18} color="red" style={{ marginRight: "10px" }} />
              info@briquettenusantara.com
            </p>

            <p style={{ marginTop: "5px" }}>
              <MapPin size={18} color="red" style={{ marginRight: "10px" }} />
              Jl. HR Rasuna Said Kav 2-1 Blok X-1
              <br />
              Kuningan Timur Setiabudi Jakarta
              <br />
              Selatan DKI Jakarta.
            </p>

            <div style={{ marginTop: "10px" }}>
              <Instagram
                size={22}
                color="red"
                style={{ marginRight: "15px", cursor: "pointer" }}
              />
              <FaTiktok size={22} color="red" style={{ cursor: "pointer" }} />
            </div>
          </Col>
        </Row>

        {/* -------------- BOTTOM LINE -------------- */}
        <hr />

        {/* COPYRIGHT */}
        <div className="text-center">
          <p style={{ color: "#777", fontSize: "14px", margin: 0 }}>
            © 2025 BriquetteNusantara. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
