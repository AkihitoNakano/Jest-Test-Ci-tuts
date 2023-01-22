export const add = (a: number, b: number) => {
  return a + b
}

export const divide = (a: number, b: number): { result: number; err: undefined | string } => {
  if (b == 0) {
    return { result: 0, err: '分母が0です' }
  }
  return { result: a / b, err: undefined }
}
