// src/components/Contact.js
import React from "react";

const Contact = () => {
  return (
    <section className="bg-gray-900 py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <label className="block mb-2">Full Name</label>
            <input type="text" className="w-full px-4 py-2 border rounded-md" />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Email Address</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Message</label>
            <textarea className="w-full px-4 py-2 border rounded-md"></textarea>
          </div>
          <button className="bg-black text-white py-2 px-4 rounded">
            Get in Touch
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
