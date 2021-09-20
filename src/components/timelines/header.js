/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import useUser from '../../hooks/use-user';
import { isUserFollowingProfile, toggleFollow } from '../../services/firebase';
import UserContext from '../../context/user';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import { useLocation, Link } from 'react-router-dom';

// custom hook to get the current pathname in React

const usePathname = () => {
    const location = useLocation();
    return location.pathname;
}

export default function Header({
    photosCount,
    followerCount,
    setFollowerCount,
    profile: {
        docId: profileDocId,
        userId: profileUserId,
        fullName,
        followers,
        following,
        username: profileUsername
    }
}) {
    const { user: loggedInUser } = useContext(UserContext);
    const { user } = useUser(loggedInUser?.uid);
    const [isFollowingProfile, setIsFollowingProfile] = useState(null);
    const activeBtnFollow = user?.username && user?.username !== profileUsername;

    const handleToggleFollow = async () => {
        setIsFollowingProfile((isFollowingProfile) => !isFollowingProfile);
        setFollowerCount({
            followerCount: isFollowingProfile ? followerCount - 1 : followerCount + 1
        });
        await toggleFollow(isFollowingProfile, user.docId, profileDocId, profileUserId, user.userId);
    };

    useEffect(() => {
        const isLoggedInUserFollowingProfile = async () => {
            const isFollowing = await isUserFollowingProfile(user.username, profileUserId);
            setIsFollowingProfile(!!isFollowing);
        };

        if (user?.username && profileUserId) {
            isLoggedInUserFollowingProfile();
        }
    }, [user?.username, profileUserId]);

    const path = usePathname();
    var split = path.split("/")[3];
    var timeline = "Default";
    var imgSc = `/images/users/duyenle1312/6.jpg`;

    if (split == "ouradventure") {
        timeline = "Our Adventure";
        imgSc = `/images/users/duyenle1312/6.jpg`;
    }
    else if (split == "katieandjosh") {
        timeline = "Katie and Josh";
        imgSc = `/images/users/duyenle1312/7.jpg`;
    }
    else if (split == "sceneries") {
        timeline = "Sceneries";
        imgSc = `/images/users/duyenle1312/1.jpg`;
    }

    return (
        <div style={{ textAlign: "center", marginTop: "-1.2%", }}>
            <div style={{ textAlign: "center", display: "flex", }}>
                <Link to={`/u/${profileUsername}`} aria-label="Timeline">
                    <ArrowBackIosRoundedIcon />
                </Link>
            <p className="text-2xl mr-4" style={{
                marginLeft: "45%",
                fontFamily: "Radley",
                fontWeight: "bold",
                }}>{profileUsername}</p>
            </div>

            <div className="flex justify-center items-center" style={{ marginTop: "7%", marginBottom: "5%" }}>
                <div className="container justify-center items-right" style={{ width: "30%", overflow: "hidden" }}>
                    {profileUsername ? (
                        <div style={{ width: "120px", height: "120px", overflow: "hidden", float: "right" }}>
                            <img
                                className="rounded-circle"
                                resizeMode={"cover"}
                                alt={`${fullName} profile picture`}
                                style={{ borderRadius: "50%", width: "100%", height: "100%", objectFit: "cover" }}
                                src={imgSc}
                            /></div>
                    ) : (
                            <Skeleton circle height={150} width={150} count={1} />
                        )}
                </div>
                <div className="flex items-center justify-center flex-col col-span-3" style={{ marginLeft: "5%", width: "50%", marginTop: "0.7%" }}>
                    <div className="container items-left" style={{ textAlign: "left" }}>
                        <p style={{
                            fontSize: "4vmin",
                            fontFamily: "Segoe UI",
                            fontWeight: "bold",
                        }}>{timeline}</p>{/*{!fullName ? <Skeleton count={1} height={24} /> : fullName}*/}
                    </div>

                    <div className="container items-left" style={{ textAlign: "left" }}>
                        <p style={{
                            //marginBottom: "3%",
                            marginTop: "2.2%",
                            fontSize: "2.6vmin",
                            fontFamily: "Segoe UI",
                            //fontWeight: "bold",
                        }}>{fullName}</p>
                        {/*<p className="font-medium">{profileUsername}</p>*/}
                    </div>

                    <div className="container flex items-center" style={{ marginTop: "3%" }}>
                        {activeBtnFollow && isFollowingProfile === null ? (
                            <Skeleton count={1} width={80} height={32} />
                        ) : (
                                activeBtnFollow && (
                                    <button
                                        className="bg-blue-medium font-bold text-sm rounded text-white w-20 h-8"
                                        style={{ background: "#0095F6", marginTop: "1%", fontSize: "2.2vmin", width: "20%", minWidth: 70 }}
                                        type="button"
                                        onClick={handleToggleFollow}
                                        onKeyDown={(event) => {
                                            if (event.key === 'Enter') {
                                                handleToggleFollow();
                                            }
                                        }}
                                    >
                                        {isFollowingProfile ? 'Following' : 'Follow'}
                                    </button>
                                )
                            )}
                    </div>
                    <div className="container flex mt-4">
                        {!followers || !following ? (
                            <Skeleton count={1} width={677} height={24} />
                        ) : (
                                <>
                                    {/*<p className="mr-10">
                <span className="font-bold">{photosCount}</span> photos
              </p>
              number of followers and following
               <p className="mr-10">
                <span className="font-bold">{followerCount}</span>
                {` `}
                {followerCount === 1 ? `follower` : `followers`}
              </p>
              <p className="mr-10">
                <span className="font-bold">{following?.length}</span> following
              </p>*/}
                                </>
                            )}
                    </div>
                </div>
            </div>
        </div>
    );
}

Header.propTypes = {
    photosCount: PropTypes.number.isRequired,
    followerCount: PropTypes.number.isRequired,
    setFollowerCount: PropTypes.func.isRequired,
    profile: PropTypes.shape({
        docId: PropTypes.string,
        userId: PropTypes.string,
        fullName: PropTypes.string,
        username: PropTypes.string,
        followers: PropTypes.array,
        following: PropTypes.array
    }).isRequired
};
