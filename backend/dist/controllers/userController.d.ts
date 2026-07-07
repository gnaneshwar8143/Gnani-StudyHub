import { Request, Response } from 'express';
interface AuthenticatedRequest extends Request {
    user?: {
        id: string;
        [key: string]: any;
    };
}
export declare const getProfile: (req: AuthenticatedRequest, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const updateProfile: (req: AuthenticatedRequest, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getStats: (req: AuthenticatedRequest, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const updateStats: (req: AuthenticatedRequest, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export {};
//# sourceMappingURL=userController.d.ts.map