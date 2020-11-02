import { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import FacebookIcon from '@material-ui/icons/Facebook';
import { Link, Redirect } from 'react-router-dom';

import google from './../../google.svg';
import callAPI from './../../until/callAPI'

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    button: {
        margin: theme.spacing(1),
    },
}));

export default function SignIn() {
    const [isLogin, setisLogin] = useState(false);
    const [user, setUser] = useState({
        email: "",
        password: ""
    });
    const classes = useStyles();

    const handleClick = (event) => {
        event.preventDefault();
        callAPI('auth/login', 'POST', {
            email: user.email,
            password: user.password
        }).then(res => {
            localStorage.setItem('token', JSON.stringify(res.data.access_token));
            setisLogin(true);
        }).catch(err => {
            alert("Sai tài khoản, mật khẩu!");
        })

    }

    const handleChange = (event) => {
        const { target } = event;
        const { name, value } = target;
        console.log(name, value)
        setUser({
            ...user,
            [name]: value
        })
    }

    console.log(user)
    if (isLogin) return <Redirect to={process.env.PUBLIC_URL}></Redirect>

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={user.email}
                        onChange={handleChange}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={user.password}
                        onChange={handleChange}
                    />
                    <Grid container justify="space-between" alignItems="center">
                        <Grid item>
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                        </Grid>
                        <Grid item>
                            <Link to='#' variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                    </Grid>

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={handleClick}
                    >
                        Sign In
                    </Button>


                </form>

                <Typography component="p" variant="h6">
                    Or login with
                </Typography>

                <Grid container justify="space-between">
                    <Grid item>
                        <Button
                            variant="contained"
                            className={classes.button}
                            startIcon={<FacebookIcon style={{ color: "blue" }} />}
                            style={{ color: "blue" }}
                        >
                            Facebook
                        </Button>
                    </Grid>

                    <Grid item>
                        <Button
                            variant="contained"
                            className={classes.button}
                            style={{ color: "blue" }}
                        >
                            <img src={google} alt="google" style={{ margin: "0px 8px 0px 0px" }}></img>
                            Facebook
                        </Button>
                    </Grid>
                </Grid>

                <Link to={process.env.PUBLIC_URL + '/signup'} style={{ margin: "24px 0px 0px 0px", color: "#3f51b5" }}>
                    {"Don't have an account? Sign Up"}
                </Link>

            </div>
        </Container >

    );
}