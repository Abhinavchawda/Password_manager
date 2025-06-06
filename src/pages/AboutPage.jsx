import { ShieldCheck, Key, Lock, Zap } from 'lucide-react';

const AboutPage = () => {
    return (
        <section className='min-h-[100vh] flex items-center justify-center py-16 px-4 font-inter'>
            <div className='container mx-auto max-w-4xl bg-white rounded-2xl shadow-xl p-8 md:p-12'>
                <h2 className='text-5xl font-extrabold text-gray-900 text-center mb-12 leading-tight'>
                    About <span className='text-red-600'>PassOP</span>
                </h2>

                <p className='text-xl text-gray-700 leading-relaxed mb-10 text-center'>
                    At <b className='text-red-600'>PassOP</b>, we are dedicated to revolutionizing online security by providing a seamless and robust password management solution.
                </p>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    {/* Feature Card 1: Ironclad Security */}
                    <div className='bg-gray-50 p-6 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300'>
                        <div className='flex items-center mb-4'>
                            <ShieldCheck className='text-blue-600 mr-3' size={32} />
                            <h3 className='text-2xl font-bold text-gray-800'>Ironclad Security</h3>
                        </div>
                        <p className='text-gray-600 leading-relaxed'>
                            Your sensitive data is safeguarded with state-of-the-art encryption and a zero-knowledge architecture, ensuring only you can access your information.
                        </p>
                    </div>

                    {/* Feature Card 2: Effortless Management */}
                    <div className='bg-gray-50 p-6 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300'>
                        <div className='flex items-center mb-4'>
                            <Key className='text-green-600 mr-3' size={32} />
                            <h3 className='text-2xl font-bold text-gray-800'>Effortless Management</h3>
                        </div>
                        <p className='text-gray-600 leading-relaxed'>
                            Store, organize, and seamlessly access all your passwords across every device, making online life simpler and more secure.
                        </p>
                    </div>

                    {/* Feature Card 3: Strong Passwords Made Easy */}
                    <div className='bg-gray-50 p-6 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300'>
                        <div className='flex items-center mb-4'>
                            <Lock className='text-purple-600 mr-3' size={32} />
                            <h3 className='text-2xl font-bold text-gray-800'>Strong Passwords Made Easy</h3>
                        </div>
                        <p className='text-gray-600 leading-relaxed'>
                            Our advanced generator creates unique, highly secure passwords for each of your accounts, eliminating the risk of weak credentials.
                        </p>
                    </div>

                    {/* Feature Card 4: Seamless Logins */}
                    <div className='bg-gray-50 p-6 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300'>
                        <div className='flex items-center mb-4'>
                            <Zap className='text-orange-600 mr-3' size={32} />
                            <h3 className='text-2xl font-bold text-gray-800'>Seamless Logins</h3>
                        </div>
                        <p className='text-gray-600 leading-relaxed'>
                            Experience the convenience of logging into your favorite websites and applications with just a single, secure click.
                        </p>
                    </div>
                </div>

                <p className='text-xl text-gray-700 leading-relaxed mt-10 text-center'>
                    We are committed to continuous innovation, constantly enhancing our security features to keep you safe in an evolving digital landscape. Join us today and discover a secure, effortless online life. A free trial is available!
                </p>
            </div>
        </section>
    );
};

export default AboutPage;