import Link from 'next/link';

export default function Pricing() {
  const plans = [
    {
      name: "Basic Plan",
      description: "Low cost & affordable services to get you started very soon.",
      price: "Free",
      period: "",
      features: [
        "Increase traffic 130%",
        "Organic traffic 215%",
        "10 Free Optimization"
      ],
      buttonText: "Purchase Plan",
      buttonLink: "/purchase-basic",
      popular: false
    },
    {
      name: "Premium Plan",
      description: "Increased processing power with multiple sites, storage.",
      price: "$29",
      period: "/ Monthly",
      features: [
        "1,300 Keywords",
        "SEO Optimized",
        "Live Support"
      ],
      buttonText: "Purchase Plan",
      buttonLink: "/purchase-premium",
      popular: true
    },
    {
      name: "Advanced Plan",
      description: "Target is processing power with multiple sites, storage.",
      price: "$58",
      period: "/ Monthly",
      features: [
        "Increase traffic 130%",
        "Backlink analysis",
        "10 Free Optimization"
      ],
      buttonText: "Purchase Plan",
      buttonLink: "/purchase-advanced",
      popular: false
    },
    {
      name: "Business Plan",
      description: "Mentionling processing power with multiple sites, storage.",
      price: "$89",
      period: "/ Monthly",
      features: [
        "Increase traffic 130%",
        "Backlink analysis",
        "Organic traffic 215%"
      ],
      buttonText: "Purchase Plan",
      buttonLink: "/purchase-business",
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            No hidden charges! choose your plan.
          </h2>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 ${
                plan.popular 
                  ? 'bg-blue-50 dark:bg-blue-900 border-2 border-blue-500 dark:border-blue-400 transform scale-105' 
                  : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline justify-center">
                    <span className={`text-4xl font-bold ${
                      plan.popular 
                        ? 'text-blue-600 dark:text-blue-400' 
                        : 'text-gray-900 dark:text-white'
                    }`}>
                      {plan.price}
                    </span>
                    <span className="text-gray-600 dark:text-gray-300 ml-1">
                      {plan.period}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center mr-3 ${
                        plan.popular 
                          ? 'bg-blue-100 dark:bg-blue-800' 
                          : 'bg-green-100 dark:bg-green-800'
                      }`}>
                        <svg className={`w-3 h-3 ${
                          plan.popular 
                            ? 'text-blue-600 dark:text-blue-400' 
                            : 'text-green-600 dark:text-green-400'
                        }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 text-sm">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <Link 
                  href={plan.buttonLink}
                  className={`block w-full py-3 px-4 rounded-lg font-medium text-center transition-colors ${
                    plan.popular
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white'
                  }`}
                >
                  {plan.buttonText}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            All plans include 24/7 customer support and 30-day money-back guarantee
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700 dark:text-gray-300">Cancel anytime</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700 dark:text-gray-300">No setup fees</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700 dark:text-gray-300">Free migration</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
