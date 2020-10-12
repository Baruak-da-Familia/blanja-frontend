import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

// import { Button, FormGroup, FormControl } from "react-bootstrap"
import corpName from '../../assets/img/logo.png'
import classname from "../../helpers/classJoiner";
import styles from './styles.module.css'

const Login = () => {
    const [userType, setUserType] = useState(false)
    const { handleSubmit, register, errors } = useForm();
    const onSubmit = (values) => {
        return console.log(values)
    };

    return (
        <div className={classname(styles.body)}>
            {userType === false ? (
                <div>
                    <form className={classname(styles.login)} onSubmit={handleSubmit}>
                        {/* <p className={classname(styles.corpName)}>Blanja</p> */}
                        <img
                            alt='logo'
                            className={classname(styles.logo)}
                            src={corpName}
                        />
                        <p className={classname(styles.desc)}>Please sign up with your account</p>
                        <div className={classname(styles.userType)}>
                            <button className={classname(styles.userTypeBtnCustomer)} >Customer</button>
                            <button className={classname(styles.userTypeBtnSeller)} onClick={(e) => {
                                e.preventDefault()
                                setUserType(true)
                            }}>Seller</button>
                        </div>
                        <form className={classname(styles.formContainer)} onSubmit={handleSubmit(onSubmit)}>

                            <p className={classname(styles.errMsg)}>
                                {errors.name && errors.name.message}
                            </p>
                            <div>
                                <input
                                    className={classname(styles.emailInput)}
                                    placeholder="Name"
                                    name="name"
                                    ref={register({
                                        required: "Required",
                                    })}
                                />

                            </div>

                            <p className={classname(styles.errMsg)}>
                                {errors.email && errors.email.message}
                            </p>
                            <div>
                                <input
                                    className={classname(styles.emailInput)}
                                    placeholder="Email"
                                    name="email"
                                    ref={register({
                                        required: "Required",
                                        pattern: {
                                            value: /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/,
                                            message: "email"
                                        }
                                    })}
                                />

                            </div>

                            <p className={classname(styles.errMsg)}>
                                {errors.phone_number && errors.phone_number.message}
                            </p>
                            <div>
                                <input
                                    className={classname(styles.emailInput)}
                                    placeholder="Phone number"
                                    name="phone_number"
                                    ref={register({
                                        required: "Required",
                                        pattern: {
                                            value: /^\s*[+-]?(\d+|\.\d+|\d+\.\d+|\d+\.)(e[+-]?\d+)?\s*$/,
                                            message: "Number"
                                        }
                                    })}
                                />
                            </div>

                            <p className={classname(styles.errMsg)}>
                                {errors.storeName && errors.storeName.message}
                            </p>
                            <div>
                                <input
                                    className={classname(styles.emailInput)}
                                    placeholder="Store Name"
                                    name="storeName"
                                    ref={register({
                                        required: "Required",
                                    })}
                                />

                            </div>
                            <p className={classname(styles.errMsg)}>
                                {errors.password && errors.password.message}
                            </p>
                            <div>
                                <input
                                    className={classname(styles.passwordInput)}
                                    placeholder="Password"
                                    name="password"
                                    ref={register({
                                        required: 'Required',
                                        pattern: {
                                            value: /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{8,}$/,
                                            message: 'Password'
                                        }
                                    })}
                                />

                            </div>
                            <button
                                className={classname(styles.loginSubmit)}
                                type="submit">
                                Submit
                    </button>

                        </form>

                    </form>
                    <div className={classname(styles.signUpBtn)}>
                        <p>Already have a Tokopedia account?   <span onClick={() => {
                        }}>
                            <Link
                                className={classname(styles.bla)}
                                to='/'>
                                Login
                        </Link>
                        </span></p>
                    </div>
                </div>

            ) : (<div>
                <form className={classname(styles.login)} onSubmit={handleSubmit}>
                    {/* <p className={classname(styles.corpName)}>Blanja</p> */}
                    <img
                        alt='logo'
                        className={classname(styles.logo)}
                        src={corpName}
                    />
                    <p className={classname(styles.desc)}>Please sign up with your seller account</p>
                    <div className={classname(styles.userType)}>
                        <button className={classname(styles.userTypeBtnCustomer)} onClick={(e) => {
                            e.preventDefault()
                            setUserType(false)
                        }}>Customer</button>
                        <button className={classname(styles.userTypeBtnSeller)} >Seller</button>
                    </div>
                    <form className={classname(styles.formContainer)} onSubmit={handleSubmit(onSubmit)}>

                        <p className={classname(styles.errMsg)}>
                            {errors.name && errors.name.message}
                        </p>
                        <div>
                            <input
                                className={classname(styles.emailInput)}
                                placeholder="Name"
                                name="name"
                                ref={register({
                                    required: "Required",
                                })}
                            />

                        </div>

                        <p className={classname(styles.errMsg)}>
                            {errors.email && errors.email.message}
                        </p>
                        <div>
                            <input
                                className={classname(styles.emailInput)}
                                placeholder="Email"
                                name="email"
                                ref={register({
                                    required: "Required",
                                    pattern: {
                                        value: /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/,
                                        message: "email"
                                    }
                                })}
                            />

                        </div>

                        <p className={classname(styles.errMsg)}>
                            {errors.phone_number && errors.phone_number.message}
                        </p>
                        <div>
                            <input
                                className={classname(styles.emailInput)}
                                placeholder="Phone number"
                                name="phone_number"
                                ref={register({
                                    required: "Required",
                                    pattern: {
                                        value: /^\s*[+-]?(\d+|\.\d+|\d+\.\d+|\d+\.)(e[+-]?\d+)?\s*$/,
                                        message: "Number"
                                    }
                                })}
                            />
                        </div>

                        <p className={classname(styles.errMsg)}>
                            {errors.storeName && errors.storeName.message}
                        </p>
                        <div>
                            <input
                                className={classname(styles.emailInput)}
                                placeholder="Store Name"
                                name="storeName"
                                ref={register({
                                    required: "Required",
                                })}
                            />

                        </div>
                        <p className={classname(styles.errMsg)}>
                            {errors.password && errors.password.message}
                        </p>
                        <div>
                            <input
                                className={classname(styles.passwordInput)}
                                placeholder="Password"
                                name="password"
                                ref={register({
                                    required: 'Required',
                                    pattern: {
                                        value: /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{8,}$/,
                                        message: 'Password'
                                    }
                                })}
                            />

                        </div>
                        <button
                            className={classname(styles.loginSubmit)}
                            type="submit">
                            Submit
                </button>

                    </form>

                </form>
                <div className={classname(styles.signUpBtn)}>
                    <p>Already have a Tokopedia account?   <span onClick={() => {
                    }}>
                        <Link
                            className={classname(styles.bla)}
                            to='/'>
                            Login
                    </Link>
                    </span></p>
                </div>
            </div>)}

        </div>
    )
}

export default Login
