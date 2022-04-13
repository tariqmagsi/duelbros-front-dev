import CustomizedDialogs from "../../components/Dialog"
import Auth from "./Index"


const AuthDialog = ({open, handleOpen, handleClose, type}) => {

    return (
        <CustomizedDialogs Children={() => {return <Auth type={type}/>}} type={type} open={open} handleOpen={handleOpen} handleClose={handleClose}/>
    )
}

export default AuthDialog