import * as bodyParser from 'body-parser';
import * as compression from 'compression';
import * as cookieParser from 'cookie-parser';
import * as cors from 'cors';
import * as helmet from 'helmet';
import { IServer } from '../interfaces/server.interface';

export default class Middleware {
  static init(server: IServer): void {

    // express middleware
    server.app.use(bodyParser.urlencoded({ extended: false }));
    server.app.use(bodyParser.json());
    server.app.use(cookieParser());
    server.app.use(compression());
    server.app.use(helmet());
    server.app.use(cors());

    // cors
    server.app.use((req, res, next) => {
      res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS ');
      res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With,' +
        ' Content-Type, Accept,' +
        ' Authorization,' +
        ' Access-Control-Allow-Credentials,' +
        ' Access-Control-Allow-Origin'
      );
      res.header('Access-Control-Allow-Credentials', 'true');
      res.header('Access-Control-Allow-Origin', '*');
      next();
    });
  }
}
