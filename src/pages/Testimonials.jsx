// src/components/Testimonials.js
import React from "react";

const Testimonials = () => {
  return (
    <section className="bg-slate-900 py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Testimonials</h2>
        <div className="text-center">
          <p className="text-xl italic">
            {`Wonderful team, great service and always available to answer any &quot
            queries. I always recommend them to my friends.`}
          </p>
          <p className="mt-4">- David, Marketing Manager</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
