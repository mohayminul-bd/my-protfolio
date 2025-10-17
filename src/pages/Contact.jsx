import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-purple-50 to-white py-16 px-6 md:px-20"
    >
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-3">
          📞 Get in <span className="text-purple-600">Touch</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Feel free to reach out for collaborations, project inquiries, or just
          a friendly chat. I’d love to connect with you!
        </p>
      </div>

      {/* Contact Section */}
      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {/* Left Side - Contact Info */}
        <div className="bg-white rounded-2xl shadow-lg p-8 text-left space-y-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Contact Information
          </h3>

          <div className="flex items-center gap-3">
            <Mail className="text-purple-600 w-5 h-5" />
            <p className="text-gray-700">mohayminulislam514@gmail.com</p>
          </div>

          <div className="flex items-center gap-3">
            <Phone className="text-purple-600 w-5 h-5" />
            <p className="text-gray-700">+880 1325-440591</p>
          </div>

          <div className="flex items-center gap-3">
            <MapPin className="text-purple-600 w-5 h-5" />
            <p className="text-gray-700">Dhaka, Bangladesh</p>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <form
          action="#"
          className="bg-white rounded-2xl shadow-lg p-8 space-y-5 text-left"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Send Me a Message
          </h3>

          <div>
            <label className="block text-gray-600 mb-2 font-medium">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-2 font-medium">
              Your Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-2 font-medium">
              Message
            </label>
            <textarea
              placeholder="Write your message..."
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 outline-none"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white font-semibold py-2 rounded-lg flex justify-center items-center gap-2 hover:bg-purple-700 transition"
          >
            <Send className="w-4 h-4" /> Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
