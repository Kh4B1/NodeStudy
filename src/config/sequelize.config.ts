import dotenv from 'dotenv'
dotenv.config()

const config = {
  development: {
    username: 'pino',
    password: 'qwer1595',
    database: 'jooman',
    host: '210.223.18.224',
    dialect: 'mysql',
  },
}

export default config