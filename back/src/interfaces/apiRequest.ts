import { User } from '../models/user';
import { Request } from 'express';

export interface ApiRequest extends Request {
    user?: User;
}