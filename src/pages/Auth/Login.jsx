import React from 'react'
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
// import { Button, FormGroup, FormControl } from "react-bootstrap"
import corpName from '../../assets/img/logo.png'
import classname from "../../helpers/classJoiner";
import styles from './styles.module.css'

const Login = () => {
    const { handleSubmit, register, errors } = useForm();
    const onSubmit = (values) => {
        return console.log(values)
    };


    return (
        <div className={classname(styles.body)}>
            <div><form className={classname(styles.login)} onSubmit={handleSubmit}>
                {/* <p className={classname(styles.corpName)}>Blanja</p> */}
                <img
                    alt='logo'
                    className={classname(styles.logo)}
                    src={corpName}
                />
                <p className={classname(styles.desc)}>Please login with your account</p>
                <div className={classname(styles.userType)}>
                    <button className={classname(styles.userTypeBtnCustomer)}>Customer</button>
                    <button className={classname(styles.userTypeBtnSeller)}>Seller</button>
                </div>

                {/* <p className={classname(styles.userType)}>[user type]</p> */}

                {/* <p>Email</p> */}

                <form className={classname(styles.formContainer)} onSubmit={handleSubmit(onSubmit)}>

                    {errors.email && errors.email.message}
                    <div>
                        <input
                            className={classname(styles.emailInput)}
                            placeholder="Email"
                            name="email"
                            ref={register({
                                required: "Required",
                                pattern: {
                                    value: /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/,
                                    message: "bukan email"
                                }
                            })}
                        />
                    </div>

                    {errors.password && errors.password.message}
                    <div>
                        <input
                            className={classname(styles.passwordInput)}
                            placeholder="Password"
                            name="password"
                            ref={register({
                                required: "Required",
                                pattern: {
                                    value: /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{8,}$/,
                                    message: 'bukan password'
                                },
                                validate: value => value !== "admin" || "Nice try!"
                            })}
                        />
                    </div>
                    <p className={classname(styles.forgot)}>Forgot password?</p>
                    <button
                        className={classname(styles.loginSubmit)}
                        type="submit">
                        Submit
                    </button>
                </form>
            </form>
                <div className={classname(styles.signUpBtn)}>
                    <p>Don't have a Tokopedia account?   <span
                            onClick={() => {

                            }}>
                            <Link
                                className={classname(styles.bla)}
                                to='/Register'>
                                Register
                            </Link>
                        </span></p>
                </div></div>
        </div>
    )
}

export default Login
