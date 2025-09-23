import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

@Injectable()
export class PaginationMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    if (req.method === 'GET') {
      req.query.page = req.query.page ? parseInt(req.query.page as string, 10).toString(): '1';
      req.query.limit = req.query.limit ? parseInt(req.query.limit as string, 10).toString(): '10';
      
      if (Number(req.query.limit) > 50) req.query.limit = '50';
    }
    next();
  }
}