// src/components/Services.js
import React from "react";
import Testimonials from "./Testimonials";

const services = [
  {
    title: "Digital Marketing",
    description:
      "Unlock the full potential of your online presence with our comprehensive digital marketing solutions.",
  },
  {
    title: "Website Development",
    description:
      "Embark on digital journey with captivating online presence crafted by our expert website development team.",
  },
  // Add other services similarly
];

const Services = () => {
  return (
    <section className="py-20 ">
      <div className="container mx-auto mb-11">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 shadow-lg rounded-lg">
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Testimonials />
    </section>
  );
};

export default Services;
