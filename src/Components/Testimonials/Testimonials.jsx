import React from 'react';

const testimonials = [
  {
    name: "Emma Rodriguez",
    image: "https://i.ibb.co/9k03gKQ0/user-1.jpg",
    quote:
      "Plantify completely transformed the way I care for my indoor plants. The reminders and care tips are so helpful—my home has never felt greener!",
  },
  {
    name: "Sophia Bennett",
    image: "https://i.ibb.co/tpSzyq4J/user-3.jpg",
    quote:
      "I love how easy Plantify makes it to discover new plants and keep them alive. It’s like having a personal botanist in your pocket!",
  },
  {
    name: "Liam Turner",
    image: "https://i.ibb.co/pjpp0bdZ/user-2.jpg",
    quote:
      "As someone new to plant parenting, Plantify made it simple. Their curated plant guides and marketplace are fantastic. Highly recommended!",
  }
];

function Testimonials() {
  return (
    <div className="py-24 px-6 md:px-8 bg-neutral-100 dark:bg-neutral-900">
      <h2 className="text-center text-4xl font-bold text-neutral-900 dark:text-neutral-100">
        What Our Users Say
      </h2>
      <p className="text-center mt-3 text-xl text-neutral-800 dark:text-neutral-300">
        Real experiences from real users who’ve grown with us.
      </p>
      <div className="w-11/12 mx-auto grid gap-6 md:grid-cols-3 mt-15">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white dark:bg-neutral-800 shadow-lg rounded-2xl p-15"
          >
            <div className="flex justify-center mb-6">
              <div className="avatar">
                <div className="w-24 rounded-full ring-2 ring-offset-2 ring-gray-300 dark:ring-gray-700">
                  <img src={testimonial.image} alt={testimonial.name} />
                </div>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-base mb-4 italic">
              "{testimonial.quote}"
            </p>
            <h4 className="font-semibold text-lg text-right text-neutral-900 dark:text-neutral-100">
              – {testimonial.name}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
