



import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { motion } from "framer-motion";

const Form = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");
     const name = e.target.name.value;
     const phone = e.target.phone.value;
     const email = e.target.email.value;
     const message = e.target.message.value;


    emailjs
      .sendForm(
        "service_jxynl1d", // Replace with your Service ID
        "template_1i4imrq", // Replace with your Template ID
        form.current,
        "YeL67WPXP4g3tL31N" // Replace with your Public Key
      )
      .then(
        () => {
          setStatus("");
          form.current.reset();
          Swal.fire({
            title: "✅ Success!",
            text: "Your message has been sent successfully.",
            icon: "success",
            confirmButtonColor: "#6d28d9",
          });
        },
        (error) => {
          console.error("FAILED...", error.text);
          setStatus("");
          Swal.fire({
            title: "❌ Failed!",
            text: "Something went wrong. Please try again.",
            icon: "error",
            confirmButtonColor: "#ef4444",
          });
        }
      );
  };

  return (
    <motion.form
      onSubmit={sendEmail}
      className="space-y-6 w-full max-w-2xl mx-auto bg-gradient-to-br from-violet-700/50 to-yellow-400/20 p-8 rounded-2xl shadow-2xl border border-yellow-500/40"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2 className="text-2xl font-bold text-center text-yellow-400">
        Contact Me ✨
      </h2>

      <div>
        <input
          name="name"
          className="w-full rounded-lg border border-yellow-500 bg-black/30 p-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300"
          placeholder="Name"
          type="text"
          required
        />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <input
          name="email"
          className="w-full rounded-lg border border-yellow-500 bg-black/30 p-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300"
          placeholder="Email address"
          type="email"
          required
        />
        <input
          name="phone"
          className="w-full rounded-lg border border-yellow-500 bg-black/30 p-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300"
          placeholder="Phone Number"
          type="tel"
        />
      </div>

      <textarea
        name="message"
        className="w-full rounded-lg border border-yellow-500 bg-black/30 p-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300"
        placeholder="Message"
        rows="6"
        required
      ></textarea>

      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <button
          type="submit"
          className="px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-lg font-medium hover:from-violet-700 hover:to-purple-700 transition-all shadow-lg"
        >
          Send Message
        </button>
      </motion.div>

      {status && (
        <p className="text-sm mt-2 text-center text-yellow-400 animate-pulse">
          {status}
        </p>
      )}
    </motion.form>
  );
};

export default Form;
