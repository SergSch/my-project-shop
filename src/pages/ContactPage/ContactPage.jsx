import React from 'react';
import classes from './ContactPage.module.css';

import { useForm } from 'react-hook-form';
import SubHeader from '../../components/SubHeader/SubHeader';
import Button from './../../UI/Button/Button';
import AddressBlock from '../../layout/AddressBlock/AddressBlock';

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleForm = (formData) => {
    console.log(formData);
  };
  return (
    <div>
      <SubHeader page={'Contact'} />
      <div className="container">
        <div className={classes.wrap}>
          <div className={classes.titleBlock}>
            <h2>Get In Touch With Us</h2>
            <p>
              For More Information About Our Product & Services. Please Feel
              Free To Drop Us An Email. Our Staff Always Be There To Help You
              Out. Do Not Hesitate!
            </p>
          </div>
          <div className={classes.contactBlock}>
            <AddressBlock />
            <form className={classes.form} onSubmit={handleSubmit(handleForm)}>
              <label htmlFor="firstname">
                Your name
                <input
                  type="text"
                  name=""
                  id="firstname"
                  placeholder="Abc"
                  {...register('firstname')}
                />
              </label>
              <label htmlFor="" email>
                Email address
                <input
                  type="text"
                  name=""
                  id="email"
                  placeholder="Abc@def.com"
                  {...register('email')}
                />
              </label>
              <label htmlFor="subject">
                Subject
                <input
                  type="text"
                  name=""
                  id="subject"
                  placeholder="This is an optional"
                  {...register('subject')}
                />
              </label>
              <label htmlFor="Message">
                Message
                <textarea
                  id="Message"
                  cols="30"
                  rows="2"
                  placeholder="Hi! i’d like to ask about"
                  {...register('textMessage')}
                ></textarea>
              </label>
              <Button text={'Submit'} color />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
