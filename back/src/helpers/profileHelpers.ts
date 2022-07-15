import "dotenv/config";

import { queryDB } from "../db/dbconfig";
import { User } from "../models/user";



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


const updateProfileDB = async (user: User) => {
    try {
        const query =
            'UPDATE "public".user SET name = $1, email = $2, password = $3 WHERE id = $4';
        const values = [user.name, user.email, user.password ,user.id];
        await queryDB(query, values);
        return true;
    } catch (err) {
        console.log(err);
        return false;
    }
}





export { getProfileDB, updateProfileDB };