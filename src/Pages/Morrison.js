import React from "react";
import Header from "../components/Headerlgcy";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import Image1 from "../Assets/image1.png";
import Image2 from "../Assets/image2.png";
import { Grid } from "@material-ui/core";

export default function Homepage() {
    const PostCard = (props) => {
        return (
            <Grid style={{ width: "40%", height: 500, background: "white" }}>
                <div
                    style={{
                        background: `url(${props.image})`,
                        height: 450,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                    }}
                ></div>
                <Grid container style={{ marginTop: 10 }}>
                    <Grid item md={10} xs={10}>
                        <p
                            style={{
                                margin: 0,
                                marginLeft: 16,
                                font: "Montserrat",
                                fontWeight: 600,
                                fontSize: 12,
                                lineHeight: "14.63px",
                            }}
                        >
                            {" "}
              Katiemorrison{" "}
                        </p>
                        <p
                            style={{
                                margin: 0,
                                marginLeft: 16,
                                font: "Montserrat",
                                fontSize: 12,
                            }}
                        >
                            Our Life Adventure
            </p>
                    </Grid>
                    <Grid item md={2} xs={2}>
                        <FavoriteBorderIcon></FavoriteBorderIcon>
                    </Grid>
                </Grid>
            </Grid>
        );
    };
    return (
        <div style={{ height: "100vh" }}>
            <Header></Header>
            <div
                style={{
                    maxHeight: "calc(100vh - 80px)",
                    //overflow: "scroll",
                    width: "100%",
                    marginTop: "3%"
                }}
            >
                <Grid container direction="column" alignItems="center">
                    <PostCard image={Image1}></PostCard>
                    <PostCard image={Image2}></PostCard>
                </Grid>
            </div>
        </div>
    );
}