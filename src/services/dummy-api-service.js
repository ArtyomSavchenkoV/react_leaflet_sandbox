class ApiService {

    markersRequest = async () => {
        const payload = [{
            markerId: 1,
            lat: 55,
            lng: 83,
            noticeCount: 2
        },
        {
            markerId: 2,
            lat: 55,
            lng: 83.1
        }];

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({status: true, payload});
            }, 3000)
        });
    };
};


export default ApiService;
