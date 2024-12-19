// filepath: /home/christopher/Code/Timeclock/backend/src/types/express.d.ts
import { Request } from 'express';

declare module 'express-serve-static-core' {
  interface Request {
    user?: any; // Adjust the type according to your application's user object
  }
}