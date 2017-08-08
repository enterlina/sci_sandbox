export const getCards = (lang) => dispatch => {
    dispatch({ type: 'ACTION_PRELOADER', payload: true });
  let promise = new Promise((resolve, reject) => {
            fetch(`https://scitech.herokuapp.com/api/cards/${lang}`)
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
            dispatch({ type: 'ACTION_PRELOADER', payload: false });
        }, error => {
            dispatch({ type: 'FETCH_CARDS_FAILED', payload: result });
            dispatch({ type: 'ACTION_PRELOADER', payload: false });
        });
}