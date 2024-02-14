import React from 'react';
import { useForm } from 'react-hook-form';
import classes from './Newsletter.module.css';

const Newsletter = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const emailData = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div className={classes.wrap}>
      <h5>Newsletter</h5>
      <form className={classes.form} onSubmit={handleSubmit(emailData)}>
        <input
          {...register('email', {
            required: 'Field must be filled',
            pattern: {
              value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
              message: 'Please enter correct email',
            },
          })}
          type="text"
          placeholder="Enter Your Email Address"
          className={classes.input}
        />
        <button className={classes.btn}>SUBSCRIBE</button>
      </form>
      {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
    </div>
  );
};

export default Newsletter;
