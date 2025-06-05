import { useState } from 'react';
import { Eye, EyeOff, Trash2, Pencil, Link, User } from 'lucide-react';

const Note = ({ data, onDelete, onEdit }) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const maskedPassword = data.password ? '•'.repeat(data.password.length) : 'N/A';

    return (
        <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-6 mx-auto w-full border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-2xl hover:border-blue-300 dark:hover:border-blue-600 my-5 min-w-[250px]">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                {/* Site Name and User ID */}
                <div className="flex-1 min-w-0">
                    <div className="flex items-center mb-1">
                        <Link size={20} className="text-blue-500 dark:text-blue-400 mr-2 flex-shrink-0" />
                        <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-100 truncate">
                            {data.site}
                        </h3>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <User size={16} className="text-indigo-500 dark:text-indigo-400 mr-2 flex-shrink-0" />
                        <span className="font-medium">User ID:</span>{' '}
                        <span className="ml-1 truncate">{data.id || 'N/A'}</span>
                    </div>
                </div>

                {/* Password Section */}
                <div className="flex items-center justify-start flex-wrap gap-2 md:flex-1 md:min-w-[250px]"> {/* Adjusted order and min-width */}
                    <span className="font-medium text-gray-700 dark:text-gray-200 text-sm md:text-base whitespace-nowrap">Password:</span>
                    <span className="font-mono tracking-wide text-gray-800 dark:text-gray-100 text-base md:text-lg break-all">
                        {showPassword ? data.password : maskedPassword}
                    </span>
                    <button
                        onClick={togglePasswordVisibility}
                        className="p-1 rounded-full text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-200 flex-shrink-0"
                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                        type="button"
                    >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                </div>

                {/* Action Buttons (Edit & Delete) */}
                <div className="flex gap-2 flex-shrink-0">
                    <button
                        onClick={() => onEdit(data)}
                        className="p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition duration-200 shadow-md flex items-center justify-center transform hover:scale-105"
                        aria-label="Edit"
                        type="button"
                    >
                        <Pencil size={18} />
                    </button>
                    <button
                        onClick={() => onDelete(data.$id)}
                        className="p-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition duration-200 shadow-md flex items-center justify-center transform hover:scale-105"
                        aria-label="Delete"
                        type="button"
                    >
                        <Trash2 size={18} />
                    </button>
                </div>
            </div>

            {data.notes && (
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                        <span className="font-medium text-gray-800 dark:text-gray-200">Notes:</span> {data.notes}
                    </p>
                </div>
            )}
        </div>
    );
};

export default Note;