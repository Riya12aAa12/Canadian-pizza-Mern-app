import React from "react";
import { Container, Row, Col, Table, Image } from "react-bootstrap";
import { FiPhoneCall } from "react-icons/fi";
import { ImMobile } from "react-icons/im";
import { AiOutlineMail } from "react-icons/ai";
const Contact = () => {
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <Row>
          <Col md={6}>
            <h1>Pizza Virus</h1>
            <p>
            Questions, comments, or just craving some pizza? We're here to help! Reach out to Pizza Virus using any of the following methods:
            <br/>
            <br/>

Phone: Call us to speak with a member of our team. Whether you're placing an order or simply want to learn more about our menu, we're here to assist you.
<br/>
<br/>
Email: Send us an email with any inquiries or feedback you may have. We'll make sure to get back to you promptly.
<br/>
<br/>
Visit Us: Stop by our location to experience Pizza Virus firsthand. Our doors are always open, and we'd love to see you.
<br/>
<br/>
Social Media: Stay connected with us on social media for the latest updates and promotions. Follow us to join the conversation.
<br/>
<br/>
No matter how you choose to get in touch, we're dedicated to providing you with exceptional service and delicious pizza. Hunger may be a deadly virus, but with Pizza Virus, satisfaction is guaranteed.
<br/>
<br/>

            </p>

            <Table striped bordered hover className="text-center">
              <thead>
                <tr>
                  <th className="bg-warning text-center" colSpan={3}>
                    --- Contact Details ---
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <FiPhoneCall />
                  </td>
                  <td>Phone</td>
                  <td>0123-456789</td>
                </tr>
                <tr>
                  <td>
                    <ImMobile />
                  </td>
                  <td>Call</td>
                  <td>1234567890</td>
                </tr>
                <tr>
                  <td>
                    <AiOutlineMail />
                  </td>
                  <td>Email</td>
                  <td>pizzavirus@gmail.com</td>
                </tr>
              </tbody>
              <br/>
              <br/>
            </Table>
          </Col>
          <Col md={6} style={{ display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '500px' }}>
            <Image
              src="images/farmhouse.jpg"
              style={{width : '600px', height : '400px', paddingLeft : '20px'}}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
