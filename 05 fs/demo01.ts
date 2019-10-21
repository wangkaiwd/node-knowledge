import fs from 'fs';
import * as path from 'path';

const isFileExist = (path: string, callback: (isExist: boolean) => void): void => {
  fs.access(path, fs.constants.F_OK, (err) => {
    callback(!err);
  });
};

isFileExist(path.resolve(__dirname, './test.ts'), (isExist) => {
  console.log('isExist', isExist);
});
