import { Request, Response } from 'express';
interface AuthenticatedRequest extends Request {
    user?: {
        id: string;
        [key: string]: any;
    };
}
export declare const getHabits: (req: AuthenticatedRequest, res: Response) => Promise<void>;
export declare const createHabit: (req: AuthenticatedRequest, res: Response) => Promise<void>;
export declare const updateHabit: (req: AuthenticatedRequest, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const toggleHabit: (req: AuthenticatedRequest, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const deleteHabit: (req: AuthenticatedRequest, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export {};
//# sourceMappingURL=habitController.d.ts.map