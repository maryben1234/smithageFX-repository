import React, { useRef, useState, useEffect } from 'react';
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

const ContactForm = () => {

  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4o7q2dk', 'template_jftm4kj', form.current, 'lQHOYa1PaJrAc_U-X')
      .then((result) => {
        console.log(result.text);
        setStatus('SUCCESS');

      }, (error) => {
        console.log(error.text);
      });

    setTimeout(() => {
      e.target.reset();

    }, 2000);

  };

  useEffect(() => {
    if (status === 'SUCCESS') {
      setTimeout(() => {
        setStatus('');
      }, 3000);
    }
  }, [status]);


  return (
    <>
      <motion.section
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: "60", opacity: 0 }}
        transition={{ duration: 2, type: "tween" }}
        className="formWrapper"
      >
        <form ref={form} onSubmit={sendEmail}>
          {status && renderAlert()}
          <div className="formWrapper__inputGrid">
            <input
              type="text"
              placeholder="Your Name"
              className="formWrapper__inputGrid--itemOne"
              name="user_name"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="formWrapper__inputGrid--itemTwo"
              name="user_email"
              required
            />
            <input
              type="text"
              placeholder="Subject"
              className="formWrapper__inputGrid--itemThree"
              name="user_subject"
              required
            />
          </div>
          <textarea
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
            name="message"
            required
          ></textarea>

          <input
            type="submit"
            placeholder="Subject"
            value="Send"
            className="flex justify-center mx-auto mt-2 bg-[#4d7ada] hover:bg-[#a8d2dd] rounded-lg px-[4rem] py-2 text-white"
          />
        </form>
      </motion.section>
    </>
  );
};

const renderAlert = () => (
  <div className="px-4 py-3 leading-normal text-[green] bg-gray shadow rounded mb-5 text-center ">
    <p>Your message has been submitted successfully</p>
  </div>
)

export default ContactForm;

