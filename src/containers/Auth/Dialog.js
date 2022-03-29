import CustomizedDialogs from "../../components/Dialog"
import Auth from "./Index"


const AuthDialog = ({open, handleClose}) => {

    return (
        <CustomizedDialogs children={<Auth />} open={open} handleClose={handleClose}/>
    )
}

export default AuthDialog