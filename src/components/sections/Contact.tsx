import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

// import { EarthCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";

const INITIAL_STATE = Object.fromEntries(
  Object.keys(config.contact.form).map((input) => [input, ""])
);

const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  accessToken: import.meta.env.VITE_EMAILJS_ACCESS_TOKEN,
};

const Contact = () => {
  const formRef = useRef<React.LegacyRef<HTMLFormElement> | undefined>();
  const [form, setForm] = useState(INITIAL_STATE);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | undefined
  ) => {
    if (e === undefined) return;
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement> | undefined) => {
    if (e === undefined) return;
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          form_name: form.name,
          to_name: config.html.fullName,
          from_email: form.email,
          to_email: config.html.email,
          message: form.message,
        },
        emailjsConfig.accessToken
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm(INITIAL_STATE);
        },
        (error) => {
          setLoading(false);

          console.log(error);
          alert("Something went wrong.");
        }
      );
  };

  return (
    <div
      className={`flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="bg-black-100 flex-[0.75] rounded-2xl p-8"
      >
        <Header useMotion={false} {...config.contact} />

        <div className="container font-size:2rem">
            <p>
              <a aria-label="Call Akash"
                className="btn-floating btn-large waves-effect waves-light blue-grey tooltipped x"><i
                className="fa fa-phone"></i><a aria-label="Call Akash" className="hoverline text-xl px-2 py-1 mb-6">+91-7010429267</a></a>
            </p>
            <p>
              <a aria-label="Email Akash" href="mailto:akashkumar2113196.com" 
                className="btn-floating btn-large waves-effect waves-light blue-grey tooltipped"><i
                className="fa fa-envelope"></i><a aria-label="Email Akash" href="mailto:akashkumar2113196@gmail.com"
                className="hoverline text-xl px-2 py-1 mb-6">akash.kumar2113196@gmail.com</a></a>
            </p>
            <p>
              <a aria-label="View Akash on GitHub" href="https://github.com/indexedakki" 
                
                className="btn-floating btn-large waves-effect waves-light blue-grey tooltipped"><i
                className="fa fa-github"></i><a aria-label="Akash on Github" href="https://github.com/indexedakki"
                className="hoverline text-xl px-2 py-1 mb-6">https://github.com/indexedakki</a></a>
            </p>
            <p>
              <a aria-label="View Akash on LinkedIn" href="https://www.linkedin.com/in/akash-kumar-7951a2126/"
                className="btn-floating btn-large waves-effect waves-light blue-grey tooltipped"><i
                className="fa fa-linkedin"></i><a aria-label="Akash on LinkedIn"
                  href="https://www.linkedin.com/in/akash-kumar-7951a2126/" className="hoverline text-xl px-2 py-1 mb-6"
                >https://www.linkedin.com/in/akash-kumar-7951a2126/</a></a>
            </p>
          </div>
      </motion.div>

      
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
