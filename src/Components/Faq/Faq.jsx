import React from 'react';

const Faq = () => {
  return (
    <div className='w-11/12 mx-auto my-32'>
      <h1 className='text-center text-4xl font-bold'>FAQ</h1>
      <p className='text-xl text-center mt-3 mb-12'>Got questions? We've got answers!</p>

      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-lg font-semibold my-4">
          Q: How does Plantify help me take care of my plants?
        </div>
        <div className="collapse-content text-base">
          A: Plantify tracks each of your plants and gives personalized care reminders for watering, sunlight, and fertilizing—based on plant type and your local environment.
        </div>
      </div>

      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-lg font-semibold">
          Q: Can I get reminders for watering and fertilizing?
        </div>
        <div className="collapse-content text-base">
          A: Absolutely! You’ll receive smart notifications to remind you when it's time to water, fertilize, or check in on your plants' health.
        </div>
      </div>

      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-lg font-semibold">
          Q: Is there a way to identify plants with Plantify?
        </div>
        <div className="collapse-content text-base">
          A: Yes! Plantify includes a plant recognition feature that lets you snap a photo and identify plants instantly with helpful care tips.
        </div>
      </div>

      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-lg font-semibold">
          Q: Does Plantify support rare or exotic plants?
        </div>
        <div className="collapse-content text-base">
          A: We support a wide variety of plants, including many rare species. If you don’t find yours, you can add custom care details manually.
        </div>
      </div>

      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-lg font-semibold">
          Q: Can I use Plantify on multiple devices?
        </div>
        <div className="collapse-content text-base">
          A: Yes! Your account syncs across all devices so you can manage your plant collection from anywhere, anytime.
        </div>
      </div>
    </div>
  );
};

export default Faq;
