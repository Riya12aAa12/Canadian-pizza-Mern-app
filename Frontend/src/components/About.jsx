import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <>
      <Container style={{ marginTop: "10px" }}>
        <h1>Who we are</h1>
        <p>
        At Pizza Virus, we're not just about crafting delicious pizzas; we're on a mission to fight the deadliest virus of all: hunger. We believe that no one should ever suffer from the pangs of an empty stomach, which is why we've dedicated ourselves to serving up the most mouthwatering pizzas that not only satisfy cravings but also spread joy and warmth with every slice.
        </p>
        <h1>Our Speciality</h1>
        <Row>
          <Col md={6}>
            <p>
            What sets us apart at Pizza Virus is our unwavering commitment to quality and innovation. Each pizza we create is a masterpiece, meticulously crafted using only the freshest ingredients and bursting with flavors that ignite the taste buds. From classic favorites like Margherita and Pepperoni to signature creations that push the boundaries of traditional pizza-making, our menu is a testament to our passion for culinary excellence.
            </p>
          </Col>
          <Col md={6}>
            <p>
            Behind every exceptional pizza at Pizza Virus is our visionary chef, whose culinary expertise knows no bounds. With years of experience and a deep love for food, our chef brings a unique blend of creativity and skill to the kitchen, constantly experimenting with new ingredients and techniques to elevate the pizza experience. From perfecting the dough to mastering the art of flavor combinations, our chef's dedication shines through in every delectable bite.

            </p>
          </Col>
        </Row>
        <Row>
          <h1>Our Cheif</h1>
          <Col md={6}>
          At Pizza Virus, crafting pizzas isn't just a job; it's an art form. Our commitment to excellence starts with sourcing the finest ingredients, ensuring that each pizza is a symphony of flavors that dance on your palate. Whether you're craving a traditional pie or feeling adventurous with our unique specialties, every bite is a testament to our dedication to quality and taste. From the crisp crust to the melty cheese and flavorful toppings, our pizzas are crafted to perfection, leaving you craving more with every slice.
          </Col>
          <Col md={6}>
          Meet the mastermind behind the magic at Pizza Virus: our visionary chef. With a passion for culinary innovation and a keen eye for detail, our chef is the driving force behind our menu's creativity and authenticity. Drawing inspiration from both traditional recipes and cutting-edge techniques, our chef transforms simple ingredients into culinary masterpieces that delight the senses. With a blend of skill, passion, and a sprinkle of magic, our chef ensures that every pizza that leaves our kitchen is a work of art, made with love and served with pride.
          <br/>
          <br/>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
