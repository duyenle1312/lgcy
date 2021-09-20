import React from "react";
import { Grid, makeStyles } from "@material-ui/core"; //npm install @material-ui/core
import AppStore from "../Assets/appstore.png";
//import { Link } from "react-router-dom";
import SocialMedia from '../components/socialmedia';

{/*const Details = props => {
    const { username, email, city, phone } =
        (props.location && props.location.state) || {};
    return (
        <div>
            <div>
                <div>
                    <strong>Username:</strong> {username}
                </div>
                <div>
                    <strong>Email:</strong> {email}
                </div>
                <div>
                    <strong>City:</strong> {city}
                </div>
                <div>
                    <strong>Phone:</strong> {phone}
                </div>
            </div>
        </div>
    );
};*/}

//export default Details;

const useStyles = makeStyles((theme) => ({
    input: {
        border: "0.5px solid #e6e8f2",
        width: "60%",
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
        width: "160%",
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
        width: "60%",
        background: "black",
        height: 50,
        fontSize: "3vmin",
        textAlign: "center",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        fontFamily: "Radley",
        color: "white",
        borderRadius: 100
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: "#fff",
    },
    brandNameDiv: {
        height: "78.6vh",
        background: "white",
        [theme.breakpoints.down("sm")]: {
            height: "30vh",
        },
    },
    otherDiv: {
        height: "75vh",
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
    //Details();
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
                    style={{ marginLeft: "3%" }}
                >
                    <p
                        style={{
                            fontSize: "24vmin",
                            marginTop: "-8%",
                            fontFamily: "Radley",
                            width: "100%",
                            textAlign: "center",
                            margin: 0,
                        }}
                    >
                        lgcy
                    </p>
                        {/*<p
                        style={{
                            fontSize: "5vmin",
                            // color: "white",
                            fontFamily: "Radley",
                            width: "100%",
                            textAlign: "center",
                            margin: 0,
                            //marginTop: 30,
                            marginBottom: "9%",
                        }}
                    >
                        Share your story
                    </p>*/}
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
                    {/*<Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="left"
                        className={classes.otherDiv}
                        style={{ marginTop: "8%", }}
                    >
                        <label style={{ marginBottom: "1.3%", fontSize: "3vmin", fontFamily: "Radley",}}>Email:</label>
                        <input
                            className={classes.input}
                            type="email"
                            name="email"
                            required
                            //placeholder="Email"
                        ></input>
                        <label style={{ marginBottom: "1.3%", fontSize: "3vmin", fontFamily: "Radley",}}>Password:</label>
                        <input
                            className={classes.input}
                            type="password"
                            required
                            name="Password"
                            //placeholder="Password"
                        ></input>
                        <input
                            className={classes.login}
                            type="button"
                            value={"Login"}
                        ></input>
                    </Grid>*/}
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="right"
                    className={classes.otherDiv}
                    style={{ textAlign: "center", margin: "0 auto", float: "right" }}
                    >
                        <div style={{ width: "30%", marginLeft: "18%", textAlign: "center" }}>
                            <p style={{ fontSize: "9vmin", marginTop: "6%", fontFamily: "Radley", }}>Share your story</p>
                        </div>                        
                </Grid>
            </Grid>
            </Grid>

            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                className={classes.socialContainer}
                //style={{ border: "1px solid black" }}
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
                style={{marginTop: "-0.8%"}}
                className={classes.socialContainer}
            >   
                <SocialMedia />
            </Grid>
    </div>
    );
};