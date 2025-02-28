import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.subject) newErrors.subject = 'Subject is required';
    if (!formData.message) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Form submitted successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  };

  return (
    <div className="bg-gradient-to-r from-purple-600 to-indigo-600 py-24">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-extrabold text-white mb-12">Get In Touch</h2>
        <div className="flex flex-wrap justify-between space-x-8">
          {/* Left side for contact form */}
          <form
            onSubmit={handleSubmit}
            className="w-full sm:w-1/2 lg:w-1/2 bg-white p-8 rounded-xl shadow-lg transform transition-transform duration-500 hover:scale-105"
          >
            <div className="mb-6">
              <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-300"
                placeholder="Your Full Name"
              />
              {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name}</p>}
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-300"
                placeholder="Your Email Address"
              />
              {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email}</p>}
            </div>

            <div className="mb-6">
              <label htmlFor="subject" className="block text-lg font-medium text-gray-700 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-300"
                placeholder="Subject of Your Message"
              />
              {errors.subject && <p className="text-red-500 text-sm mt-2">{errors.subject}</p>}
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-lg font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-300"
                placeholder="Your Message"
                rows="6"
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm mt-2">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold py-4 rounded-lg shadow-lg hover:from-purple-600 hover:to-indigo-600 focus:outline-none transition duration-300"
            >
              Send Message
            </button>
          </form>

          {/* Right side for contact details */}
          <div className="w-full sm:w-1/2 lg:w-1/2 bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Contact Details</h3>
            <p className="text-lg text-gray-700 mb-2">
              <strong>Email:</strong> <span className="text-purple-600">info@example.com</span>
            </p>
            <p className="text-lg text-gray-700 mb-2">
              <strong>Phone:</strong> <span className="text-purple-600">+1 234 567 890</span>
            </p>
            <p className="text-lg text-gray-700">
              <strong>Address:</strong> 123 Street, City, Country
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
