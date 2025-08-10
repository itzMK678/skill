'use client';

import React, { useState, useEffect } from 'react';
import Loading from '../../components/Loading';
import { ref, push } from 'firebase/database';
import { db } from '../../lib/firebase';

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
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: FormErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        // Reference to the 'contacts' node in Firebase Realtime Database
        const contactsRef = ref(db, 'contacts');
        // Push form data to Firebase
        await push(contactsRef, {
          ...formData,
          timestamp: new Date().toISOString(),
        });

        setSubmitStatus('Message sent successfully!');
        // Reset form
        setFormData({ name: '', email: '', subject: '', message: '' });
      } catch (error) {
        console.error('Error sending form data:', error);
        setSubmitStatus('Failed to send message. Please try again.');
      }
    }
  };

  return (
    <div className="bg-black min-h-screen">
      {loading ? <Loading /> : null}
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
      <div className="pb-10">
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto mt-24 p-6 bg-purple-900/20 backdrop-blur-md rounded-xl shadow-lg border border-purple-800 space-y-5"
        >
          {['name', 'email', 'subject'].map((field) => (
            <div key={field} className="relative w-full">
              <input
                id={field}
                type={field === 'email' ? 'email' : 'text'}
                name={field}
                value={formData[field as keyof typeof formData]}
                onChange={handleChange}
                className={`peer w-full px-4 pt-6 pb-2 text-base text-white placeholder-white/30 bg-purple-900/20 backdrop-blur-sm border rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-purple-400 ${
                  errors[field as keyof FormErrors] ? 'border-red-500' : 'border-purple-800'
                }`}
                placeholder=" "
              />
              <label
                htmlFor={field}
                className="absolute left-4 top-2 text-sm text-white/30 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-black/40 peer-focus:top-2 peer-focus:text-sm peer-focus:text-purple-400"
              >
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              {errors[field as keyof FormErrors] && (
                <p className="text-red-500 text-sm mt-1">{errors[field as keyof FormErrors]}</p>
              )}
            </div>
          ))}

          {/* Message Field */}
          <div className="relative w-full bg-purple-900/20 backdrop-blur-lg border border-purple-800 rounded-lg text-white/30">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className={`peer w-full pt-6 pb-2 text-base text-white/30 placeholder-transparent bg-transparent border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 focus:text-white ${
                errors.message ? 'border-red-500' : 'border-white/30'
              }`}
              placeholder="Your message"
            />
            <label
              htmlFor="message"
              className="absolute left-4 top-2 text-sm text-white/30 transition-all duration-200 peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/40 peer-focus:top-2 peer-focus:text-sm peer-focus:text-purple-400 pointer-events-none"
            >
              Message
            </label>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          {/* Submit Status */}
          {submitStatus && (
            <p className={`text-center text-sm ${submitStatus.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>
              {submitStatus}
            </p>
          )}

          {/* Submit Button */}
          <div className="text-center pt-2">
            <button
              type="submit"
              className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-6 rounded-lg transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>

    
      </div>
    </div>
  );
};

export default ContactPage;