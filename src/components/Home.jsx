import { Link } from 'react-router-dom';
// import { databases } from '../appwrite/config';
import db from '../appwrite/databases';
import { useEffect, useState } from 'react';
import Note from './Note';
import { useAuth } from '../context/AuthContext';
import NoteForm from './NoteForm';

const Home = () => {

    const [notes, setNotes] = useState([]);
    const [editingNote, setEditingNote] = useState(null); // State to hold the note being edited

    const { user: loggedInUser } = useAuth();

    const init = async () => {
        // const response = await databases.listDocuments(
        //     import.meta.env.VITE_APPWRITE_DATABASE_ID_MYDB,
        //     import.meta.env.VITE_APPWRITE_COLLECTION_ID_NOTES
        // );

        const response = await db.notes.list(loggedInUser.$id);

        setNotes(response.documents);
    }

    useEffect(() => {
        init();
    }, []);

    const handleEditNote = (noteData) => {
        setEditingNote(noteData);
    };

    return (
        <div className="min-h-[calc(100vh-12rem)] flex flex-col items-center justify-center p-8 font-inter">
            <div className="text-center">
                <h2 className="text-4xl md:text-6xl text-wrap font-extrabold text-gray-800 mb-4 drop-shadow-lg leading-tight">
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

            <div className='w-full max-w-2xl my-8'>
                {notes.map((note) => (
                    <Note key={note.$id} data={note}
                        onDelete={() => {
                            db.notes.delete(note.$id).
                                then(() => {
                                    setNotes(notes.filter(n => n.$id !== note.$id));
                                })
                        }}
                        onEdit={handleEditNote}
                    />
                ))}
            </div>

            <div className='w-full max-w-2xl my-8'>
                <NoteForm
                    initialData={editingNote} // Pass the note being edited to the form
                    onSubmit={(formData) => {
                        db.notes.create(formData, loggedInUser.$id).
                            then((newNote) => {
                                setNotes([...notes, newNote]); // Add the new note to the list
                                setEditingNote(null); // Clear the editing state after submission
                            })
                            .catch((error) => {
                                console.error('Error creating note:', error);
                            });
                    }}
                    onEdit={(updatedData) => {
                        db.notes.update(updatedData, editingNote.$id).
                            then(() => {
                                setNotes(notes.map(note => note.$id === editingNote.$id ? updatedData : note));
                            })
                            .catch((error) => {
                                console.error('Error updating note:', error);
                            })
                            .finally(() => {
                                setEditingNote(null); // Clear the editing state after updating
                            });
                    }}
                />
            </div>
        </div>
    )
};

export default Home;