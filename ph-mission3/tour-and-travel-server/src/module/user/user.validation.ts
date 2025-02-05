import { z } from 'zod'

const userValidationSchema = z.object({
  name: z
    .string({
      required_error: 'Name must be provided and must be a string',
    })
    .min(3)
    .max(50),
  age: z
    .number({
      required_error: 'Age must be provided and must be a number',
    })
    .int()
    .positive()
    .optional(),
  email: z
    .string({
      required_error: 'Email must be provided and must be a string',
    })
    .email(),
  password: z.string({
    required_error: 'Password must be provided and must be a string',
  }),
  photo: z.string().optional(),
})

export const userValidation = {
  userValidationSchema,
}
