export default function Testimonials() {
  const testimonials = [
    {
      name: "Matthew J. Wyman",
      position: "Marketing Manager",
      content: "Addressing indulged speaking the horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over thender from. Comparison new lancholy.",
      avatar: "/api/placeholder/80/80",
      rating: 5
    },
    {
      name: "Anthom Bu Spar",
      position: "Product Designer",
      content: "Positions indulged speaking the horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over thender from. Comparison new lancholy.",
      avatar: "/api/placeholder/80/80",
      rating: 5
    },
    {
      name: "Methu J. Voikus",
      position: "Head of Department",
      content: "Continue indulged speaking the horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over thender from. Comparison new lancholy.",
      avatar: "/api/placeholder/80/80",
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${
          i < rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Check what these clients have to say
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Continue indulged speaking the horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over thender from. Comparison new lancholy.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              {/* Rating */}
              <div className="flex items-center mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Content */}
              <blockquote className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                "{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 dark:bg-gray-600 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.position}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">98%</div>
            <div className="text-gray-600 dark:text-gray-300">Customer Satisfaction</div>
          </div>
          <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">500+</div>
            <div className="text-gray-600 dark:text-gray-300">Happy Clients</div>
          </div>
          <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">24/7</div>
            <div className="text-gray-600 dark:text-gray-300">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
}
