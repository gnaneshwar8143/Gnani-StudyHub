import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    [key: string]: any;
  };
}

export const protect = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const secret: string = process.env.JWT_SECRET || process.env.JWT_ACCESS_SECRET || 'fallback_secret_123';

      // Typecasting the verify method as any avoids legacy module typing blockages
      const decoded = (jwt.verify as any)(token, secret) as { id?: string; userId?: string };
      req.user = { id: decoded.id || decoded.userId || '' };

      return next();
    } catch (error) {
      return res.status(401).json({ message: 'Authorization verification failed. Token invalid.' });
    }
  }

  if (!token) {
    return res.status(401).json({ message: 'No authorization token discovered.' });
  }
};