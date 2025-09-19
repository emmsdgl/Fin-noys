import React, { useState } from 'react';
import { BookingSteps } from '../../components/client/BookingSteps';
import { ChevronDownIcon } from 'lucide-react';
export const BookingPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    company: '',
    accountType: 'personal',
    serviceType: '',
    address: '',
    numRooms: '',
    roomSize: '',
    businessId: '',
    invoiceEmail: '',
    billingAddress: '',
    specialRequests: ''
  });
  const steps = [{
    title: 'Reserver Details',
    link: '/booking/reserver'
  }, {
    title: 'Service Details',
    link: '/booking/service'
  }, {
    title: 'Confirmation',
    link: '/booking/confirmation'
  }];
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleNextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };
  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep === steps.length) {
      // Submit the form data
      console.log('Form submitted:', formData);
      // Redirect to confirmation page or show success message
    } else {
      handleNextStep();
    }
  };
  return <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">Book a Service</h1>
      <BookingSteps currentStep={currentStep} steps={steps} />
      <div className="bg-white rounded-lg shadow p-6">
        <form onSubmit={handleSubmit}>
          {currentStep === 1 && <div className="space-y-6">
              <h2 className="text-xl font-semibold">Reserver Details</h2>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name
                  </label>
                  <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md" placeholder="e.g. Juan" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                  </label>
                  <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md" placeholder="e.g. Dela Cruz" required />
                </div>
              </div>
              <div className="flex justify-center space-x-4 mb-4">
                <button type="button" className={`px-4 py-2 rounded-md ${formData.accountType === 'personal' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`} onClick={() => setFormData(prev => ({
              ...prev,
              accountType: 'personal'
            }))}>
                  Personal
                </button>
                <button type="button" className={`px-4 py-2 rounded-md ${formData.accountType === 'company' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`} onClick={() => setFormData(prev => ({
              ...prev,
              accountType: 'company'
            }))}>
                  Company
                </button>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md" placeholder="e.g. juandelacruz@example.com" required />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Mobile Number
                  </label>
                  <div className="flex">
                    <div className="flex items-center bg-gray-100 border border-gray-300 rounded-l-md px-3">
                      <div className="flex items-center">
                        <span className="text-sm">+63</span>
                        <ChevronDownIcon className="h-4 w-4 ml-1" />
                      </div>
                    </div>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-r-md" placeholder="9xxxxxxxx" required />
                  </div>
                </div>
                <div className="col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Location
                  </label>
                  <div className="relative">
                    <select name="location" value={formData.location} onChange={handleInputChange} className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md appearance-none" required>
                      <option value="">Only within Inari City</option>
                      <option value="central">Central District</option>
                      <option value="north">North District</option>
                      <option value="south">South District</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <ChevronDownIcon className="h-4 w-4" />
                    </div>
                  </div>
                </div>
                <div className="col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Company
                  </label>
                  <input type="text" name="company" value={formData.company} onChange={handleInputChange} className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md" placeholder="e.g. Philplans Inc." disabled={formData.accountType !== 'company'} />
                </div>
              </div>
            </div>}
          {currentStep === 2 && <div className="space-y-6">
              <h2 className="text-xl font-semibold">Service Details</h2>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Service Type
                </label>
                <select name="serviceType" value={formData.serviceType} onChange={handleInputChange} className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md" required>
                  <option value="">Select a Service Type</option>
                  <option value="hotel">Hotel Cleaning</option>
                  <option value="deep">Deep Cleaning</option>
                  <option value="residential">Residential Cleaning</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Address
                </label>
                <input type="text" name="address" value={formData.address} onChange={handleInputChange} className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md" placeholder="e.g. 650 Inari, Finland" required />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Number of Rooms
                  </label>
                  <input type="text" name="numRooms" value={formData.numRooms} onChange={handleInputChange} className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md" placeholder="e.g. 5 Deluxe" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Room Size
                  </label>
                  <input type="text" name="roomSize" value={formData.roomSize} onChange={handleInputChange} className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md" placeholder="e.g. 120 x 190 sq m." required />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Business ID
                  </label>
                  <input type="text" name="businessId" value={formData.businessId} onChange={handleInputChange} className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md" placeholder="e.g. K1210202" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    E-Invoice Number/ Email
                  </label>
                  <input type="text" name="invoiceEmail" value={formData.invoiceEmail} onChange={handleInputChange} className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md" placeholder="Select a payment method" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Billing Address
                </label>
                <input type="text" name="billingAddress" value={formData.billingAddress} onChange={handleInputChange} className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md" placeholder="e.g. 650 Inari, Finland" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Special Requests
                </label>
                <textarea name="specialRequests" value={formData.specialRequests} onChange={handleInputChange} className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md h-24" placeholder="Type a request (e.g. Thorough cleaning, Clean the rugs)"></textarea>
              </div>
            </div>}
          {currentStep === 3 && <div className="space-y-6">
              <h2 className="text-xl font-semibold text-center">
                Appointment Details
              </h2>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium">Reserver Details</h3>
                    <div className="mt-3">
                      <div className="text-sm text-blue-500">First Name</div>
                      <div>{formData.firstName || 'Nicole'}</div>
                    </div>
                    <div className="mt-3">
                      <div className="text-sm text-blue-500">Last Name</div>
                      <div>{formData.lastName || 'Candelaria'}</div>
                    </div>
                    <div className="mt-3">
                      <div className="text-sm text-blue-500">Email Address</div>
                      <div>
                        {formData.email || 'lcsanbuenaventura.2002@gmail.com'}
                      </div>
                    </div>
                    <div className="mt-3">
                      <div className="text-sm text-blue-500">Mobile Number</div>
                      <div>{formData.phone || '09288861617'}</div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Service Details</h3>
                    <div className="mt-3">
                      <div className="text-sm text-blue-500">Service Type</div>
                      <div>{formData.serviceType || 'Deep Cleaning'}</div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-3">
                      <div>
                        <div className="text-sm text-blue-500">Start Date</div>
                        <div>June 7, 2025</div>
                      </div>
                      <div>
                        <div className="text-sm text-blue-500">End Date</div>
                        <div>July 1, 2025</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-3">
                      <div>
                        <div className="text-sm text-blue-500">Start Date</div>
                        <div>10:00 am</div>
                      </div>
                      <div>
                        <div className="text-sm text-blue-500">End Date</div>
                        <div>15:00 pm</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-3">
                      <div>
                        <div className="text-sm text-blue-500">
                          No. of Rooms
                        </div>
                        <div>2</div>
                      </div>
                      <div>
                        <div className="text-sm text-blue-500">Room Size</div>
                        <div>Deluxe (320-430 sq ft)</div>
                      </div>
                    </div>
                    <div className="mt-3">
                      <div className="text-sm text-blue-500">
                        Special Requests
                      </div>
                      <div>
                        Take extra caution in cleaning the sheets and rugs
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-center">
                    <div className="bg-gray-100 p-4 rounded-md">
                      <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=FIN-NOYS-BOOKING-12345" alt="QR Code" className="w-40 h-40" />
                    </div>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-md">
                    <h3 className="text-lg font-medium mb-2">
                      Pricing Details
                    </h3>
                    <div className="flex justify-between mb-2">
                      <div>Unit Cleaning Price</div>
                      <div>€ 60 / room</div>
                    </div>
                    <div className="flex justify-between mb-2">
                      <div>No. of Rooms</div>
                      <div>2</div>
                    </div>
                    <div className="flex justify-between mb-2">
                      <div>€ 60 x 2</div>
                      <div>€ 120</div>
                    </div>
                    <div className="flex justify-between mb-2">
                      <div>5% VAT</div>
                      <div>€ 6</div>
                    </div>
                    <div className="flex justify-between font-medium border-t pt-2 mt-2">
                      <div>Total Price</div>
                      <div>€ 126</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>}
          <div className="flex justify-between mt-8">
            {currentStep > 1 ? <button type="button" onClick={handlePrevStep} className="px-4 py-2 border border-gray-300 rounded-md">
                Back
              </button> : <div></div>}
            <button type={currentStep === steps.length ? 'submit' : 'button'} onClick={currentStep === steps.length ? undefined : handleNextStep} className="px-8 py-2 bg-blue-500 text-white rounded-md">
              {currentStep === steps.length ? 'Checkout' : 'Continue'}
            </button>
          </div>
        </form>
      </div>
    </div>;
};