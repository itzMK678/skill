import React from 'react';
import { FaStar } from 'react-icons/fa';

// Testimonial data in an object array
const reviews = [
  {
    id: 1,
    name: "John Doe",
    position: "CEO at Company XYZ",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    text: "The team at this digital marketing agency has helped us increase our revenue by over 50% in just a few months. Their strategies are highly effective, and their communication is outstanding. Highly recommend!"
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Marketing Director at ABC Corp",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    text: "Working with this team has been an absolute pleasure. They have a deep understanding of digital marketing and always go above and beyond to ensure our success. Our social media presence has grown significantly."
  },
  {
    id: 3,
    name: "Michael Brown",
    position: "Founder at Startup Lab",
    image: "https://randomuser.me/api/portraits/men/58.jpg",
    rating: 5,
    text: "I can’t say enough good things about this team. Their work has helped us generate more leads and establish our brand as a leader in the industry. I look forward to working with them on future projects."
  }
];

const Review = () => {
  return (
    <div className="bg-gradient-to-br from-black via-purple-800 to-black py-24">
      <div className="container px-6 mx-auto text-center">
        <h2 className="text-5xl font-extrabold text-white mb-12">
          What Our Clients Say
        </h2>

        <div className="flex flex-wrap justify-center gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="w-full sm:w-1/2 lg:w-1/3 transform transition-transform duration-300 hover:scale-105"
            >
              <div className="bg-gradient-to-br from-purple-600 to-purple-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-700">
                <div className="mb-6">
                  <div className="flex justify-center">
                    <img
                      className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md"
                      src={review.image}
                      alt={review.name}
                    />
                  </div>
                  <p className="text-2xl font-bold text-white mt-4">
                    {review.name}
                  </p>
                  <p className="text-gray-300 text-sm">{review.position}</p>
                </div>
                <div className="mb-6 flex justify-center">
                  <span className="text-yellow-500 flex gap-1">
                    {[...Array(review.rating)].map((_, index) => (
                      <FaStar key={index} className="w-5 h-5" />
                    ))}
                  </span>
                </div>
                <p className="text-sm text-gray-200 leading-relaxed">
                  {review.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Review;
