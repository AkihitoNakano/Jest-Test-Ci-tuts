import { Pool } from 'pg'
import 'dotenv/config'

const pool = new Pool({
  user: 'root',
  host: 'localhost',
  database: 'test_dev',
  password: process.env.DB_PASS,
  port: 5432,
})

export default pool
