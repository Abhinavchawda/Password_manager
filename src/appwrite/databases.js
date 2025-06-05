// src/services/db.js (or wherever you store this file)

import { ID, Permission, Role, Query } from "appwrite"; // Import Permission and Role
import { databases } from "./config"; // Ensure 'databases' is correctly initialized from your Appwrite Client

const db = {};

const collections = [{
    dbId: import.meta.env.VITE_APPWRITE_DATABASE_ID_MYDB,
    name: "notes", // This is your 'passwords' collection from the schema discussion
    id: import.meta.env.VITE_APPWRITE_COLLECTION_ID_NOTES,
}];

collections.forEach((collection) => {
    db[collection.name] = {
        // --- READ Operations ---
        list: async (userId, queries = []) => {
            // When listing, you should explicitly filter by the ownerId
            // for both efficiency and to ensure you're requesting only what's allowed.
            // Appwrite's permissions will still enforce access control.
            const userQuery = [Query.equal('ownerId', userId)];
            const allQueries = [...queries, ...userQuery];

            return await databases.listDocuments(
                collection.dbId,
                collection.id,
                allQueries // Pass all combined queries
            );
        },
        get: async (id) => {
            // Appwrite's document permissions will automatically prevent
            // a user from getting a document they don't have read access to.
            return await databases.getDocument(
                collection.dbId,
                collection.id,
                id
            );
        },

        // --- CREATE Operation (with Permissions) ---
        create: async (data, userId, documentId = ID.unique()) => {
            if (!userId) {
                throw new Error("User ID is required to create a document with proper permissions.");
            }
            return await databases.createDocument(
                collection.dbId,
                collection.id,
                documentId,
                { ...data, ownerId: userId }, // Add ownerId to the data
                [
                    Permission.read(Role.user(userId)), // Only the owner can read
                    Permission.write(Role.user(userId)) // Only the owner can write (update/delete)
                ]
            );
        },

        // --- UPDATE Operation (Permissions maintained implicitly) ---
        update: async (data, id) => {
            // Permissions are typically set during creation and don't need to be
            // passed here unless you specifically intend to change them.
            // Only the user with 'write' permission on this document can update it.
            return await databases.updateDocument(
                collection.dbId,
                collection.id,
                id,
                data
            );
        },

        // --- DELETE Operation (Permissions maintained implicitly) ---
        delete: async (id) => {
            // Permissions are typically set during creation.
            // Only the user with 'write' permission on this document can delete it.
            return await databases.deleteDocument(
                collection.dbId,
                collection.id,
                id
            );
        }
    };
});

export default db;