
import React from "react";
import Slider from "react-slick";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Farhan from '../../public/reviewF.jpeg';
import Image from "next/image";
import Muneeb from '../../public/ReviewM.jpeg';
import Yahya from '../../public/reveiwY.jpeg';
// Testimonial data
const reviews = [
  {
    id: 1,
    name: "Farhan Muneer",
    position: "AL-Farooq Pizzas",
    image: Farhan ,
    rating: 5,
    text: "Working with this digital marketing team has completely transformed our pizza restaurant. Online orders skyrocketed within weeks, dine-in and delivery traffic increased noticeably, and their marketing strategies are perfectly designed for fast-food businesses like ours.The team at this digital marketing agency has helped us increase our revenue by over 50% in just a few months. Their strategies are highly effective, and their communication is outstanding. Highly recommend!"
  },

  {
    id: 2,
    name: "Muneeb Ur Rehman",
    position: "Owner of Health and Care Clinic",
    image: Muneeb ,
    rating: 5,
    text: "As the owner of Health and Care Clinic, partnering with this marketing team has significantly boosted our patient appointments and online inquiries. Their healthcare-focused strategies are practical, professional, and have helped us reach more patients effectively."
  },

  {
    id: 3,
    name: "Yahya Choudary",
    position: "CEO of Tech Solutions",
    image: Yahya ,
    rating: 4,
    text: "I can’t say enough good things about this team. Their marketing expertise has helped Tech Solutions generate high-quality leads and strengthen our brand as a leader in the tech industry. I look forward to collaborating with them on future projects."
  }
];

const CustomPrevArrow = ({ onClick }) => (
  <button
    className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 text-white text-3xl p-2 bg-purple-800 hover:bg-purple-700 rounded-full shadow-lg"
    onClick={onClick}
    aria-label="Previous"
  >
    <FaChevronLeft />
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button
    className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white text-3xl p-2 bg-purple-800 hover:bg-purple-700 rounded-full shadow-lg"
    onClick={onClick}
    aria-label="Next"
  >
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
    autoplaySpeed: 5000,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />
  };

  return (
    <div className="bg-black py-24 relative">
      <div className="container px-6 mx-auto text-center">
        <h2 className="text-5xl font-extrabold text-white mb-12">What Our Clients Say</h2>
        <div className="max-w-2xl mx-auto relative">
          <Slider {...settings}>
            {reviews.map((review) => (
              <div key={review.id} className="p-6">
                <div className="bg-gradient-to-br from-purple-700 via-purple-800 to-black p-6 rounded-xl shadow-lg border border-purple-900">
                  <div className="mb-6">
                  <Image
  src={review.image}
  alt={review.name}
  width={64}        
  height={64}       
  className="mx-auto rounded-full border-4 border-white shadow-md"
/>
                    <p className="text-2xl font-bold text-white mt-4">{review.name}</p>
                    <p className="text-purple-300 text-sm">{review.position}</p>
                  </div>
                  <div className="mb-6 flex justify-center">
                    <span className="text-yellow-500 flex gap-1">
                      {[...Array(review.rating)].map((_, index) => (
                        <FaStar key={index} className="w-5 h-5" />
                      ))}
                    </span>
                  </div>
                  <p className="text-sm text-purple-100 leading-relaxed">{review.text}</p>
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

