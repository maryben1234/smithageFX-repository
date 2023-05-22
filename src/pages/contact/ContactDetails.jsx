import React from "react";
import { motion } from "framer-motion";
import { CiLocationOn } from "react-icons/ci";
import { GoMail } from "react-icons/go";
import { BsPhone } from "react-icons/bs";

const ContactDetails = () => {
  return (
    <>
      <motion.section
        className="wrapper"
        initial={{ y: "60", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, type: "tween" }}
      >
        <div className="wrapper__elem">
          <section className="wrapper__elem--itemOne">
            <div>
              <div>
                <CiLocationOn />
              </div>
              <p>Location:</p>
            </div>
            <aside>
              <div>
                <strong>Office</strong>
                <p>
                 43 Brooks Street, Uyo, Akwa Ibom State
                </p>
              </div>
            </aside>
          </section>
          <section className="wrapper__elem--itemTwo">
            <div>
              <div>
                <GoMail />
              </div>
              <p>Email:</p>
            </div>
            <aside>
              <a href="mailto:maryben698@gmail.com">smithagecorporation@gmail.com</a>
            </aside>
          </section>
          <section className="wrapper__elem--itemThree">
            <div>
              <div>
                <BsPhone />
              </div>
              <p>Call:</p>
            </div>
            <aside>
              <a href="tel:+ 8068482653">08068482653</a>
             
            </aside>
          </section>
        </div>
      </motion.section>
    </>
  );
};

export default ContactDetails;
