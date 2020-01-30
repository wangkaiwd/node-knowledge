import fs from 'fs';
import * as path from 'path';

const storePath = path.resolve(__dirname, './test.json');
const storeObject = {
  k1: 'v1',
  k2: 'v2'
};

const isFileExist = (path: string, callback: (isExist: boolean) => void): void => {
  // tests a user's permissions for the file or directory specified by path
  fs.access(path, fs.constants.F_OK, (err) => {
    callback(!err);
  });
};

isFileExist(path.resolve(storePath), (isExist) => {
  if (!isExist) {
    // asynchronously append data to a file, creating the file if ti does not exist. data can be a string or a Buffer
    fs.appendFile(storePath, JSON.stringify(storeObject), (err) => {
      if (err) console.log(err);
    });
  } else {
    fs.readFile(storePath, (err, data) => {
      if (err) console.log(err);
      if (data) {
        console.log(data.toString());
      }
    });
  }
});
