import React from "react";
import Slider from "react-slick";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Testimonial data
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

const CustomPrevArrow = ({ onClick }) => (
  <button className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 text-white text-3xl p-2 bg-gray-800 rounded-full shadow-lg" onClick={onClick}>
    <FaChevronLeft />
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white text-3xl p-2 bg-gray-800 rounded-full shadow-lg" onClick={onClick}>
    <FaChevronRight />
  </button>
);

const Review = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />
  };

  return (
    <div className="bg-black py-24 relative">
      <div className="container px-6 mx-auto text-center">
        <h2 className="text-5xl font-extrabold text-white mb-12">
          What Our Clients Say
        </h2>
        <div className="max-w-2xl mx-auto relative">
          <Slider {...settings}>
            {reviews.map((review) => (
              <div key={review.id} className="p-6">
                <div className="bg-gradient-to-br from-purple-600 to-purple-800 p-6 rounded-xl shadow-lg border border-gray-700">
                  <div className="mb-6">
                    <img
                      className="w-16 h-16 mx-auto rounded-full border-4 border-white shadow-md"
                      src={review.image}
                      alt={review.name}
                    />
                    <p className="text-2xl font-bold text-white mt-4">{review.name}</p>
                    <p className="text-gray-300 text-sm">{review.position}</p>
                  </div>
                  <div className="mb-6 flex justify-center">
                    <span className="text-yellow-500 flex gap-1">
                      {[...Array(review.rating)].map((_, index) => (
                        <FaStar key={index} className="w-5 h-5" />
                      ))}
                    </span>
                  </div>
                  <p className="text-sm text-gray-200 leading-relaxed">{review.text}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Review;