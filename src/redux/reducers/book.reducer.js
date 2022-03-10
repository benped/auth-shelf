

const bookReducer = (state = {
    id: '',
    description: '',
    image_url: ''
},action) => {
    switch (action.type) {
        case 'SET_EDIT_BOOK':
            console.log('This book is:', action.payload);
            return {...state,
                id: action.payload.id,
                description: action.payload.description,
                image_url: action.payload.image_url,
                
            }
            default:
                return state;
    }
}

export default bookReducer;