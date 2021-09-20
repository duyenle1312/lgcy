/* eslint-disable no-nested-ternary */
import { useContext } from 'react';
import Skeleton from 'react-loading-skeleton';
import LoggedInUserContext from '../../context/logged-in-user';
import usePhotos from './use-photos';
import Post from './post';

var cards = {
    marginRight: "30px",
    flexWrap: "wrap",
    direction: "column",
    display: "flex",
    justifyContent: "left",
    //border: "1px solid blue"
}

export default function Timeline() {
    const { user } = useContext(LoggedInUserContext);
    const { photos } = usePhotos(user);

    return (
        <div style={cards}>
            {!photos ? (
                <div style={{ justifyContent: "center", marginTop: 32, display: "flex" }}>
                    <div style={{ width: "50%", justifyContent: "center", display: "flex" }}>
                        <Skeleton count={3} width={600} height={700} style={{ marginBottom: "6%" }} />
                    </div></div>
            ) : (
                        photos.map((content) => <Post key={content.docId} content={content} />)
                )}
        </div>
    );
}
