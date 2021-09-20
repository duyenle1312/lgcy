import { useParams, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getUserByUsername } from '../services/firebase';
import * as ROUTES from '../constants/routes';
import Header from '../components/header';
import UserTimelines from '../components/timelines';

export default function Profile() {
    const { username } = useParams();
    const [user, setUser] = useState(null);
    const history = useHistory();

    useEffect(() => {
        async function checkUserExists() {
            const [user] = await getUserByUsername(username);
            if (user?.userId) {
                setUser(user);
            } else {
                history.push(ROUTES.NOT_FOUND);
            }
        }

        checkUserExists();
    }, [username, history]);

    return user?.username ? (
        <div className="bg-gray-background" style={{ height: "100vh" }}>
            <Header />
            <div className="bg-gray-background" style={{ border: "1px solid rgba(250, 250, 250, var(--tw-bg-opacity))" }}>
                <div className="bg-gray-background mx-auto max-w-screen-lg">
                    < UserTimelines user={user} />
                </div>
            </div>
        </div>
    ) : null;
}
