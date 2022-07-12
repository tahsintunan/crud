import 'dotenv/config';

import { queryDB } from '../db/dbconfig';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


// Helper function to grab user by email from database and return user
const getUserByEmail = async (email: string) => {
    const query = 'SELECT * FROM "public".user WHERE email = $1';
    const values = [email];
    const res = await queryDB(query, values);
    if (!res) return null;
    return res[0];
}


// Helper function match password to hash in database and return true or false
const matchPassword = async (password: string, hash: string) => {
    const match = await bcrypt.compare(password, hash);
    return match;
}


// Helper function to generate auth token for user (with 7d expire time) and return token
const generateAuthToken = (user: any) => {
    const payload = {
        id: user.id,
        name: user.name,
        email: user.email
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET as jwt.Secret, {
        expiresIn: '7d',
        algorithm: "HS256"
    });
    return token;
}


// Helper function to create new user in database and return true or false
const createNewUser = async (name: string, email: string, password: string) => {
    try {
        const hash = await hashPassword(password);
        const query = 'INSERT INTO "public".user (name, email, password) VALUES ($1, $2, $3)';
        const values = [name, email, hash];
        await queryDB(query, values);
        return true;
    }
    catch (err) {
        console.log(err);
        return false;
    }
}


// Helper function to hash password and return hash
const hashPassword = async (password: string) => {
    const saltRounds = 10;
    const hash = await bcrypt.hash(password, saltRounds)
    return hash;
}


// Helper function to check validity of token and return true or false
const verifyToken = (token: string) => {
    try {
        jwt.verify(token, process.env.JWT_SECRET as string);
        return true;
    }
    catch (err) {
        return false;
    }
}


export { getUserByEmail, matchPassword, generateAuthToken, createNewUser, verifyToken };
