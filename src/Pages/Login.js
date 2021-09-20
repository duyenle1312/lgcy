import { useState, useContext, useEffect } from "react";
import * as ROUTES from '../constants/routes';
import FirebaseContext from '../context/firebase';
import { useHistory } from 'react-router-dom';
import React from "react";
import { Grid, makeStyles } from "@material-ui/core"; //npm install @material-ui/core
import AppStore from "../Assets/appstore.png";
//import { Link } from "react-router-dom";
import SocialMedia from '../components/socialmedia';

const useStyles = makeStyles((theme) => ({
    input: {
        border: "0.5px solid #e6e8f2",
        width: "100%",
        height: 50,
        fontSize: "3vmin",
        textAlign: "center",
        boxShadow: "0px 3px 3px rgba(0, 0, 0, 0.25)",
        fontFamily: "Radley",
        "&::placeholder": {
            color: "black",
        },
        marginBottom: 20,
    },
    button: {
        border: "none",
        //borderBottom: "1px solid white",
        width: "100%",
        background: "transparent",
        height: 50,
        fontSize: "3vmin",
        textAlign: "center",
        //boxShadow: "0px 4px 4px rgba(0, 0, 0.25, 0.25)",
        fontFamily: "Radley",
        color: "white",
        marginBottom: "-30%",
        padding: 15,
        //marginLeft: 30,
    },
    login: {
        border: "none",
        //borderBottom: "1px solid #e9e9e9",
        width: "100%",
        background: "black",
        height: 50,
        fontSize: "3vmin",
        textAlign: "center",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        fontFamily: "Radley",
        color: "white",
        borderRadius: 100,
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: "#fff",
    },
    brandNameDiv: {
        height: "70vh",
        background: "white",
        [theme.breakpoints.down("sm")]: {
            height: "30vh",
        },
    },
    otherDiv: {
        height: "74.5vh",
        background: "white",
        [theme.breakpoints.down("sm")]: {
            height: "30vh",
        },
    },
    bottomText: {
        fontSize: 19,
        fontFamily: "Radley",
        width: "100%",
        textAlign: "center",
        margin: 0,
        marginTop: 40,
    },
    footer: {
        color: "white",
    },
    socialContainer: {
        height: "100%",
        background: "black",
        paddingBottom: "1.3%",
        paddingTop: "1.3%",
    },
}));

export default function Login() {
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);

    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState('');
    const isInvalid = password === '' || emailAddress === '';

    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            await firebase.auth().signInWithEmailAndPassword(emailAddress, password);
            history.push(ROUTES.DASHBOARD);
        } catch (error) {
            setEmailAddress('');
            setPassword('');
            setError(error.message);
        }
    };

    useEffect(() => {
        document.title = 'Log In | lgcy';
    }, []);

    const classes = useStyles();
    return (
        <div>
            <Grid
                container direction="row"
                style={{ width: "100%" }}
            >
                <Grid item md={7} sm={7}>
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                        className={classes.brandNameDiv}
                    //style={{ border: "1px solid black" }}
                    >
                        <p
                            style={{
                                fontSize: "24vmin",
                                // color: "white",
                                fontFamily: "Radley",
                                width: "100%",
                                textAlign: "center",
                                margin: 0,
                            }}
                        >
                            lgcy
                    </p>
                        <p
                            style={{
                                fontSize: "5vmin",
                                // color: "white",
                                fontFamily: "Radley",
                                width: "100%",
                                textAlign: "center",
                                margin: 0,
                                //marginTop: 30,
                                marginBottom: "7%",
                            }}
                        >
                            Share your story
                    </p>
                        <a href="https://apps.apple.com/ca/app/lgcy/id1436702445">
                            <img
                                src={AppStore}
                                alt="app store logo"
                                style={{ height: 43, width: 130 }}
                            ></img>
                        </a>
                    </Grid>
                </Grid>

                <Grid item md={5} sm={5}>
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="left"
                        className={classes.otherDiv}
                        style={{ marginTop: "5%" }}
                    >
                        <div style={{ width: "60%", textAlign: 'center' }}>
                        <form onSubmit={handleLogin} method="POST">
                        <input
                            className={classes.input}
                            name="email"
                            required
                            aria-label="Enter your email address"
                            type="email"
                            placeholder="Email"
                            onChange={({ target }) => setEmailAddress(target.value)}
                            value={emailAddress}
                        ></input>
                        <input
                            className={classes.input}
                            type="password"
                            required
                            name="password"
                            aria-label="Enter your email address"
                            placeholder="Password"
                            onChange={({ target }) => setPassword(target.value)}
                            value={password}
                        ></input>
                            {error && <p className="mb-4 text-xs text-red-primary">{error}</p>}
                        <button
                            type="submit"
                            value={"Log In"}
                            // Take care of the class below
                            className={`bg-blue-medium text-white w-full rounded h-8 font-bold ${isInvalid && 'opacity-50'}`}
                            className={classes.login}
                        >Log In</button>
                        </form>
                        <p style={{ margin: "5%", fontSize: "2.5vmin", marginLeft: "9%", fontFamily: "Radley", }}>
                            Forgot password? Reset password <a href="/"><b>here</b></a>!
                        </p>
                        <a href="./signup">
                            <button className={classes.login} style={{ }}>
                                Sign Up
                            </button>
                        </a>
                        </div>
                    </Grid>
                    {/*<Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="left"
                        className={classes.otherDiv}
                    //style={{ border: "1px solid black" }}
                    >
                        <h1 style={{ marginTop: "6%", fontFamily: "Radley", fontSize: '5vmin' }}>Welcome to lgcy!</h1>
                    </Grid>*/}
                </Grid>
            </Grid>

            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                className={classes.socialContainer}
            //style={{ border: "1px solid white" }}
            >
                <Grid item md={7} sm={7}>
                    <Grid style={{ display: "flex" }} className={classes.footer} >
                        <a href="./legal">
                            <button className={classes.button}>
                                About
                            </button>
                        </a>
                        <a href="./legal">
                            <button className={classes.button}>
                                Contact
                            </button>
                        </a>
                        <a href="./legal">
                            <button className={classes.button}>
                                Guidelines
                            </button>
                        </a>
                        <a href="./legal">
                            <button className={classes.button}>
                                Terms of Use
                            </button>
                        </a>
                        <a href="./legal">
                            <button className={classes.button}>
                                Privacy Policy
                            </button>
                        </a>
                        <a href="./legal">
                            <button className={classes.button}>
                                Cookies Policy
                            </button>
                        </a>
                    </Grid>
                </Grid>
            </Grid>
            <Grid
                style={{ marginTop: "-0.8%" }}
                className={classes.socialContainer}
            >
                <SocialMedia />
            </Grid>
        </div>
    );
};