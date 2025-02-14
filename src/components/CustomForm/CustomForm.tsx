import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import CustomInput from './components/CustomInput';
import { FormValues, schema } from './models';

export function CustomForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: 'onBlur',
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  function onSubmit(data): SubmitHandler<FormValues> {
    console.log(data);
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <CustomInput
        name='name'
        control={control}
        label='Name'
        type='text'
        error={errors.name}
      />
      <CustomInput
        name='email'
        control={control}
        label='Email'
        type='email'
        error={errors.email}
      />
      <CustomInput
        name='password'
        control={control}
        label='Password'
        type='password'
        error={errors.password}
      />
      <CustomInput
        name='confirmPassword'
        control={control}
        label='Confirm Password'
        type='password'
        error={errors.confirmPassword}
      />
      <button type='submit'>Submit</button>
    </form>
  );
}
