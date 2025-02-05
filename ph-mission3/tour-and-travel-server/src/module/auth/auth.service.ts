import { IUser } from '../user/user.interface'
import User from '../user/user.model'
import { ILoginUser } from './auth.interface'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const register = async (payload: IUser) => {
  const result = await User.create(payload)
  return result
}

const login = async (payload: ILoginUser) => {
  const user = await User.findOne({ email: payload.email }).select('+password')
  console.log(user)

  if (!user) {
    throw new Error('User not found')
  }

  const userStatus = user?.userStatus
  if (userStatus === 'inactive') {
    throw new Error('User is inactive')
  }

  const isPasswordMatch = await bcrypt.compare(payload.password, user?.password)

  if (!isPasswordMatch) {
    throw new Error('Invalid password')
  }

  const token = jwt.sign({ email: user?.email, role: user?.role }, 'secret', {
    expiresIn: '30d',
  })

  const rest = {
    name: user?.name,
    email: user?.email,
    role: user?.role,
  }

  return {
    token,
    rest,
  }
}

export const AuthService = {
  register,
  login,
}
