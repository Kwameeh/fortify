"use client";

import { useState } from "react";
import {
  FaCalendarAlt,
  FaClock,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  eventDate: string;
  eventTime: string;
  duration: string;
  location: string;
  budget: string;
  guestCount: string;
  specialRequirements: string;
  eventType: string;
}

const BookingForm = () => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    eventDate: "",
    eventTime: "",
    duration: "",
    location: "",
    budget: "",
    guestCount: "",
    specialRequirements: "",
    eventType: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          eventDate: "",
          eventTime: "",
          duration: "",
          location: "",
          budget: "",
          guestCount: "",
          specialRequirements: "",
          eventType: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bebas mb-4">Book Your Event</h2>
        <p className="text-lg text-gray-600">
          Tell us about your event and we'll create something amazing together
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-bebas mb-4 flex items-center">
            <FaUser className="mr-2" />
            Personal Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="John Doe"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="john@example.com"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="+233 24 945 8249"
                required
              />
            </div>
          </div>
        </div>

        {/* Event Details */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-bebas mb-4 flex items-center">
            <FaCalendarAlt className="mr-2" />
            Event Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="eventType"
                className="block text-sm font-medium mb-1">
                Event Type *
              </label>
              <select
                id="eventType"
                name="eventType"
                value={formData.eventType}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                required>
                <option value="">Select Event Type</option>
                <option value="wedding">Wedding</option>
                <option value="corporate">Corporate Event</option>
                <option value="birthday">Birthday Party</option>
                <option value="anniversary">Anniversary</option>
                <option value="conference">Conference</option>
                <option value="product-launch">Product Launch</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="service"
                className="block text-sm font-medium mb-1">
                Service Needed *
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                required>
                <option value="">Select Service</option>
                <option value="photography">Photography</option>
                <option value="videography">Videography</option>
                <option value="photography-videography">
                  Photography + Videography
                </option>
                <option value="live-streaming">Live Streaming</option>
                <option value="drone">Drone Services</option>
                <option value="full-production">Full Production</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="eventDate"
                className="block text-sm font-medium mb-1">
                Event Date *
              </label>
              <input
                type="date"
                id="eventDate"
                name="eventDate"
                value={formData.eventDate}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                required
              />
            </div>
            <div>
              <label
                htmlFor="eventTime"
                className="block text-sm font-medium mb-1">
                Event Time *
              </label>
              <input
                type="time"
                id="eventTime"
                name="eventTime"
                value={formData.eventTime}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                required
              />
            </div>
            <div>
              <label
                htmlFor="duration"
                className="block text-sm font-medium mb-1">
                Duration *
              </label>
              <select
                id="duration"
                name="duration"
                value={formData.duration}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                required>
                <option value="">Select Duration</option>
                <option value="2-hours">2 Hours</option>
                <option value="4-hours">4 Hours</option>
                <option value="6-hours">6 Hours</option>
                <option value="8-hours">8 Hours</option>
                <option value="full-day">Full Day (10+ Hours)</option>
                <option value="multi-day">Multi-Day</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="guestCount"
                className="block text-sm font-medium mb-1">
                Expected Guest Count *
              </label>
              <input
                type="number"
                id="guestCount"
                name="guestCount"
                value={formData.guestCount}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="50"
                min="1"
                required
              />
            </div>
          </div>
        </div>

        {/* Location & Budget */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-bebas mb-4 flex items-center">
            <FaMapMarkerAlt className="mr-2" />
            Location & Budget
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="location"
                className="block text-sm font-medium mb-1">
                Event Location *
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="Accra, Ghana"
                required
              />
            </div>
            <div>
              <label
                htmlFor="budget"
                className="block text-sm font-medium mb-1">
                Budget Range
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent">
                <option value="">Select Budget Range</option>
                <option value="under-1000">Under GHS 1,000</option>
                <option value="1000-2500">GHS 1,000 - 2,500</option>
                <option value="2500-5000">GHS 2,500 - 5,000</option>
                <option value="5000-10000">GHS 5,000 - 10,000</option>
                <option value="over-10000">Over GHS 10,000</option>
                <option value="discuss">Let's Discuss</option>
              </select>
            </div>
          </div>
        </div>

        {/* Special Requirements */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-bebas mb-4">Special Requirements</h3>
          <div>
            <label
              htmlFor="specialRequirements"
              className="block text-sm font-medium mb-1">
              Additional Details or Special Requirements
            </label>
            <textarea
              id="specialRequirements"
              name="specialRequirements"
              value={formData.specialRequirements}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-4 py-3 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              placeholder="Any specific shots, themes, or special requirements for your event..."
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-black text-white px-8 py-4 font-bebas text-xl hover:bg-gray-800 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
            {isSubmitting ? "Submitting..." : "Submit Booking Request"}
          </button>
        </div>

        {/* Status Messages */}
        {submitStatus === "success" && (
          <div className="text-center p-4 bg-green-100 border border-green-400 text-green-700 rounded">
            <p className="font-medium">
              Booking request submitted successfully!
            </p>
            <p>We'll get back to you within 24 hours.</p>
          </div>
        )}

        {submitStatus === "error" && (
          <div className="text-center p-4 bg-red-100 border border-red-400 text-red-700 rounded">
            <p className="font-medium">
              There was an error submitting your request.
            </p>
            <p>Please try again or contact us directly.</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default BookingForm;
