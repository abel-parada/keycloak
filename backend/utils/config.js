import dotenv from 'dotenv';

dotenv.config();

export const PORT = process.env.PORT || 3003;

export const PUBLIC_KEY = `-----BEGIN PUBLIC KEY-----\n${process.env.PUBLIC_KEY}\n-----END PUBLIC KEY-----`
