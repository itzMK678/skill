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
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
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
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <section className="bg-gradient-to-b from-black via-indigo-800 to-purple-500  py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-white">Contact Us</h2>
          <p className="text-gray-200 mt-2">We’d love to hear from you. Let's talk!</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="shadow-sm border border-white/20 space-y-5 bg-white/10 backdrop-blur-lg rounded-lg p-6"
          >
            {["name", "email", "subject"].map((field) => (
              <div key={field} className="relative w-full">
                <input
                  id={field}
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className={`peer w-full px-4 pt-6 pb-2 text-base text-white placeholder-white/70 bg-white/10 backdrop-blur-md border rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                    errors[field] ? "border-red-500" : "border-white/30"
                  }`}
                  placeholder=" "
                />
                <label
                  htmlFor={field}
                  className="absolute left-4 top-2 text-sm text-white/80 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/50 peer-focus:top-2 peer-focus:text-sm peer-focus:text-indigo-300"
                >
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                {errors[field] && (
                  <p className="text-sm text-red-500 mt-1">{errors[field]}</p>
                )}
              </div>
            ))}

            {/* Message textarea */}
            <div className="relative w-full">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className={`peer w-full px-4 pt-6 pb-2 text-base text-white placeholder-white/70 bg-white/10 backdrop-blur-md border rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                  errors.message ? "border-red-500" : "border-white/30"
                }`}
                placeholder=" "
              />
              <label
                htmlFor="message"
                className="absolute left-4 top-2 text-sm text-white/80 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/50 peer-focus:top-2 peer-focus:text-sm peer-focus:text-indigo-300"
              >
                Message
              </label>
              {errors.message && <p className="text-sm text-red-500 mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-first hover:bg-purple-900 text-white font-semibold py-3 rounded-md transition duration-300"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>

          {/* Contact Info Boxes */}
          <div className="space-y-6">
            {/* Email Box */}
            <div className="cursor-pointer flex items-center space-x-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-4 text-white">
              <Mail />
              <div>
                <p className="text-sm font-medium">Email</p>
                <a href="mailto:info@example.com" target="_blank" rel="noopener noreferrer">
                  <p className="text-base">info@example.com</p>
                </a>
              </div>
            </div>

            {/* Phone Box */}
            <div className="cursor-pointer flex items-center space-x-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-4 text-white">
              <Phone />
              <div>
                <p className="text-sm font-medium">Phone</p>
                <a href="tel:+1234567890">
                  <p className="text-base">+1 234 567 890</p>
                </a>
              </div>
            </div>

            {/* Address Box */}
            <div className="cursor-pointer flex items-center space-x-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-4 text-white">
              <MapPin />
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
