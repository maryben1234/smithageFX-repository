import React from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  return (
    <>
      <motion.section
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: "60", opacity: 0 }}
        transition={{ duration: 2, type: "tween" }}
        className="formWrapper"
      >
        <form>
          <div className="formWrapper__inputGrid">
            <input
              type="text"
              placeholder="Your Name"
              className="formWrapper__inputGrid--itemOne"
            />
            <input
              type="text"
              placeholder="Your Email"
              className="formWrapper__inputGrid--itemTwo"
            />
            <input
              type="text"
              placeholder="Subject"
              className="formWrapper__inputGrid--itemThree"
            />
          </div>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
        </form>
      </motion.section>
    </>
  );
};

export default ContactForm;
