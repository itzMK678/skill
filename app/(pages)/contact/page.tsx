'use client';

import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: '',
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., validation or sending to API)
    console.log(formData);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Map Section */}
      <div className="relative w-full">
        <iframe
          className="w-full h-[350px] grayscale-[60%] contrast-[120%] brightness-[80%]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54444.25661271719!2d74.28442486062039!3d31.475621500000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190427235b67ed%3A0x80c2ec5016353f7d!2sInformation%20Technology%20University%20(ITU)!5e0!3m2!1sen!2s!4v1752662795470!5m2!1sen!2s"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        {/* Floating Heading */}
       <p
  className="absolute top-[270px] left-1/2 -translate-x-1/2 z-10 font-black text-white whitespace-nowrap"
  style={{
    fontSize: 'clamp(1.75rem, 8vw, 90px)', // Shrinks sooner to avoid wrap
    textShadow:
      '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000',
  }}
>
  Contact-Us
</p>


      </div>

      {/* Form Section */}
      <div className='mb-10'>
      <form 
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto mt-24 p-6 bg-white rounded-xl shadow-xl border border-white/30 space-y-5"
      >
        {['name', 'email', 'subject'].map((field) => (
          <div key={field} className="relative w-full">
            <input
              id={field}
              type={field === 'email' ? 'email' : 'text'}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              className={`peer w-full px-4 pt-6 pb-2 text-base text-black placeholder-white/70 bg-white/10 backdrop-blur-sm border rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-pink-400 ${
                errors[field] ? 'border-red-500' : 'border-black/20'
              }`}
              placeholder=" "
            />
            <label
              htmlFor={field}
              className="absolute left-4 top-2 text-sm text-black/70 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-black/40 peer-focus:top-2 peer-focus:text-sm peer-focus:text-pink-400"
            >
              {field.charAt(0).toUpperCase() + field.slice(1)}
            </label>
          </div>
        ))}

        <div className="relative w-full space-x-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-4 text-white">
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            className={`peer w-full px-4 pt-6 pb-2 text-base text-black placeholder-white/70 bg-white/10 backdrop-blur-sm border rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-pink-400 ${
              errors.message ? 'border-red-500' : 'border-black/20'
            }`}
            placeholder=" "
          />
          <label
            htmlFor="message"
            className="absolute left-4 top-2 text-sm text-black/70 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-black/40 peer-focus:top-2 peer-focus:text-sm peer-focus:text-pink-400"
          >
            Message
          </label>
        </div>

        {/* Submit Button */}
        <div className="text-center pt-2">
          <button
            type="submit"
            className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-6 rounded-lg transition duration-300"
          >
            Send Message
          </button>
        </div>
      </form>
   <div className=" pt-[105px] w-full flex gap-[20px] flex-wrap items-center justify-center">
  {/* Phone */}
  <div className="-mt-[35px] w-[70px] h-[70px] rounded-full bg-green-500 flex items-center justify-center transition-all duration-300 group hover:bg-gradient-to-tr from-pink-500 to-purple-600 cursor-pointer hover:mt-[1px]">
    <a href="tel:+1234567890" className="transition duration-300" aria-label="Call">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" className="w-12 h-12 transition duration-300 group-hover:stroke-green-500">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.6a1 1 0 011 .76l1.2 4.8a1 1 0 01-.3.96L9.24 11.4a11.042 11.042 0 005.36 5.36l1.88-1.26a1 1 0 01.96-.3l4.8 1.2a1 1 0 01.76 1V19a2 2 0 01-2 2h-1C9.94 21 3 14.06 3 5v0z" />
      </svg>
    </a>
  </div>

  {/* Email */}
  <div className="w-[74px] h-[74px] rounded-full bg-yellow-500 flex items-center justify-center transition-all duration-300 group hover:bg-gradient-to-tr from-pink-500 to-purple-600 cursor-pointer hover:-mt-[35px]">
    <a href="mailto:you@example.com" className="transition duration-300" aria-label="Email">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" className="w-12 h-12 transition duration-300 group-hover:stroke-yellow-500">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 4H8a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4V8a4 4 0 00-4-4zM4 8l8 5 8-5" />
      </svg>
    </a>
  </div>

  {/* GitHub */}
  <div className="-mt-[35px] w-[74px] h-[74px] rounded-full bg-gray-800 flex items-center justify-center transition-all duration-300 group hover:bg-gradient-to-tr from-pink-500 to-purple-600 cursor-pointer hover:mt-[1px]">
    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="transition duration-300" aria-label="GitHub">
      <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" className="w-12 h-12 transition duration-300 group-hover:fill-black">
        <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.09 3.29 9.41 7.85 10.94.57.1.78-.25.78-.56v-2.04c-3.19.69-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.04-.7.08-.68.08-.68 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.67 1.24 3.32.95.1-.74.4-1.24.72-1.52-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.3 1.17-3.11-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.14 1.18a10.86 10.86 0 015.72 0c2.18-1.49 3.14-1.18 3.14-1.18.63 1.57.24 2.73.12 3.02.72.81 1.16 1.85 1.16 3.11 0 4.43-2.68 5.4-5.24 5.69.42.36.78 1.08.78 2.18v3.23c0 .31.21.67.79.56A10.52 10.52 0 0023.5 12C23.5 5.74 18.27.5 12 .5z"/>
      </svg>
    </a>
  </div>

  {/* LinkedIn */}
  <div className="w-[74px] h-[74px] rounded-full bg-blue-400 flex items-center justify-center transition-all duration-300 group hover:bg-gradient-to-tr from-pink-500 to-purple-600 cursor-pointer hover:-mt-[35px]">
    <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="transition duration-300" aria-label="LinkedIn">
      <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" className="w-12 h-12transition duration-300 group-hover:fill-[#0A66C2]">
        <path d="M20.45 20.45h-3.555v-5.504c0-1.313-.024-3.006-1.832-3.006-1.834 0-2.115 1.431-2.115 2.91v5.6H9.395V9h3.415v1.56h.05c.476-.9 1.636-1.846 3.366-1.846 3.6 0 4.266 2.37 4.266 5.448v6.283zM5.337 7.433a2.064 2.064 0 112.064-2.065 2.065 2.065 0 01-2.064 2.065zm1.78 13.017H3.555V9h3.562v11.45zM22.225 0H1.771A1.771 1.771 0 000 1.771v20.451A1.771 1.771 0 001.771 24h20.451A1.771 1.771 0 0024 22.223V1.771A1.771 1.771 0 0022.225 0z" />
      </svg>
    </a>
  </div>
</div>
</div>
    </div>
  );
};

export default ContactPage;
