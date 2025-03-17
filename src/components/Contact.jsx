import React from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "2ef6f9b1-22f5-4e14-98d0-2dc777071b1f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form submitted successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
      setResult("");
    }
  };

  return (
    <motion.div
      className="w-full max-w-[81.25rem] px-4"
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <div className="text-center w-full overflow-hidden">
        <h1 className="text-2xl sm:text-5xl font-bold mb-8 text-center">
          Contact{" "}
          <span className="font-light underline underline-offset-4 under decoration-1">
            With us
          </span>
        </h1>
        <p className="text-center text-gray-500 mb-12 max-w-80 font-[1.125rem] mx-auto">
          Ready to make a move? Let's get you your dream home.
        </p>

        {/* form */}

        <form
          className="max-w-2xl mx-auto text-gray-600 pt-8"
          onSubmit={onSubmit}
        >
          <div className="flex flex-wrap gap-4">
            <div className="w-full md:w-1/2 text-left flex-1">
              Your name
              <input
                type="text"
                placeholder="Enter your name"
                required
                className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
                name="Name"
              />
            </div>
            <div className="w-full md:w-1/2 text-left flex-1">
              Your email
              <input
                type="email"
                placeholder="Enter your email address"
                required
                className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
                name="Email"
              />
            </div>
          </div>
          {/* text area */}
          <div className="text-left mt-4">
            Message
            <textarea
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none"
              name="Message"
              placeholder="Write your message"
              required
            ></textarea>
          </div>
          {/* submit button */}
          <button className="bg-blue-600 text-white py-2 px-12 mt-10 rounded w-full">
            {result ? result : "Send Message"}
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
