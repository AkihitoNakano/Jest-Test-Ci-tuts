import pool from '../db/db'
import * as users from './user'

describe('user queryのUnitテスト', () => {
  beforeAll(async () => {
    await pool.query('DELETE FROM users;')
  })
  describe('正常系test', () => {
    it('userの登録 case1', async () => {
      const user = { email: 'test@b.com', password: 'abcd' }
      const rsp = await users.createUser(user.email, user.password)
      expect(rsp.email).toBe(user.email)
      expect(rsp.password).toBe(user.password)
    })
  })
})
