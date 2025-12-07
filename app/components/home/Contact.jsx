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
    <section className="bg-black py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-6xl font-semibold text-white"style={{ textShadow: '2px 2px #6b21a8' }}>Contact Us</h2>
          <p className="text-white/80 mt-2">We’d love to hear from you. Let's talk!</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="pb-10">
            <form
              onSubmit={handleSubmit}
              className="max-w-2xl mx-auto  p-6 bg-purple-900/20 backdrop-blur-md rounded-xl shadow-lg border border-purple-800 space-y-5"
            >
              {["name", "email", "subject"].map((field) => (
                <div key={field} className="relative w-full">
                  <input
                    id={field}
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    className={`peer w-full px-4 pt-6 pb-2 text-base text-white placeholder-white/30 bg-purple-900/20 backdrop-blur-sm border rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-purple-400 ${
                      errors[field] ? "border-red-500" : "border-purple-800"
                    }`}
                    placeholder=""
                  />
                  <label
                    htmlFor={field}
                    className="absolute left-4 top-2 text-sm text-white/30 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-black/40 peer-focus:top-2 peer-focus:text-sm peer-focus:text-purple-400"
                  >
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  {errors[field] && (
                    <p className="text-red-500 text-sm mt-1">{errors[field]}</p>
                  )}
                </div>
              ))}

           {/* Message Field */}
<div className="relative w-full">
  <textarea
    id="message"
    name="message"
    value={formData.message}
    onChange={handleChange}
    rows={5}
    className={`peer w-full px-4 pt-6 pb-2 text-base text-white placeholder-white/30 
      bg-purple-900/20 backdrop-blur-sm border rounded-md appearance-none 
      focus:outline-none focus:ring-2 focus:ring-purple-400 
      ${errors.message ? "border-red-500" : "border-purple-800"}`}
    placeholder=""
  />
  <label
    htmlFor="message"
    className="absolute left-4 top-2 text-sm text-white/30 transition-all 
      peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-black/40 
      peer-focus:top-2 peer-focus:text-sm peer-focus:text-purple-400"
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
                  disabled={loading}
                  className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-6 rounded-lg transition duration-300"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>



          {/* Contact Info Boxes */}
          <div className="space-y-6">
            {/* Email Box */}
            <div className="cursor-pointer flex items-center space-x-4 backdrop-blur-lg border bg-purple-900/20 border-purple-800 rounded-lg p-4 text-white">
              <Mail />
              <div>
                <p className="text-sm font-medium text-white/80">Email</p>
                <a href="mailto:info@skillcreatives.com" target="_blank" rel="noopener noreferrer">
                  <p className="text-base">info@skillcreatives.com</p>
                </a>
              </div>
            </div>

            {/* Phone Box */}
            <div className="cursor-pointer flex items-center space-x-4 bg-purple-900/20 backdrop-blur-lg border border-purple-800 rounded-lg p-4 text-white">
              <Phone />
              <div>
                <p className="text-sm font-medium text-white/80">Phone</p>
                <a href="tel:+92 3088145270">
                  <p className="text-base">+92 3088145270</p>
                </a>
              </div>
            </div>

            {/* Address Box */}
            <div className="cursor-pointer flex items-center space-x-4 bg-purple-900/20 backdrop-blur-lg border border-purple-800 rounded-lg p-4 text-white">
              <MapPin />
              <div>
                <p className="text-sm font-medium text-white/80">Address</p>
                <p className="text-base">Punjab, Pakistan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
