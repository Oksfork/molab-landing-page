export default function Features() {
  const features = [
    {
      title: "Project Initialization",
      description: "Realtime Best Data Solutions.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: "blue"
    },
    {
      title: "Market Development",
      description: "Advanced analytics and insights for market growth.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      color: "green"
    },
    {
      title: "Data Analytics",
      description: "Comprehensive data processing and visualization.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
        </svg>
      ),
      color: "purple"
    }
  ];

  const mainFeatures = [
    {
      title: "Structure",
      subtitle: "Build your SAAS landing page using the intelligent BEM interface",
      description: "Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know.",
      image: "/api/placeholder/400/300",
      features: ["Customizable", "Satisfaction Rate"]
    },
    {
      title: "Productivity",
      subtitle: "Continued at up to zealously necessary breakfast",
      description: "Surrounded sir motionless she end literature. Gay direction neglected.",
      image: "/api/placeholder/400/300",
      features: ["Trends tracking", "Loyalty Programs", "Vendor Management"]
    },
    {
      title: "Experience",
      subtitle: "Continued at up to zealously necessary breakfast",
      description: "Surrounded sir motionless she end literature. Gay direction neglected.",
      image: "/api/placeholder/400/300",
      features: ["Trends tracking", "Loyalty Programs", "Vendor Management"]
    },
    {
      title: "Collaboration",
      subtitle: "Continued at up to zealously necessary breakfast",
      description: "Surrounded sir motionless she end literature. Gay direction neglected.",
      image: "/api/placeholder/400/300",
      features: ["Trends tracking", "Loyalty Programs", "Vendor Management"]
    }
  ];

  const capabilities = [
    {
      title: "Friendly Interface",
      description: "Dashboard UI",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      )
    },
    {
      title: "Extensions & Addons",
      description: "Dynamic Options",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
        </svg>
      )
    },
    {
      title: "Strong Encryption",
      description: "Security",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    }
  ];

  return (
    <div className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Our Features Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Best performance awesome features
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Contrasted dissimilar get joy you instrument out reasonably. Again keeps at no meant stuff. 
            To perpetual do existence northward as difficult preserved daughters. Continued at up to zealously.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-${feature.color}-100 dark:bg-${feature.color}-900 mb-4`}>
                <div className={`text-${feature.color}-600 dark:text-${feature.color}-400`}>
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Main Features Grid */}
        <div className="space-y-20">
          {mainFeatures.map((feature, index) => (
            <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    <h4 className="text-lg text-blue-600 dark:text-blue-400 mb-4">
                      {feature.subtitle}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    {feature.features.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-3"></div>
                        <span className="text-gray-700 dark:text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-8 h-80 flex items-center justify-center">
                  <div className="text-center text-gray-500 dark:text-gray-400">
                    <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p>Feature Image</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Included Capabilities */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Features designed for you
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-100 dark:bg-blue-900 mb-4">
                  <div className="text-blue-600 dark:text-blue-400">
                    {capability.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {capability.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
