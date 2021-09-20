import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import { Link } from 'react-router-dom';
import { useParams, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getUserByUsername } from '../services/firebase';
import * as ROUTES from '../constants/routes';
import Header from '../components/header';
import UserProfile from '../components/profile';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    gridList: {
        width: "70vw",
        display: 'flex',
        overflow: 'overlay',
        //height: 850,
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
}));

export default function TitlebarGridList() {
    const { username } = useParams();
    const [user, setUser] = useState(null);
    const history = useHistory();

    const classes = useStyles();

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <GridList cellHeight={350} spacing={30} className={classes.gridList} style={{ padding: 70, justifyItems: "center", overflow: "hidden" }}>
                
                <div style={{ textAlign: "center", }} >
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                        <Link to={`/t/${username}/ouradventure`} aria-label="Timeline">
                        <div style={{ width: "320px", height: "320px", overflow: "hidden" }}>
                            <img
                                //className="rounded-circle"
                                resizeMode={"cover"}
                                alt={`picture`}
                                style={{ borderRadius: "3%", width: "100%", height: "auto", objectFit: "cover" }}
                                src={`/images/users/duyenle1312/6.jpg`}
                            />
                        </div>  
                        </Link>
                    </div>
                    <p style={{
                        //marginLeft: "-3%",
                        marginTop: "2.7%",
                        fontSize: "2.3vmin",
                        fontFamily: "Montserrat",
                        fontWeight: "1.3%",
                    }}>Our Adventure</p>
                </div>

                <div style={{ textAlign: "center", }} >
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                        <Link to={`/t/${username}/katieandjosh`} aria-label="Timeline">
                        <div style={{ width: "320px", height: "320px", overflow: "hidden" }}>
                            <img
                                //className="rounded-circle"
                                resizeMode={"cover"}
                                alt={`picture`}
                                style={{ borderRadius: "3%", width: "100%", height: "auto", objectFit: "cover" }}
                                src={`/images/users/duyenle1312/7.jpg`}
                            />
                        </div>
                        </Link>
                    </div>
                    <p style={{
                        //marginLeft: "-3%",
                        marginTop: "2.7%",
                        fontSize: "2.3vmin",
                        fontFamily: "Montserrat",
                        fontWeight: "1.3%",
                    }}>Katie and Josh</p>
                </div>  

                <div style={{ textAlign: "center", }} >
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                        <Link to={`/t/${username}/sceneries`} aria-label="Timeline">
                        <div style={{ width: "320px", height: "320px", overflow: "hidden" }}>
                            <img
                                //className="rounded-circle"
                                resizeMode={"cover"}
                                alt={`picture`}
                                style={{ borderRadius: "3%", width: "100%", height: "100%", objectFit: "cover" }}
                                src={`/images/users/duyenle1312/1.jpg`}
                            />
                        </div>
                        </Link>
                    </div>
                    <p style={{
                        //marginLeft: "-3%",
                        marginTop: "2.7%",
                        fontSize: "2.3vmin",
                        fontFamily: "Montserrat",
                        fontWeight: "1.3%",
                    }}>Sceneries</p>
                </div>

                {/*<div style={{ textAlign: "center", }} >
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                        <div style={{ width: "320px", height: "320px", overflow: "hidden" }}>
                            <img
                                //className="rounded-circle"
                                resizeMode={"cover"}
                                alt={`picture`}
                                style={{ borderRadius: "3%", width: "100%", height: "100%", objectFit: "cover" }}
                                src={`/images/users/duyenle1312/2.jpg`}
                            />
                        </div>
                    </div>
                    <p style={{
                        //marginLeft: "-3%",
                        marginTop: "2.7%",
                        fontSize: "2.3vmin",
                        fontFamily: "Montserrat",
                        fontWeight: "1.3%",
                    }}>Our Adventure</p>
                </div>

                <div style={{ textAlign: "center", }} >
                    <div style={{  display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                        <div style={{ width: "320px", height: "320px", overflow: "hidden" }}>
                            <img
                                //className="rounded-circle"
                                resizeMode={"cover"}
                                alt={`picture`}
                                style={{ borderRadius: "3%", width: "100%", height: "100%", objectFit: "cover" }}
                                src={`/images/users/duyenle1312/3.jpg`}
                            />
                        </div>                    
                    </div>
                    <p style={{
                        //marginLeft: "-3%",
                        marginTop: "2.7%",
                        fontSize: "2.3vmin",
                        fontFamily: "Montserrat",
                        fontWeight: "1.3%",
                    }}>Our Adventure</p>
                </div>*/}


            </GridList>
        </div>
    );
}