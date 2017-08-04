export const getCards = () => dispatch => {

  let promise = new Promise((resolve, reject) => {
            fetch('https://scitech.herokuapp.com/api/cards')
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
            dispatch({ type: 'FETCH_CARDS_SUCCESS', payload: result });

        }, error => {
            console.log(error);
        });
}