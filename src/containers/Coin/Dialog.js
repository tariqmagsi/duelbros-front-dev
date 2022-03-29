import CustomizedDialogs from "../../components/Dialog"
import Coin from "./Index"


const CoinDialog = ({open, handleClose}) => {

    return (
        <CustomizedDialogs children={<Coin />} open={open} handleClose={handleClose}/>
    )
}

export default CoinDialog