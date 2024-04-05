import React from 'react';
import { useForm } from 'react-hook-form';
// zod is used for validation
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

interface Props {}

//do validations with zod
const signUpSchema = z.object({
  email: z.string().email(),
  password: z.string().min(10, 'Password should have 10 characters'),
});
function ReactForm(props: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm({
    resolver: zodResolver(signUpSchema),
  });
  //connect zod to form

  // with react hook form register every input

  const onSubmit = async (data: any) => {
    //we can use isSubmitting
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('email')} type='email' placeholder='email' />
      <input {...register('password')} type='password' placeholder='password' />
      {/* for error handling */}
      {errors.password && <p>{`${errors.password.message}`}</p>}

      <button type='submit' disabled={isSubmitting}>
        SUBMIT
      </button>
    </form>
  );
}

export default ReactForm;
