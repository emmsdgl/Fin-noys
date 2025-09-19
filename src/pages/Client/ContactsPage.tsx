import React from 'react';
import { MapPinIcon, PhoneIcon, MailIcon, ClockIcon } from 'lucide-react';
export const ContactsPage = () => {
  return <div>
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-center mb-4">Contact Us</h1>
        <p className="text-center text-gray-500 max-w-2xl mx-auto">
          Have questions about our cleaning services? Reach out to our friendly
          team and we'll get back to you as soon as possible.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
        <div>
          <h2 className="text-xl font-bold mb-6">Get in Touch</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="Your first name" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="Your last name" required />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="Your email address" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input type="tel" className="w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="Your phone number" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                <option>General Inquiry</option>
                <option>Booking Question</option>
                <option>Service Information</option>
                <option>Feedback</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea className="w-full px-3 py-2 border border-gray-300 rounded-md h-32" placeholder="How can we help you?" required></textarea>
            </div>
            <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              Send Message
            </button>
          </form>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-6">Contact Information</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex items-start mb-6">
                <MapPinIcon className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-medium mb-1">Our Location</h3>
                  <p className="text-gray-600">
                    650 Inari Street, Helsinki
                    <br />
                    Finland, 00101
                  </p>
                </div>
              </div>
              <div className="flex items-start mb-6">
                <PhoneIcon className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-medium mb-1">Phone Number</h3>
                  <p className="text-gray-600">+358 9 1234 5678</p>
                  <p className="text-gray-600">+358 9 8765 4321</p>
                </div>
              </div>
              <div className="flex items-start mb-6">
                <MailIcon className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-medium mb-1">Email Address</h3>
                  <p className="text-gray-600">info@finnoys.com</p>
                  <p className="text-gray-600">support@finnoys.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <ClockIcon className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-medium mb-1">Working Hours</h3>
                  <p className="text-gray-600">
                    Monday - Friday: 8:00 AM - 8:00 PM
                  </p>
                  <p className="text-gray-600">Saturday: 9:00 AM - 5:00 PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </div>
            <div className="h-64 bg-gray-200">
              {/* This would be a map component in a real implementation */}
              <div className="h-full flex items-center justify-center bg-blue-50 text-blue-500">
                Map Location
              </div>
            </div>
          </div>
          <div className="mt-6 bg-white rounded-lg shadow-md p-6">
            <h3 className="font-bold mb-3">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-blue-400 flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-pink-500 flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-blue-700 flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
        <p className="text-gray-600 mb-6">
          Find answers to common questions about our cleaning services.
        </p>
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
            <h3 className="font-bold mb-2">
              How do I schedule a cleaning service?
            </h3>
            <p className="text-gray-600">
              You can easily schedule a cleaning service through our online
              booking system, by calling our customer service, or by sending us
              an email.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
            <h3 className="font-bold mb-2">
              What cleaning supplies do you use?
            </h3>
            <p className="text-gray-600">
              We use environmentally friendly, high-quality cleaning supplies
              that are effective and safe for both people and the environment.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-4">
            <h3 className="font-bold mb-2">Can I reschedule my booking?</h3>
            <p className="text-gray-600">
              Yes, you can reschedule your booking up to 24 hours before the
              scheduled service without any penalty.
            </p>
          </div>
        </div>
      </div>
    </div>;
};