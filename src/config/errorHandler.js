import { toast } from "react-toastify";

export const errorHandler = (error) => {
    console.log('file: errorHandler.js => line 12 => errorHandler => error', error.response.data);
    
    if (error.response) {
        let errorMessage = error.response.data.message ? error.response.data.message :
            error.response.data.error_description ? error.response.data.error_description : 'Something went wrong';
            toast.error(errorMessage)
        return errorMessage;
    } else if (error.request) {
        toast.error(error.message)
        return error.message;
    } else {
        toast.error('Something went wrong')
        return 'Something went wrong';
    }
};
