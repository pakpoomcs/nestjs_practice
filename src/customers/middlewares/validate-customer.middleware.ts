import { NestMiddleware } from "@nestjs/common";
import e, { NextFunction, Request, Response } from "express";

export class ValidateCustomerMiddleWare implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        console.log('Inside ValidateCustomerMiddleWare')

        const { auth } = req.headers;
        console.log({ auth })
        next();
        // if (!auth) return res.status(403).send({ error: "No authentication provided" })
        // else next();

        // if (auth === '123') {
        //     next();
        // } else {
        //     return res.status(401).send({ error: 'Wrong authentication!' });
        // }
    }
}
