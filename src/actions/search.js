export const search = (searchTerm) => dispatch => {

  let promise = new Promise((resolve, reject) => {
            fetch(`https://scitech.herokuapp.com/api/search/${searchTerm}`)
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
            dispatch({ type: 'SEARCH_WORD', payload: result });

        }, error => {
            dispatch({ type: 'SEARCH_NO_ITEMS', payload: false });
        });
}