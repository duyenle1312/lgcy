import { useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/header';
import Explore from '../components/Explore/explore';
import Sidebar from '../components/sidebar';
import useUser from '../hooks/use-user';
import LoggedInUserContext from '../context/logged-in-user';

export default function Dashboard({ user: loggedInUser }) {
    const { user, setActiveUser } = useUser(loggedInUser.uid);
    useEffect(() => {
        document.title = 'lgcy | Explore';
    }, []);

    return (
        <LoggedInUserContext.Provider value={{ user, setActiveUser }}>
            <div className="bg-gray-background" style={{ height: '100vh' }}>                
                <Header />
                {/** <div className="grid grid-cols-1 gap-1 justify-center mx-auto max-w-screen-lg">
                    <Sidebar />
                </div>*/}
                <div style={{display: "flex", justifyContent: "center" }}><Explore /></div>
            </div>
        </LoggedInUserContext.Provider>
    );
}

Dashboard.propTypes = {
    user: PropTypes.object.isRequired
};
