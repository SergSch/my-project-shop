import React, { useEffect, useState } from 'react';
import classes from './CheckoutPage.module.css';
import { useForm } from 'react-hook-form';
import SubHeader from '../../components/SubHeader/SubHeader';
import Button from '../../UI/Button/Button';
import { fetchCountry } from '../../utils/requests';

const CheckoutPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetchCountry(setCountries);
  }, []);

  const handleForm = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div>
      <SubHeader page={'Checkout'} />
      <div className="container">
        <div className={classes.wrap}>
          <h2 className={classes.title}>Billing details</h2>
          <form className={classes.form} onSubmit={handleSubmit(handleForm)}>
            <div className={classes.inputsBlock}>
              <div className={classes.names}>
                <label htmlFor="firstName">
                  First Name
                  <input
                    type="text"
                    id="firstName"
                    {...register('firstname', {
                      required: 'Please fill in this field',
                      minLength: {
                        value: 3,
                        message: 'too short name',
                      },
                      maxLength: {
                        value: 10,
                        message: 'Too long name',
                      },
                      pattern: {
                        value: /^[a-zA-Z]*$/,
                        message: 'Incorrect name',
                      },
                    })}
                  />
                </label>
                <p style={{ color: 'red' }} className={classes.text}>
                  {errors.firstname?.message}
                </p>

                <label htmlFor="lastName">
                  Last Name
                  <input
                    type="text"
                    id="lastName"
                    {...register('lastname', {
                      required: 'Please fill in this field',
                      minLength: {
                        value: 2,
                        message: 'Too short lastname',
                      },
                      maxLength: {
                        value: 10,
                        message: 'Too long lastname',
                      },
                      pattern: {
                        value: /^[a-zA-Z]*$/,
                        message: 'Incorrect lastname',
                      },
                    })}
                  />
                </label>
                <p className={classes.lastname}>{errors.lastname?.message}</p>
              </div>

              <label htmlFor="company">
                Company Name (Optional)
                <input type="text" name="" id="company" />
              </label>

              <label htmlFor="country">
                Country / Region
                <select name="" id="">
                  {countries &&
                    countries.map((elem) => (
                      <option key={elem.name?.common}>
                        {elem.name?.common}
                      </option>
                    ))}
                </select>
              </label>

              <label htmlFor="street">
                Street address
                <input
                  type="text"
                  name=""
                  id="street"
                  {...register('street', {
                    required: 'Please fill in this field',
                    minLength: {
                      value: 3,
                      message: 'Too short streets name',
                    },
                    maxLength: {
                      value: 16,
                      message: 'Too long ',
                    },
                  })}
                />
              </label>
              <p style={{ color: 'red' }}>{errors.street?.message}</p>

              <label htmlFor="town">
                Town / City
                <input
                  type="text"
                  name=""
                  id="town"
                  {...register('city', {
                    required: 'Please fill in this field',
                    minLength: {
                      value: 2,
                      message: 'Too short city name',
                    },
                    maxLength: {
                      value: 10,
                      message: 'Too long city name',
                    },
                    pattern: {
                      value: /^[a-zA-Z]*$/,
                      message: 'Incorrect city',
                    },
                  })}
                />
              </label>
              <p style={{ color: 'red', right: '50px' }}>
                {errors.city?.message}
              </p>

              <label htmlFor="province">
                Province
                <select name="" id="province">
                  <option value="">Western Province</option>
                  <option value="">Eastern Province</option>
                  <option value="">North Province</option>
                  <option value="">South Province</option>
                </select>
              </label>

              <label htmlFor="zipCode">
                ZIP code
                <input
                  type="text"
                  name=""
                  id="zipCode"
                  {...register('code', {
                    required: 'Please fill in this field',
                    minLength: {
                      value: 3,
                      message: 'too short name',
                    },
                    maxLength: {
                      value: 10,
                      message: 'Too long name',
                    },
                    pattern: {
                      value: /^[0-9]{5}$/,
                      message: 'Incorrect code',
                    },
                  })}
                />
              </label>
              <p style={{ color: 'red', right: '50px' }}>
                {errors.code?.message}
              </p>

              <label htmlFor="phone">
                Phone
                <input
                  type="text"
                  name=""
                  id="phone"
                  {...register('phone', {
                    required: 'Field must filled',
                    pattern: {
                      value: /\(?\+\(?49\)?[ ()]?([- ()]?\d[- ()]?){10}/g,
                      message: 'Please enter correct phone number',
                    },
                  })}
                />
              </label>
              <p style={{ color: 'red' }}>{errors.phone?.message}</p>

              <label htmlFor="email">
                Email address
                <input
                  type="text"
                  name=""
                  id="email"
                  {...register('email', {
                    required: 'Field must filled',
                    pattern: {
                      value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                      message: 'Please enter email asdf',
                    },
                  })}
                />
              </label>
              <p style={{ color: 'red' }}>{errors.email?.message}</p>

              <input
                type="text"
                name=""
                id=""
                placeholder="Additional information"
              />
            </div>

            <div className={classes.totalBlock}>
              <div className={classes.total}>
                <div style={{ textAlign: 'left' }}>
                  <h3>Product</h3>
                  <p>Asgaard sofa x 1</p>
                  <h4>Subtotal</h4>
                  <h4>Total</h4>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <h3>Subtotal</h3>
                  <p>Rs. 250,000.00</p>
                  <h6>Rs. 250,000.00</h6>
                  <h4>Rs. 250,000.00</h4>
                </div>
              </div>
              <div className={classes.line}></div>

              <div className={classes.checkBlock}>
                <label htmlFor="Direct">
                  <input type="checkbox" name="" id="Direct" />
                  Direct Bank Transfer
                </label>
                <p>
                  Make your payment directly into our bank account. Please use
                  your Order ID as the payment reference. Your order will not be
                  shipped until the funds have cleared in our account.
                </p>
                <label htmlFor="Bank">
                  <input type="checkbox" name="" id="Bank" />
                  Direct Bank Transfer
                </label>
                <label htmlFor="Cash">
                  <input type="checkbox" name="" id="Cash" />
                  Cash On Delivery
                </label>
                <p>
                  Your personal data will be used to support your experience
                  throughout this website, to manage access to your account, and
                  for other purposes described in our privacy policy.
                </p>
              </div>

              <Button text={'Place order'} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
