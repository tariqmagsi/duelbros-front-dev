import DashboardOutline from '../../components/DashboardOutline';
import Home from './Home';

const HomeRoot = () => {

    return (
        <div>
            <DashboardOutline ChildComponent={() => {return <Home />}}/>
        </div>
    )
}

export default HomeRoot