import { Link } from 'react-router-dom';
import Manager from './Manager';

const Home = () => {
    return (
        <div className="min-h-[calc(100vh-12rem)] flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-8 font-inter">
            <div className="text-center">
                <h2 className="text-6xl font-extrabold text-gray-800 mb-4 drop-shadow-lg leading-tight">
                    Welcome to <span className="text-red-600">&lt;</span>Pass<span className="text-red-600">OP/&gt;</span>
                </h2>
                <p className="text-2xl text-gray-600">
                    Your ultimate solution for secure and effortless password management.
                </p>
                <Link
                    to="/about"
                    className="mt-8 inline-block bg-red-600 text-white text-xl font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105"
                >
                    Learn More
                </Link>
            </div>

            <div className='w-full my-5'>
                <Manager />
            </div>
        </div>
    )
};

export default Home;