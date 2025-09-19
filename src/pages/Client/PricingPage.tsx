import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckIcon } from 'lucide-react';
export const PricingPage = () => {
  const [billingPeriod, setBillingPeriod] = useState('monthly');
  const pricingPlans = [{
    name: 'Basic',
    description: 'Perfect for small hotels and BnBs',
    price: billingPeriod === 'monthly' ? '€49' : '€470',
    period: billingPeriod === 'monthly' ? '/month' : '/year',
    savings: billingPeriod === 'yearly' ? 'Save €118' : null,
    features: ['Up to 10 rooms cleaning', 'Standard cleaning supplies', 'Weekly scheduling', 'Email support'],
    buttonText: 'Get Started',
    buttonLink: '/booking',
    isPopular: false
  }, {
    name: 'Professional',
    description: 'For mid-sized hotels and accommodations',
    price: billingPeriod === 'monthly' ? '€99' : '€950',
    period: billingPeriod === 'monthly' ? '/month' : '/year',
    savings: billingPeriod === 'yearly' ? 'Save €238' : null,
    features: ['Up to 30 rooms cleaning', 'Premium cleaning supplies', 'Daily scheduling', 'Priority email & phone support', 'Deep cleaning twice a month', 'Linen service included'],
    buttonText: 'Get Started',
    buttonLink: '/booking',
    isPopular: true
  }, {
    name: 'Enterprise',
    description: 'For large hotels and resorts',
    price: billingPeriod === 'monthly' ? '€199' : '€1,900',
    period: billingPeriod === 'monthly' ? '/month' : '/year',
    savings: billingPeriod === 'yearly' ? 'Save €488' : null,
    features: ['Unlimited rooms cleaning', 'Premium cleaning supplies', '24/7 scheduling', 'Dedicated account manager', 'Deep cleaning weekly', 'Linen service included', 'Emergency cleaning response', 'Custom cleaning protocols'],
    buttonText: 'Contact Sales',
    buttonLink: '/contacts',
    isPopular: false
  }];
  const additionalServices = [{
    name: 'Deep Cleaning',
    price: '€60 / room'
  }, {
    name: 'Window Cleaning',
    price: '€30 / window'
  }, {
    name: 'Carpet Cleaning',
    price: '€2.5 / sq ft'
  }, {
    name: 'Linen Service',
    price: '€20 / room'
  }];
  return <div>
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-center mb-4">
          Simple, Transparent Pricing
        </h1>
        <p className="text-center text-gray-500 max-w-2xl mx-auto">
          Choose the perfect cleaning plan for your accommodation needs. All
          plans include our quality guarantee and flexible scheduling.
        </p>
      </div>
      <div className="flex justify-center mb-10">
        <div className="inline-flex p-1 bg-gray-100 rounded-md">
          <button className={`px-6 py-2 text-sm font-medium rounded-md ${billingPeriod === 'monthly' ? 'bg-white shadow' : 'text-gray-500'}`} onClick={() => setBillingPeriod('monthly')}>
            Monthly
          </button>
          <button className={`px-6 py-2 text-sm font-medium rounded-md ${billingPeriod === 'yearly' ? 'bg-white shadow' : 'text-gray-500'}`} onClick={() => setBillingPeriod('yearly')}>
            Yearly <span className="text-green-500 text-xs">Save 20%</span>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {pricingPlans.map((plan, index) => <div key={index} className={`bg-white rounded-lg shadow-md overflow-hidden border ${plan.isPopular ? 'border-blue-500 ring-2 ring-blue-500' : 'border-gray-200'}`}>
            {plan.isPopular && <div className="bg-blue-500 text-white text-center text-sm py-1">
                MOST POPULAR
              </div>}
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <p className="text-gray-500 mb-4">{plan.description}</p>
              <div className="mb-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-gray-500">{plan.period}</span>
                {plan.savings && <span className="block text-sm text-green-500 mt-1">
                    {plan.savings}
                  </span>}
              </div>
              <Link to={plan.buttonLink} className={`block w-full py-2 px-4 rounded-md text-center ${plan.isPopular ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-blue-100 text-blue-700 hover:bg-blue-200'}`}>
                {plan.buttonText}
              </Link>
            </div>
            <div className="border-t border-gray-200 px-6 py-4">
              <p className="font-medium mb-2">What's included:</p>
              <ul className="space-y-2">
                {plan.features.map((feature, i) => <li key={i} className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-sm">{feature}</span>
                  </li>)}
              </ul>
            </div>
          </div>)}
      </div>
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">
          Additional Services
        </h2>
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-blue-500 uppercase tracking-wider">
                  Service
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-blue-500 uppercase tracking-wider">
                  Price
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {additionalServices.map((service, index) => <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {service.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">
                    {service.price}
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
      </div>
      <div className="bg-blue-50 rounded-lg p-8 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Need a custom quote?</h2>
        <p className="text-gray-600 mb-6">
          Our team can create a tailored cleaning solution for your specific
          needs. Get in touch with us for a personalized quote.
        </p>
        <Link to="/contacts" className="inline-flex items-center px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Contact Us
        </Link>
      </div>
    </div>;
};