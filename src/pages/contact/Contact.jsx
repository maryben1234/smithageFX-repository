import React from "react";
import "./contact.css";
import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";
import Layout from "../../components/layout/Layout";
import TopTab from "./TopTab";

const Contact = () => {
  return (
    <Layout>
      <TopTab />
      <ContactDetails />
      <ContactForm />
    </Layout>
  );
};

export default Contact;
