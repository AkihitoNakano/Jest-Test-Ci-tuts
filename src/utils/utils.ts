import bcrypt from 'bcryptjs'

export const hashText = (text: string): string => {
  const salt = bcrypt.genSaltSync(10)
  return bcrypt.hashSync(text, salt)
}

export const compareText = (text: string, hashedText: string) => {
  return bcrypt.compareSync(text, hashedText)
}
