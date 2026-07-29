import { Request, Response } from 'express';
interface AuthenticatedRequest extends Request {
    user?: {
        id: string;
        [key: string]: any;
    };
}
export declare const getObjectives: (req: AuthenticatedRequest, res: Response) => Promise<void>;
export declare const createObjective: (req: AuthenticatedRequest, res: Response) => Promise<void>;
export declare const updateObjective: (req: AuthenticatedRequest, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const deleteObjective: (req: AuthenticatedRequest, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const create2MinTestReminder: (req: AuthenticatedRequest, res: Response) => Promise<void>;
export {};
//# sourceMappingURL=objectiveController.d.ts.map