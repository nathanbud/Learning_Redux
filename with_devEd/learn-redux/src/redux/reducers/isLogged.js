const isLoggedReducer = (state = false, action) =>{
    switch(action.type){
        case 'LOG_IN':
            return !state;
    }
}