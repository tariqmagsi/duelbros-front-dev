import CustomizedDialogs from "../../components/Dialog"
import Coin from "./Index"


const CoinDialog = ({open, handleClose}) => {

    return (
        <CustomizedDialogs Children={() => {return <Coin />}} open={open} handleClose={handleClose}/>
    )
}

export default CoinDialog