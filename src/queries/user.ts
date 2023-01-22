import { Pool } from 'pg'
import pool from '../db/db'

const createUserSQL = `
  INSERT INTO users (email, password)
  VALUES ($1, $2) RETURNING *;
`

interface CreateUserParams {
  id: number
  email: string
  password: string
  created_at: Date
}

export const createUser = async (email: string, password: string): Promise<CreateUserParams> => {
  try {
    const result = await pool.query(createUserSQL, [email, password])
    return result.rows[0]
  } catch (err: unknown) {
    console.log(err)
    throw new Error('ユーザー登録の際にサーバーエラーが発生しました')
  }
}
