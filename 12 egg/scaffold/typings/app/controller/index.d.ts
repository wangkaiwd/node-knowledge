// This file is created by 12 egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome from '../../../app/controller/home';

declare module 'egg' {
  interface IController {
    home: ExportHome;
  }
}
