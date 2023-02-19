import 'dotenv/config';
import express, {
  ErrorRequestHandler,
  NextFunction,
  Request,
  Response,
} from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import { routerV1 } from './router';
import mongoose from 'mongoose';

class App {
  private express;

  private constructor() {
    this.express = express();

    this.Middlewares();
    this.Router();
  }

  static Init(port?: number, callback?: () => void | undefined) {
    const app = new App();
    const checkPort = port || 3000;

    return app.express.listen(checkPort, callback);
  }

  private Middlewares() {
    this.express.use(cors());
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
    mongoose.connect(`${process.env.MONGO_CONNECTION}`);
  }

  private Router() {
    this.express.use('/v1', routerV1);

    this.express.use('*', (_, res) => {
      res.status(404).send('Route does not exist');
    });
  }
}

const port = 3000;

App.Init(port, () => {
  console.clear();
  console.log(`> Server On (${port})`);
});
