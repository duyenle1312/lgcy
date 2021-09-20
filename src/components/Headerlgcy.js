import React from "react";
import { Grid } from "@material-ui/core";
import HomeIcon from '@material-ui/icons/HomeRounded';
import PeopleIcon from "@material-ui/icons/People";
import ExploreIcon from '@material-ui/icons/ExploreOutlined';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsActive';
import PersonIcon from '@material-ui/icons/AccountCircleOutlined';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
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
    const classes = useStyles();
    return (
        <div>
            <Grid
                container
                direction="row"
                alignItems="center"
                style={{ height: 50, background: "white", marginBotom: "13%" }}
            >
                <p
                    style={{
                        fontSize: "5vmin",
                        //border: "1px solid black",
                        fontFamily: "Radley",
                        width: "31.5%",
                        fontWeight: "bold",
                        margin: 0,
                        marginLeft: "3%",
                        marginBottom: "1%",
                    }}
                >
                    lgcy
        </p>
                <Grid
                    container
                    direction="row"
                    alignItems="center"
                    style={{
                        border: "1px solid #808080",
                        borderRadius: 8,
                        height: 35,
                        width: "28%",
                        marginBottom: "1%",
                        justifyItems: "center"
                    }}
                >
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search..."
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                </Grid>
                <div style={{ width: "12%" }}></div>
                <Grid
                    container
                    driection="row"
                    justify="space-between"
                    style={{ width: "20%", marginBottom: "0.8%" }}
                >
                    <HomeIcon fontSize="medium" />
                    <PeopleIcon fontSize="medium" />
                    <ExploreIcon fontSize="medium" />
                    <NotificationsNoneIcon fontSize="medium" />
                    <PersonIcon fontSize="medium" />
                </Grid>
            </Grid>
        </div>
    );
}
