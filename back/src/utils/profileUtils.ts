import "dotenv/config";

import { queryDB } from "../db/dbconfig";
import { User } from "../models/user";
import { getUserByEmail, hashPassword } from '../utils/authUtils';



// Helper function to get user (by id) from database and return user
const getProfileDB = async (userId: string) => {
    const user = await queryDB(
        'SELECT * FROM "public".user WHERE id = $1',
        [userId]
    );
    if (!user || user.length === 0) {
        return null;
    }
    return user[0];
}

// Helper function to update user (by id) in database and return true if successful
const updateProfileDB = async (user: User) => {
    try {
        const hash = await hashPassword(user.password!);
        const query =
            'UPDATE "public".user SET name = $1, email = $2, password = $3 WHERE id = $4';
        const values = [user.name, user.email, hash ,user.id];
        await queryDB(query, values);
        return true;
    } catch (err) {
        console.log(err);
        return false;
    }
}

// Helper function to get user (by email) from database and return user
const getUserByEmailDB = getUserByEmail;


export {
    getProfileDB,
    updateProfileDB,
    getUserByEmailDB
};
