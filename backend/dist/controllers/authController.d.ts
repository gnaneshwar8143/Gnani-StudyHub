import { Request, Response } from 'express';
export declare const signup: (req: Request, res: Response) => Promise<void>;
export declare const login: (req: Request, res: Response) => Promise<void>;
export declare const forgotPassword: (req: Request, res: Response) => Promise<void>;
export declare const verifyEmail: (req: Request, res: Response) => Promise<void>;
export declare const resetPassword: (req: Request, res: Response) => Promise<void>;
export declare const googleRedirect: (req: Request, res: Response) => void;
export declare const googleCallback: (req: Request, res: Response) => Promise<void>;
export declare const githubRedirect: (req: Request, res: Response) => void;
export declare const githubCallback: (req: Request, res: Response) => Promise<void>;
//# sourceMappingURL=authController.d.ts.map