import React from "react";
import { motion } from "framer-motion";
import "./contact.css";

const Contact = () => {
  return (
    <div>
      <motion.section
        className="wrapper"
        initial={{ y: "60", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2, type: "tween" }}
      >
        <div className="wrapper__elem">
          <section className="wrapper__elem--itemOne">
            <div>
              <div>changeMe</div>
              <p>Location</p>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
              enim consequatur dolor fuga iure ab sequi ex aperiam, quas fugit?
            </p>
          </section>
          <section className="wrapper__elem--itemTwo">
            <div>
              <div>changeMe</div>
              <p>Location</p>
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
              exercitationem minima excepturi veritatis obcaecati natus vel
              aperiam, sit in autem.
            </p>
          </section>
          <section className="wrapper__elem--itemThree">
            <div>
              <div>changeMe</div>
              <p>Location</p>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              cupiditate iste nulla nam quisquam ad quia dolores, accusamus
              officia ullam!
            </p>
          </section>
        </div>
      </motion.section>
    </div>
  );
};

export default Contact;
