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
              <p>Locations:</p>
            </div>
            <aside>
              <div>
                <strong>Abuja Office</strong>
                <p>Suite 3</p>
                <p>6th Floor Nusaiba Towers Plot</p>
                <p>117 Ahmadu Bello Way, FCT.</p>
              </div>
              <div>
                <strong>Owerri Office</strong>
                <p>Shop #3 The Sun Place</p>
                <p>Industrial Cluster Road, Naze</p>
                <p>Owerri, Imo State.</p>
              </div>
              <div>
                <strong>Lagos Office</strong>
                <p>B195 Electronics Font Line, Ojo</p>
                <p>Alaba Int’l Market, Lagos State.</p>
              </div>
              <div>
                <strong>Port Harcourt Office</strong>
                <p>#22 Okija St. DLine Port</p>
                <p>Harcourt, Rivers State.</p>
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
              <a href="mailto:mail@gmail.com">smithagefx@gmail.com</a>
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
              <a href="tel:+ 9034688749">9034688749</a>
              <a href="tel:+ 9034688749">9034688749</a>
            </aside>
          </section>
        </div>
      </motion.section>
    </>
  );
};

export default ContactDetails;
