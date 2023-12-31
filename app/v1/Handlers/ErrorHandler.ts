import { Request, Response, NextFunction } from "express";
import "dotenv/config";

const ErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  const error = {
    ...err,
    message: err.message,
    date: Date.now(),
  };

  if(process.env.NODE_ENV === 'production' ) {
    return res.status(500).send({
      message: 'An error occurred!'
    });
  }

  res.status(500).send(error);
}

export default ErrorHandler;
