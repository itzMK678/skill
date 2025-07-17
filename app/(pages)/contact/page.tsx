'use client';

import React, { useState } from 'react';

type FormErrors = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: FormErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log('Sending form data:', formData);
      // Optionally reset form
      // setFormData({ name: '', email: '', subject: '', message: '' });
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Map Section */}
      <div className="relative w-full">
        <iframe
          className="w-full h-[350px] grayscale-[60%] contrast-[120%] brightness-[80%]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54444.25661271719!2d74.28442486062039!3d31.475621500000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190427235b67ed%3A0x80c2ec5016353f7d!2sInformation%20Technology%20University%20(ITU)!5e0!3m2!1sen!2s!4v1752662795470!5m2!1sen!2s"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        {/* Floating Heading */}
        <p
          className="absolute top-[270px] left-1/2 -translate-x-1/2 z-10 font-black text-white whitespace-nowrap"
          style={{
            fontSize: 'clamp(1.75rem, 8vw, 90px)',
            textShadow: '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000',
          }}
        >
          Contact-Us
        </p>
      </div>

      {/* Form Section */}
      <div className="mb-10">
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
                value={formData[field as keyof typeof formData]}
                onChange={handleChange}
                className={`peer w-full px-4 pt-6 pb-2 text-base text-black placeholder-white/70 bg-white/10 backdrop-blur-sm border rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-pink-400 ${
                  errors[field as keyof FormErrors] ? 'border-red-500' : 'border-black/20'
                }`}
                placeholder=" "
              />
              <label
                htmlFor={field}
                className="absolute left-4 top-2 text-sm text-black/70 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-black/40 peer-focus:top-2 peer-focus:text-sm peer-focus:text-pink-400"
              >
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              {errors[field as keyof FormErrors] && (
                <p className="text-red-500 text-sm mt-1">{errors[field as keyof FormErrors]}</p>
              )}
            </div>
          ))}

          {/* Message Field */}
          <div className="relative w-full bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-4 text-white">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
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
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
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

        {/* Contact Icons */}
        <div className="pt-[105px] w-full flex gap-[20px] flex-wrap items-center justify-center">
          {/* Phone */}
          <div className="-mt-[35px] w-[70px] h-[70px] rounded-full bg-green-500 flex items-center justify-center transition-all duration-300 group hover:bg-gradient-to-tr from-pink-500 to-purple-600 cursor-pointer hover:mt-[1px]">
            <a href="tel:+1234567890" aria-label="Call">
              📞
            </a>
          </div>

          {/* Email */}
          <div className="w-[74px] h-[74px] rounded-full bg-yellow-500 flex items-center justify-center transition-all duration-300 group hover:bg-gradient-to-tr from-pink-500 to-purple-600 cursor-pointer hover:-mt-[35px]">
            <a href="mailto:you@example.com" aria-label="Email">
              ✉️
            </a>
          </div>

          {/* GitHub */}
          <div className="-mt-[35px] w-[74px] h-[74px] rounded-full bg-gray-800 flex items-center justify-center transition-all duration-300 group hover:bg-gradient-to-tr from-pink-500 to-purple-600 cursor-pointer hover:mt-[1px]">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              🐱
            </a>
          </div>

          {/* LinkedIn */}
          <div className="w-[74px] h-[74px] rounded-full bg-blue-400 flex items-center justify-center transition-all duration-300 group hover:bg-gradient-to-tr from-pink-500 to-purple-600 cursor-pointer hover:-mt-[35px]">
            <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              💼
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
