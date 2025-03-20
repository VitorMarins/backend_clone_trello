import jwt from 'jsonwebtoken';

const secretKey = process.env.JWT_SECRET || 'your-secret-key';
const expiresIn = '10h';

export const gerarToken = (payload: object): string => {
    return jwt.sign(payload, secretKey, { expiresIn });
};

export const verificarToken = (token: string): object | null => {
    try {
        return jwt.verify(token, secretKey) as object;
    } catch (error) {
        console.error('Token Invalido:', error);
        return null;
    }
};