import { AuthenticationError } from 'apollo-server'
import { encrypt, isPasswordMatch, setBase64 } from 'fogg-utils'
import { iAuthPayload, iModels, iUser } from 'interfaces'
import jwt from 'jsonwebtoken'
import { $security } from '../../config'

export const createToken = async (user: iUser): Promise<string[]> => {
  const { id, username, password, privilege, email, active } =  user
  const token = setBase64(`${encrypt($security.secretKey)}${password}`)
  const userData = {
    id,
    username,
    email,
    privilege,
    active,
    token
  }
  const createTk = jwt.sign(
    { data: setBase64(userData) },
    $security.secretKey,
    { expiresIn: $security.expiresIn }
  )
  return Promise.all([createTk])
}

export const getUsertBy = async (
  where: any,
  models: iModels
): Promise<iUser> => {
  const user = await models.User.findOne({
    where,
    raw: true
  })
  return user
}

export const doLogin = async (
  email: string,
  password: string,
  models: iModels
): Promise<iAuthPayload> => {
  const user = await getUsertBy({email}, models)
  if (!user) throw new AuthenticationError('Invalid login')
  const passwordMathch = isPasswordMatch(encrypt(password), user.password)
  const isActive = user.active
  if(!passwordMathch) throw new AuthenticationError('Invalid Login')
  if(!isActive) throw new AuthenticationError('Your account is not activated yet')
  const [token] = await createToken(user)
  return {
    token
  }

}
