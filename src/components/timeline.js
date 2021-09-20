/* eslint-disable no-nested-ternary */
import { useContext } from 'react';
import Skeleton from 'react-loading-skeleton';
import LoggedInUserContext from '../context/logged-in-user';
import usePhotos from '../hooks/use-photos';
import Post from './post';

export default function Timeline() {
  const { user } = useContext(LoggedInUserContext);
  const { photos } = usePhotos(user);

  return (
    <div>
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
