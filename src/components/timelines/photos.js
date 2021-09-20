/* eslint-disable no-nested-ternary */
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import ImageGridList from '../grid'

export default function Photos(props) {
    {/*param: { photos }*/ }

    return (
        <div className="bg-gray-background" style={{ marginBottom: "7%" }}>
            {/*Timeline pictures profile
            
            <ImageGridList/>*/}

            <div className="grid grid-cols-3" style={{ padding: 0, justifyItems: "center", marginTop: "10%" }}>
                <div style={{ textAlign: "center", marginBottom: "8%" }} >
                    <div style={{ width: "310px", height: "310px", overflow: "hidden" }}>
                        <img
                            //className="rounded-circle"
                            resizeMode={"cover"}
                            alt={`picture`}
                            style={{ borderRadius: "3%", width: "100%", height: "100%", objectFit: "cover" }}
                            src={`/images/users/duyenle1312/2.jpg`}
                        />
                    </div>
                    <p style={{
                        //marginLeft: "-3%",
                        marginTop: "3%",
                        fontSize: "2.3vmin",
                        fontFamily: "Montserrat",
                        fontWeight: "1.3%",
                    }}>Hill</p> {/*Our Adventure*/}
                </div>

                <div style={{ textAlign: "center", marginBottom: "8%" }} >
                    <div style={{ width: "310px", height: "310px", overflow: "hidden" }}>
                        <img
                            //className="rounded-circle"
                            resizeMode={"cover"}
                            alt={`picture`}
                            style={{ borderRadius: "3%", width: "100%", height: "100%", objectFit: "cover" }}
                            src={`/images/users/duyenle1312/3.jpg`}
                        />
                    </div>
                    <p style={{
                        //marginLeft: "-3%",
                        marginTop: "2.7%",
                        fontSize: "2.3vmin",
                        fontFamily: "Montserrat",
                        fontWeight: "1.3%",
                    }}>Deer</p>{/*Katie and Josh*/}
                </div>

                <div style={{ textAlign: "center", marginBottom: "8%" }} >
                    <div style={{ width: "310px", height: "310px", overflow: "hidden" }}>
                        <img
                            //className="rounded-circle"
                            resizeMode={"cover"}
                            alt={`picture`}
                            style={{ borderRadius: "3%", width: "100%", height: "100%", objectFit: "cover" }}
                            src={`/images/users/duyenle1312/5.jpg`}
                        />
                    </div>
                    <p style={{
                        //marginLeft: "-3%",
                        marginTop: "3%",
                        fontSize: "2.3vmin",
                        fontFamily: "Montserrat",
                        fontWeight: "1.3%",
                    }}>Jungle</p>{/*Sceneries*/}
                </div>

            </div>



            {/*<div className="grid grid-cols-3">
                {!photos
                    ? new Array(12).fill(0).map((_, i) => <Skeleton key={i} width={300} height={300} />)
                    : photos.length > 0
                        ? photos.map((photo) => (
                            <div key={photo.docId} className="relative group" style={{ width: "320px", height: "320px", overflow: "hidden", marginBottom: "6%", marginLeft: "3%" }}>
                                <img src={photo.imageSrc} alt={photo.caption} style={{ borderRadius: "3%", width: "100%", height: "100%", objectFit: "cover" }} />

                                <div className="absolute bottom-0 left-0 bg-gray-200 z-10 w-full justify-evenly items-center h-full bg-black-faded group-hover:flex hidden" style={{ borderRadius: "3%" }} >
                                    <p className="flex items-center text-white font-bold">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            className="w-8 mr-4"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        {photo.likes.length}
                                    </p>

                                    <p className="flex items-center text-white font-bold">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            className="w-8 mr-4"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        {photo.comments.length}
                                    </p>
                                </div>
                                <p style={{
                                    //marginLeft: "-3%",
                                    marginTop: "2.7%",
                                    fontSize: "2.3vmin",
                                    fontFamily: "Montserrat",
                                    fontWeight: "1.3%",
                                }}>Sceneries</p>
                            </div>
                        ))
                        : null}
            </div>

            {!photos || (photos.length === 0 && <p className="text-center text-2xl"
                style={{
                    fontSize: "3vmin", fontFamily: "Segoe UI", //fontWeight: "bold", 
                }}></p>)} {/*No Posts Yet*/}
        </div>
    );
}

Photos.propTypes = {
    photos: PropTypes.array
};