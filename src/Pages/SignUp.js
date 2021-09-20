import { useState, useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import FirebaseContext from '../context/firebase';
import * as ROUTES from '../constants/routes';
import SocialMedia from '../components/socialmedia';
import AppStore from "../Assets/appstore.png";
import { Grid, makeStyles } from "@material-ui/core"; //npm install @material-ui/core
import { doesUsernameExist } from '../services/firebase';

const useStyles = makeStyles((theme) => ({
    input: {
        border: "0.5px solid #e6e8f2",
        width: "70%",
        height: 38,
        fontSize: "2.7vmin",
        textAlign: "center",
        boxShadow: "0px 3px 3px rgba(0, 0, 0, 0.25)",
        fontFamily: "Radley",
        "&::placeholder": {
            color: "black",
        },
        borderRadius: 18,
        marginBottom: 15,
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
        width: "70%",
        background: "black",
        height: 38,
        fontSize: "2.8vmin",
        textAlign: "center",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        fontFamily: "Radley",
        color: "white",
        borderRadius: 18,
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

export default function SignUp() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');
  const isInvalid = password === '' || emailAddress === '';

  const handleSignUp = async (event) => {
    event.preventDefault();

    const usernameExists = await doesUsernameExist(username);
    if (!usernameExists) {
      try {
        const createdUserResult = await firebase
          .auth()
          .createUserWithEmailAndPassword(emailAddress, password);

        // authentication
        // -> emailAddress & password & username (displayName)
        await createdUserResult.user.updateProfile({
          displayName: username
        });

        // firebase user collection (create a document)
        await firebase
          .firestore()
          .collection('users')
          .add({
            userId: createdUserResult.user.uid,
            username: username.toLowerCase(),
            fullName,
            emailAddress: emailAddress.toLowerCase(),
            following: ['2'],
            followers: [],
            dateCreated: Date.now()
          });

        history.push(ROUTES.DASHBOARD);
      } catch (error) {
        setFullName('');
        setEmailAddress('');
        setPassword('');
        setError(error.message);
      }
    } else {
      setUsername('');
      setError('That username is already taken, please try another.');
    }
  };

  useEffect(() => {
    document.title = 'Sign Up | lgcy';
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
                          <form onSubmit={handleSignUp} method="POST">
                              <input
                                  aria-label="Enter your username"
                                  type="text"
                                  placeholder="Username"
                                  className={classes.input}
                                  onChange={({ target }) => setUsername(target.value)}
                                  value={username}
                              />
                              <input
                                  aria-label="Enter your full name"
                                  type="text"
                                  placeholder="Full name"
                                  className={classes.input}
                                  onChange={({ target }) => setFullName(target.value)}
                                  value={fullName}
                              />
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
                              >Sign Up</button>
                          </form>
                          <p style={{ margin: "5%", fontSize: "2.5vmin", marginLeft: "9%", fontFamily: "Radley", }}>
                              You've already had an account?
                        </p>
                          <a href="./login">
                              <button className={classes.login} style={{}}>
                                  Log In
                            </button>
                          </a>
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

          {/*<div className="flex flex-col w-2/5">
        <div className="flex flex-col items-center bg-white p-4 border border-gray-primary mb-4 rounded">

          {error && <p className="mb-4 text-xs text-red-primary">{error}</p>}

          <form onSubmit={handleSignUp} method="POST">
            <input
              aria-label="Enter your username"
              type="text"
              placeholder="Username"
              className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
              onChange={({ target }) => setUsername(target.value)}
              value={username}
            />
            <input
              aria-label="Enter your full name"
              type="text"
              placeholder="Full name"
              className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
              onChange={({ target }) => setFullName(target.value)}
              value={fullName}
            />
            <input
              aria-label="Enter your email address"
              type="text"
              placeholder="Email address"
              className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
              onChange={({ target }) => setEmailAddress(target.value)}
              value={emailAddress}
            />
            <input
              aria-label="Enter your password"
              type="password"
              placeholder="Password"
              className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
              onChange={({ target }) => setPassword(target.value)}
              value={password}
            />
            <button
              disabled={isInvalid}
              type="submit"
              className={`bg-blue-medium text-white w-full rounded h-8 font-bold
            ${isInvalid && 'opacity-50'}`}
            >
              Sign Up
            </button>
          </form>
        </div>
        <div className="flex justify-center items-center flex-col w-full bg-white p-4 rounded border border-gray-primary">
          <p className="text-sm">
            Have an account?{` `}
            <Link to={ROUTES.LOGIN} className="font-bold text-blue-medium">
              Login
            </Link>
          </p>
        </div>
      </div>*/}
      </div>
  );
}
