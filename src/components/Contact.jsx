import { Mail, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section className='min-h-[100vh] flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4 font-inter'>
      <div className='container mx-auto max-w-2xl bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center'>
        <h2 className='text-5xl font-extrabold text-gray-900 mb-8 leading-tight'>
          Get in Touch
        </h2>
        <p className='text-xl text-gray-700 leading-relaxed mb-8'>
          We'd love to hear from you! Feel free to reach out to the developer, <b className='text-teal-600'>Abhinav Chawda</b>, for any inquiries or feedback.
        </p>

        <div className='flex flex-col items-center gap-6'>
          {/* Email */}
          <div className='flex items-center text-gray-800 text-xl md:text-2xl bg-gray-50 p-4 rounded-xl shadow-sm w-full max-w-sm justify-center'>
            <Mail className='text-blue-500 mr-3' size={28} />
            <a href='mailto:abhinav.chawda@example.com' className='hover:underline text-blue-700'>
              abhinavchawda23@gmail.com
            </a>
          </div>
          {/* Phone */}
          <div className='flex items-center text-gray-800 text-xl md:text-2xl bg-gray-50 p-4 rounded-xl shadow-sm w-full max-w-sm justify-center'>
            <Phone className='text-green-500 mr-3' size={28} />
            <a href='tel:+91 9516510552' className='hover:underline text-green-700'>
              +91 9516510552
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;