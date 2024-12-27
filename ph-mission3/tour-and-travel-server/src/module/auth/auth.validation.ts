import { z } from 'zod'

const loginValidationSchema = z.object({
  email: z
    .string({
      required_error: 'Email must be provided and must be a string',
    })
    .email(),
  password: z.string({
    required_error: 'Password must be provided and must be a string',
  }),
})

export const AuthValidation = {
  loginValidationSchema,
}
