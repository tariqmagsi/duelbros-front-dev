import DashboardOutline from '../../components/DashboardOutline';
import Profile from './Profile';

const ProfileRoot = () => {

    return (
        <div>
            <DashboardOutline ChildComponent={() => {return <Profile />}}/>
        </div>
    )
}

export default ProfileRoot