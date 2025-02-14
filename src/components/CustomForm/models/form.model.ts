import { z } from 'zod';

export const schema = z
  .object({
    name: z.string().min(1, 'The field name is mandatory'),
    email: z
      .string()
      .email('The email is invalid')
      .min(1, 'The field email is mandatory'),
    password: z.string().min(8, 'The password must have at least 8 characters'),
    confirmPassword: z
      .string()
      .min(8, 'The password must have at least 8 characters'),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'The passwords do not match',
    path: ['confirmPassword'],
  });

export type FormValues = z.infer<typeof schema>;
