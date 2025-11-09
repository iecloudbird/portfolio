"use client";

import { useState } from "react";
import Section from "../ui/Section";
import HoldButton from "../ui/HoldButton";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = () => {
    const subject = encodeURIComponent(`Message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:sheanhans03@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="bg-white">
      <Section id="contact" className="py-20">
        <div className="w-full max-w-4xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
            Send me a message!
          </h2>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Whether it&apos;s a project idea or just to say hi, I&apos;d love to
            hear from you.
          </p>

          {/* Form */}
          <div className="space-y-8">
            {/* Name and Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Input */}
              <div className="text-left">
                <label className="block text-sm text-gray-500 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-0 py-3 border-b-2 border-gray-300 focus:border-[#cca300] outline-none bg-transparent text-black placeholder:text-gray-400 transition-colors"
                />
              </div>

              {/* Email Input */}
              <div className="text-left">
                <label className="block text-sm text-gray-500 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-0 py-3 border-b-2 border-gray-300 focus:border-[#cca300] outline-none bg-transparent text-black placeholder:text-gray-400 transition-colors"
                />
              </div>
            </div>

            {/* Message Textarea */}
            <div className="text-left">
              <label className="block text-sm text-gray-500 mb-2">
                Your Message
              </label>
              <textarea
                placeholder="Hi Shean Hans! I'd love to discuss a project opportunity with you..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={4}
                className="w-full px-0 py-3 border-b-2 border-gray-300 focus:border-[#cca300] outline-none bg-transparent text-black placeholder:text-gray-400 transition-colors resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-8">
              <HoldButton holdDuration={300} onClick={handleSubmit}>
                Send Message
              </HoldButton>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
