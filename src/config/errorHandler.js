export const errorHandler = (error) => {
    console.log('file: errorHandler.js => line 12 => errorHandler => error', error.response.data);
    if (error.response) {
        let errorMessage = error.response.data.message ? error.response.data.message :
            error.response.data.error_description ? error.response.data.error_description : 'Something went wrong';
        return errorMessage;
    } else if (error.request) {
        return error.message;
    } else {
        return 'Something went wrong';
    }
};
