import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email";
    if (!formData.subject) newErrors.subject = "Subject is required";
    if (!formData.message) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);
    setTimeout(() => {
      alert("Form submitted successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setLoading(false);
    }, 1500);
  };

  const Input = ({ label, name, type = "text" }) => (
    <div className="relative w-full">
      <input
        type={type}
        name={name}
        value={formData[name]}
        onChange={handleChange}
        className={`peer w-full px-4 pt-6 pb-2 text-base text-gray-800 bg-white border rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
          errors[name] ? "border-red-500" : "border-gray-300"
        }`}
        placeholder=" "
      />
      <label
        htmlFor={name}
        className="absolute left-4 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-indigo-600"
      >
        {label}
      </label>
      {errors[name] && <p className="text-sm text-red-500 mt-1">{errors[name]}</p>}
    </div>
  );

  return (
    <section className="bg-gradient-to-br from-black to-purple-900 py-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-white">Contact Us</h2>
          <p className="text-gray-200 mt-2">We’d love to hear from you. Let's talk!</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 space-y-5"
          >
            <Input name="name" label="Name" />
            <Input name="email" label="Email" type="email" />
            <Input name="subject" label="Subject" />

            <div className="relative">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className={`peer w-full px-4 pt-6 pb-2 text-base text-gray-800 bg-white border rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                  errors.message ? "border-red-500" : "border-gray-300"
                }`}
                placeholder=" "
              />
              <label
                htmlFor="message"
                className="absolute left-4 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-indigo-600"
              >
                Message
              </label>
              {errors.message && <p className="text-sm text-red-500 mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-first hover:bg-second text-white font-semibold py-3 rounded-md transition duration-300"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4 text-gray-200">
              <Mail className="text-first" />
              <div>
                <p className="text-sm font-medium">Email</p>
                <p className="text-base">info@example.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-white">
              <Phone className="text-first" />
              <div>
                <p className="text-sm font-medium">Phone</p>
                <p className="text-base">+1 234 567 890</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-white">
              <MapPin className="text-first" />
              <div>
                <p className="text-sm font-medium">Address</p>
                <p className="text-base">123 Street, City, Country</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
