const getDropdowns = (lang) => dispatch => {

  let promise = new Promise((resolve, reject) => {
            fetch(`https://scitech-dev.herokuapp.com/api/dropdowns`)
                .then((response) => {
                    return response.json()
                })
                .then((data) => {
                    resolve(data);
                })
                .catch((err) => {
                    reject(err)
                });
        });

        promise.then(result => {
            console.log('data loaded');

            dispatch({ type: 'DROPDOWNS_LOADED', payload: result });
            

        }, error => {
            dispatch({ type: 'DROPDOWNS_NOT_LOADED', payload: false });
        });
}

export {getDropdowns}