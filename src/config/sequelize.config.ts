import dotenv from 'dotenv'
dotenv.config()

const config = {
  development: {
    username: 'pino',
    password: 'qwer1595',
    database: 'Jooman',
    host: '210.223.18.224 : 3306',
    dialect: 'mysql',
  },
}

export default config