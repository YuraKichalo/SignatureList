const INITIAL_STATE = {
    imagesArr: [
        {url: 'https://pbs.twimg.com/profile_images/633782900077408256/F541mrSs_400x400.jpg', alt: 'img'},
        {url: 'https://pbs.twimg.com/profile_images/633782900077408256/F541mrSs_400x400.jpg', alt: 'img'},
        {url: 'https://cdn74.picsart.com/182950564000202.jpg?c256x256', alt: 'img'},
        {url: 'https://pbs.twimg.com/profile_images/633782900077408256/F541mrSs_400x400.jpg', alt: 'img'},
        {url: 'https://pbs.twimg.com/profile_images/633782900077408256/F541mrSs_400x400.jpg', alt: 'img'},
        {url: 'https://cdn74.picsart.com/182950564000202.jpg?c256x256', alt: 'img'},
        {url: 'https://pbs.twimg.com/profile_images/633782900077408256/F541mrSs_400x400.jpg', alt: 'img'},
        {url: 'https://cdn74.picsart.com/182950564000202.jpg?c256x256', alt: 'img'},
        {url: 'https://pbs.twimg.com/profile_images/633782900077408256/F541mrSs_400x400.jpg', alt: 'img'}
    ]
};

export default (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case 'DELETE':
            return {...state, imagesArr: state.imagesArr.filter((item,index) => !action.payload.includes(index))};
        default:
            return state;
    }
};