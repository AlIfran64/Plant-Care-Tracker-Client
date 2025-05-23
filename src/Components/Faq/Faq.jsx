import React from 'react';

const Faq = () => {
  return (
    <div className="w-11/12 mx-auto my-32 bg-transparent">
      <h1 className="text-center text-4xl font-bold text-gray-900 dark:text-gray-200">FAQ</h1>
      <p className="text-xl text-center mt-3 mb-12 text-gray-700 dark:text-gray-300">
        Got questions? We've got answers!
      </p>

      {[
        {
          q: "How does Plantify help me take care of my plants?",
          a: "Plantify tracks each of your plants and gives personalized care reminders for watering, sunlight, and fertilizing—based on plant type and your local environment.",
          defaultChecked: true,
        },
        {
          q: "Can I get reminders for watering and fertilizing?",
          a: "Absolutely! You’ll receive smart notifications to remind you when it's time to water, fertilize, or check in on your plants' health.",
        },
        {
          q: "Is there a way to identify plants with Plantify?",
          a: "Yes! Plantify includes a plant recognition feature that lets you snap a photo and identify plants instantly with helpful care tips.",
        },
        {
          q: "Does Plantify support rare or exotic plants?",
          a: "We support a wide variety of plants, including many rare species. If you don’t find yours, you can add custom care details manually.",
        },
        {
          q: "Can I use Plantify on multiple devices?",
          a: "Yes! Your account syncs across all devices so you can manage your plant collection from anywhere, anytime.",
        },
      ].map(({ q, a, defaultChecked }, idx) => (
        <div
          key={idx}
          className="collapse collapse-arrow border border-gray-300 bg-white dark:bg-[#1D232A] dark:border-gray-700 rounded-md"
        >
          <input type="radio" name="my-accordion-2" defaultChecked={defaultChecked} />
          <div className="collapse-title text-lg font-semibold my-4 text-gray-900 dark:text-gray-200">{`Q: ${q}`}</div>
          <div className="collapse-content text-base text-gray-700 dark:text-gray-300">{`A: ${a}`}</div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
