import { Eye, EyeOff } from 'lucide-react';
import { useState, useEffect } from 'react';

const NoteForm = ({ onSubmit, onEdit, initialData = null }) => {

    const [isEdit, setIsEdit] = useState(initialData);

    const onCancelEdit = () => {
        setSite('');
        setId('');
        setPassword('');
        setNotes('');

        initialData = null; // Clear initialData to indicate no editing
        setIsEdit(false); // Set edit mode to false
    };

    const [site, setSite] = useState('');
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [notes, setNotes] = useState('');

    const [showPassword, setShowPassword] = useState(false);

    // Effect to populate form fields when initialData (for editing) changes
    useEffect(() => {
        if (initialData) {
            setSite(initialData.site || '');
            setId(initialData.id || '');
            setPassword(initialData.password || '');
            setNotes(initialData.notes || '');
        } else {
            // Clear form if no initialData (for creating new)
            setSite('');
            setId('');
            setPassword('');
            setNotes('');
        }

        // Set edit mode to false if no initialData
        initialData ? setIsEdit(true) : setIsEdit(false);
    }, [initialData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            site,
            id,
            password, // Remember client-side encryption before sending to Appwrite!
            notes,
        };

        isEdit ? onEdit(formData) : onSubmit(formData);

        setSite('');
        setId('');
        setPassword('');
        setNotes('');
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
                        value={site}
                        onChange={(e) => setSite(e.target.value)}
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
                        value={id}
                        onChange={(e) => setId(e.target.value)}
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
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
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
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                    ></textarea>
                </div>
                <div className="flex items-center justify-end space-x-4">
                    {isEdit && ( // Show cancel button only in edit mode
                        <button
                            type="button"
                            onClick={onCancelEdit}
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