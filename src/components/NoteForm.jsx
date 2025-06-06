import { Eye, EyeOff } from 'lucide-react';
import { useState, useEffect } from 'react';

const NoteForm = ({ onSubmit, onEdit, onCancelEdit, initialData }) => {

    const [isEdit, setIsEdit] = useState(initialData);

    const handleCancelEdit = () => {
        setFormData({
            site: '',
            id: '',
            password: '',
            notes: '',
        });
        setIsEdit(false); // Set edit mode to false
        onCancelEdit();
    };

    const [formData, setFormData] = useState({
        site: '',
        id: '',
        password: '',
        notes: '',
    });

    const [showPassword, setShowPassword] = useState(false);

    // Effect to populate form fields when initialData (for editing) changes
    useEffect(() => {
        if (initialData) {
            setFormData({
                site: initialData.site || '',
                id: initialData.id || '',
                password: initialData.password || '',
                notes: initialData.notes || '',
            })
        } else {
            // Clear form if no initialData (for creating new)
            setFormData({
                site: '',
                id: '',
                password: '',
                notes: '',
            });
        }

        // Set edit mode to false if no initialData
        initialData ? setIsEdit(true) : setIsEdit(false);
    }, [initialData]);

    const handleSubmit = (e) => {
        e.preventDefault();

        isEdit ? onEdit(formData) : onSubmit(formData);

        setFormData({
            site: '',
            id: '',
            password: '',
            notes: '',
        });
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {isEdit ? 'Edit Password Entry' : 'Add New Password Entry'}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="site" className="block text-gray-700 text-sm font-bold mb-2">
                        Site Name:
                    </label>
                    <input
                        type="text"
                        id="site"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={formData.site}
                        onChange={(e) => setFormData({ ...formData, site: e.target.value })}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="userId" className="block text-gray-700 text-sm font-bold mb-2">
                        User ID (for site):
                    </label>
                    <input
                        type="text"
                        id="id"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={formData.id}
                        onChange={(e) => setFormData({ ...formData, id: e.target.value })}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                        Password:
                    </label>
                    {/* Password input with toggle */}
                    <div className="relative flex items-center">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            className="shadow appearance-none border rounded w-full py-2 px-3 pr-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            required
                        />
                        <button
                            type="button" // Important: type="button" to prevent form submission
                            onClick={togglePasswordVisibility}
                            className="absolute right-2 p-1 rounded-md text-gray-600 hover:bg-gray-200 transition-colors duration-200"
                            aria-label={showPassword ? 'Hide password' : 'Show password'}
                        >
                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                    </div>
                </div>
                <div>
                    <label htmlFor="notes" className="block text-gray-700 text-sm font-bold mb-2">
                        Notes (Optional):
                    </label>
                    <textarea
                        id="notes"
                        rows="3"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    ></textarea>
                </div>
                <div className="flex items-center justify-end space-x-4">
                    {isEdit && ( // Show cancel button only in edit mode
                        <button
                            type="button"
                            onClick={handleCancelEdit}
                            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline transition-colors duration-200"
                        >
                            Cancel
                        </button>
                    )}
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline transition-colors duration-200"
                    >
                        {isEdit ? 'Update Entry' : 'Add Entry'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default NoteForm;