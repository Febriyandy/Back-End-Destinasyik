import mysql from 'mysql2/promise';

const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: 'Febriyandy23',
  database: 'website',
};

const createConnection = async () => {
  try {
    const connection = await mysql.createConnection(dbConfig);
    console.log('Connected to the database');
    return connection;
  } catch (error) {
    console.error('Error connecting to the database:', error.message);
    throw error;
  }
};

export default createConnection;
