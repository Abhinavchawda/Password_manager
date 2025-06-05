import { Mail, Phone, MapPin, Globe } from 'lucide-react';

const Contact = () => {
  return (
    <section className="bg-gray-50 py-10 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-10 md:p-16">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight animate-fade-in-up">
            Let’s Connect & Build Something Great
          </h2>
          <p className="mt-6 text-lg sm:text-xl text-gray-600 animate-fade-in-up delay-100">
            Whether you have a project idea, a question, or just want to say hello, feel free to reach out to 
            <span className="text-blue-600 font-semibold"> Abhinav Chawda</span>. We’d love to hear from you.
          </p>
        </div>

        <div className="space-y-8">
          {/* Email */}
          <div className="flex items-center text-gray-800 group animate-fade-in-up delay-200">
            <Mail className="text-blue-600 group-hover:text-blue-700 transition-colors duration-300 mr-4" size={28} />
            <a
              href="mailto:abhinav.chawda@example.com"
              className="text-lg sm:text-xl font-medium text-blue-700 hover:underline hover:text-blue-800 transition"
            >
              abhinavchawda23@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="flex items-center text-gray-800 group animate-fade-in-up delay-300">
            <Phone className="text-green-600 group-hover:text-green-700 transition-colors duration-300 mr-4" size={28} />
            <a
              href="tel:+91 9516510552"
              className="text-lg sm:text-xl font-medium text-green-700 hover:underline hover:text-green-800 transition"
            >
              +91 9516510552
            </a>
          </div>

          {/* Location */}
          <div className="flex items-center text-gray-800 group animate-fade-in-up delay-400">
            <MapPin className="text-purple-600 group-hover:text-purple-700 transition-colors duration-300 mr-4" size={28} />
            <span className="text-lg sm:text-xl font-medium text-gray-700">
              Ujjain, Madhya Pradesh, India
            </span>
          </div>

          {/* Website */}
          <div className="flex items-center text-gray-800 group animate-fade-in-up delay-500">
            <Globe className="text-orange-600 group-hover:text-orange-700 transition-colors duration-300 mr-4" size={28} />
            <a
              href="https://abhinav-silk.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg sm:text-xl font-medium text-orange-700 hover:underline hover:text-orange-800 transition"
            >
              https://abhinav-silk.vercel.app/
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;