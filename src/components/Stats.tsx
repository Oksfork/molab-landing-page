export default function Stats() {
  const stats = [
    {
      number: "276K",
      label: "Active user from the community",
      description: "Enjoy lifetime free updates."
    },
    {
      number: "90%",
      label: "(4,655) Positive Rating",
      description: "Cross browser and cross platform compatibility."
    },
    {
      number: "250+",
      label: "Agencies worldwide",
      description: "Friendly and effective support team."
    }
  ];

  const logos = [
    { name: "Company 1", logo: "/api/placeholder/120/60" },
    { name: "Company 2", logo: "/api/placeholder/120/60" },
    { name: "Company 3", logo: "/api/placeholder/120/60" },
    { name: "Company 4", logo: "/api/placeholder/120/60" },
    { name: "Company 5", logo: "/api/placeholder/120/60" }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trusted by Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Thrusted by <span className="text-blue-600 dark:text-blue-400">250+</span> Agencies in whole world
          </h2>
        </div>

        {/* Company Logos */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-20">
          {logos.map((company, index) => (
            <div key={index} className="flex items-center justify-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-gray-400 dark:text-gray-500 text-sm font-medium">
                {company.name}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-8 bg-white dark:bg-gray-700 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <div className="text-4xl lg:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {stat.number}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {stat.label}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Benefits */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-700 dark:text-gray-300">Enjoy lifetime free updates.</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-700 dark:text-gray-300">Cross browser and cross platform compatibility.</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-700 dark:text-gray-300">Friendly and effective support team.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
