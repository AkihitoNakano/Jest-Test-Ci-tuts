import * as utils from './utils'

describe('UtilsのUnitテスト', () => {
  describe('正常性テスト', () => {
    test('bcryptを使ったパスワードのhash化と照合テスト', () => {
      const password = '123fewiifqaw'
      const hashedPass = utils.hashText(password)
      const isMatch = utils.compareText(password, hashedPass)
      expect(isMatch).toBe(true)
    })
  })
  describe('異常性テスト', () => {
    test('bcryptjsを用いた間違ったパスワードの照合', () => {
      const password = '123fewiifqaw'
      const password2 = '123fewiifqae'
      const hashedPass = utils.hashText(password)
      const isMatch = utils.compareText(password2, hashedPass)
      expect(isMatch).toBe(false)
    })
  })
})
