import { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import FirebaseContext from '../context/firebase';
import UserContext from '../context/user';
import * as ROUTES from '../constants/routes';
import { DEFAULT_IMAGE_PATH } from '../constants/paths';
import useUser from '../hooks/use-user';
import { Grid } from "@material-ui/core";
import HomeIcon from '@material-ui/icons/HomeRounded';
import PeopleIcon from "@material-ui/icons/People";
import ExploreIcon from '@material-ui/icons/ExploreOutlined';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsActive';
import PersonIcon from '@material-ui/icons/AccountCircleOutlined';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import SignOut from '@material-ui/icons/ExitToAppRounded';
import { alpha, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        margin: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

export default function Header() {
  const { user: loggedInUser } = useContext(UserContext);
  const { user } = useUser(loggedInUser?.uid);
  const { firebase } = useContext(FirebaseContext);
  const history = useHistory();
  const classes = useStyles();

  return (
    <header className="h-9 bg-white border-b border-gray-primary mb-8" style={{ height: 56 }}>
      <div className="container mx-auto max-w-screen-lg h-full">
        <div className="flex justify-between h-full">
            <Grid style={{ marginLeft: "1.2%" }}>
                <Link to={ROUTES.DASHBOARD} aria-label="logo">
                          <h1 style={{
                              fontSize: "6vmin",
                              fontFamily: "Radley",
                              fontWeight: "bold",
                              marginTop: -1.2,
                          }}>lgcy</h1>
                </Link>
            </Grid>
          <div className="text-gray-700 text-center flex items-center align-items cursor-pointer">

                  </div>
                <Grid
                    container
                    direction="row"
                    alignItems="center"
                    style={{
                        border: "1px solid #808080",
                        borderRadius: 8,
                        height: 35,
                        width: "28%",
                        marginTop: "1.08%",
                        marginLeft: "3%",
                        justifyItems: "center"
                    }}
                >
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                      </Grid>
            <Grid className="text-gray-700 text-center flex items-center align-items"
                      justify="space-between"
                      style={{ width: "25%", marginRight: "0%" }}>
            {loggedInUser ? (
              <>
                
                <Link to={ROUTES.DASHBOARD} aria-label="Homepage">
                    <HomeIcon fontSize="medium" />
                </Link>

                <Link to={ROUTES.DASHBOARD} aria-label="Friends">
                    <PeopleIcon fontSize="medium" />
                </Link>   

                <Link to={ROUTES.EXPLORE} aria-label="Explore">
                    <ExploreIcon fontSize="medium" />
                </Link>

                <Link to={ROUTES.DASHBOARD} aria-label="Notification">
                    <NotificationsNoneIcon fontSize="medium" />
                </Link>

                <div className="flex items-center cursor-pointer">
                    <Link to={`/u/${user?.username}`}>
                        {/*<img
                            className="rounded-full h-8 w-8 flex"
                            src={`/images/avatars/${user?.username}.jpg`}
                            alt={`${user?.username} profile`}
                            onError={(e) => {
                                e.target.src = DEFAULT_IMAGE_PATH;
                        }}
                        />*/}
                        <PersonIcon fontSize="medium" />
                    </Link>
                </div>

                {user && (
                  <div className="flex items-center cursor-pointer">
                    {/*<Link to={`/u/${user?.username}`}>
                      <img
                        className="rounded-full h-8 w-8 flex"
                        src={`/images/avatars/${user?.username}.jpg`}
                        alt={`${user?.username} profile`}
                        onError={(e) => {
                          e.target.src = DEFAULT_IMAGE_PATH;
                        }}
                      />                   
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 mr-6 text-black-light cursor-pointer" fill="none" viewBox="0 0 25 25" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </Link>*/} 
                  </div>
                )}
              </>
            ) : (
              <>
                <div justify="right" style={{ marginLeft: "auto", marginRight: 0  }} >
                <Link to={ROUTES.LOGIN}>
                  <button
                    type="button"
                    className="bg-blue-medium font-bold text-sm rounded text-white w-20 h-8"
                  >
                    Log In
                  </button>
                </Link>
                <Link to={ROUTES.SIGN_UP}>
                  <button
                    type="button"
                    className="font-bold text-sm rounded text-blue-medium w-20 h-8"
                  >
                    Sign Up
                  </button>
                </Link>
                </div>
              </>
            )}

            <button
                type="button"
                title="Sign Out"
                onClick={() => {
                    firebase.auth().signOut();
                    history.push(ROUTES.LOGIN);
                }}
                onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                        firebase.auth().signOut();
                        history.push(ROUTES.LOGIN);
                    }
                }}
            >
               <SignOut />
            </button>

                      {/*heroicons => down arrow
            <Link to={ROUTES.DASHBOARD} aria-label="Notification">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 mr-6 text-black-light cursor-pointer" fill="none" viewBox="0 0 25 25" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7" d="M19 9l-7 7-7-7" />
                </svg>
            </Link>*/}

          </Grid>
        </div>
      </div>
    </header>
  );
}
