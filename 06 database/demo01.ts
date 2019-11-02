import { FieldInfo, MysqlError } from 'mysql';

const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
});

connection.connect();
// 1. 不存在的情况下创建表： if not exists
// 2. mysql utf8 bug: 不明白为什么在命令行中文会显示??
connection.query('CREATE DATABASE IF NOT EXISTS foo DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci', (error: MysqlError, results: any, fields: FieldInfo) => {
  if (error) throw error;
});

connection.query('USE foo', () => {

});
connection.query('CREATE TABLE IF NOT EXISTS authors (id INT, name VARCHAR(20), email VARCHAR(20))');
connection.query('INSERT INTO authors (id,name,email) VALUES(1,"小明","test@gmail.com")');
connection.query(`SELECT * FROM authors`, (err: MysqlError, result: any, fields: FieldInfo) => {
  if (err) {throw err;}
  console.log('select result:', result, fields);
});

connection.end();
