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

// 不存在foo数据库的情况下进行创建
connection.query('CREATE DATABASE IF NOT EXISTS foo DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci', (error: MysqlError, results: any, fields: FieldInfo) => {
  if (error) throw error;
});

// 使用foo数据库
connection.query('USE foo', () => {

});

// 在foo数据库中创建authors表，并定义字段及其类型： id, name, email
connection.query('CREATE TABLE IF NOT EXISTS authors (id INT, name VARCHAR(20), email VARCHAR(20))');

// 为authors表中插入一行记录
connection.query('INSERT INTO authors (id,name,email) VALUES(1,"小明","test@gmail.com")');

// 查询authors表中的所有内容
connection.query(`SELECT * FROM authors`, (err: MysqlError, result: any, fields: FieldInfo) => {
  if (err) {throw err;}
  console.log('select result:', result, fields);
});

connection.end();
