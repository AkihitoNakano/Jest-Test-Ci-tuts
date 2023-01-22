import supertest from 'supertest'
import app from '../app'
import pool from '../db/db'

describe('user routesのテスト', () => {
  beforeEach(async () => {
    await pool.query('DELETE FROM users;')
  })

  it('Create user with valid values', async () => {
    const user = { email: 'abc@r.com', password: 'abcd' }
    const result = await supertest(app).post('/user').send(user)
    expect(result.body.email).toBe(user.email)
    expect(result.body.password).toBe(user.password)
  })
  it('Failed to create user with invalid email value', async () => {
    const user = { email: '', password: 'aefwa' }
    const result = await supertest(app).post('/user').send(user)
    expect(result.statusCode).toBe(500)
    expect(result.text).toBe('ユーザー登録できませんでした')
  })
})
