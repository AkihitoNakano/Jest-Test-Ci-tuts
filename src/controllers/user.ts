import { Response, Request } from 'express'

import * as queries from '../queries/user'

interface UserRequestParams {
  email: string
  password: string
}

const checkValues = (text: string): boolean => {
  if (text.trim() === '' || !text) {
    return false
  }
  return true
}

export const createUser = async (req: Request, res: Response) => {
  const body: UserRequestParams = req.body
  try {
    // console.log(body, !checkValues(body.email))
    if (!checkValues(body.email)) throw new Error()
    if (!checkValues(body.password)) throw new Error()

    const result = await queries.createUser(body.email, body.password)

    res.send(result)
  } catch (err: unknown) {
    console.log(err)
    res.status(500).send('ユーザー登録できませんでした')
  }
}
