import { add, divide } from './math'

describe('add', () => {
  it('case 1+1', () => {
    expect(add(1, 1)).toBe(2)
  })
  it('case: 10 + 100', () => {
    expect(add(10, 100)).toBe(110)
  })
})

describe('divide', () => {
  describe('正常系テスト', () => {
    it('case 4/2', () => {
      const res = divide(4, 2)
      expect(res.result).toBe(2)
      expect(res.err).toBeUndefined()
    })
    it('case 10.7/-1', () => {
      const res = divide(10.7, -1)
      expect(res.result).toBe(-10.7)
      expect(res.err).toBeUndefined()
    })
  })
  describe('異常系テスト', () => {
    it('case 3/0', () => {
      const res = divide(3, 0)
      expect(res.err).toBe('分母が0です')
    })
  })
})
