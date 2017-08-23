export const getCards = () => dispatch => {
    dispatch({ type: 'ACTION_PRELOADER', payload: true });
  let promise = new Promise((resolve, reject) => {
            fetch(`http://localhost:8083/api/cards`)
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

export const getCardsById = ( id) => dispatch => {
    dispatch({ type: 'ACTION_PRELOADER', payload: true });
  let promise = new Promise((resolve, reject) => {
            fetch(`http://localhost:8083/api/card/${id}`)
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
            dispatch({ type: 'FETCH_SPECIFIC_CARD_SUCCESS', payload: result[0] });
            dispatch({ type: 'ACTION_PRELOADER', payload: false });
        }, error => {
            dispatch({ type: 'FETCH_SPECIFIC_CARD_FAILED', payload: result });
            dispatch({ type: 'ACTION_PRELOADER', payload: false });
        });
}
export const getCardsByType = ( type) => dispatch => {
    dispatch({ type: 'ACTION_PRELOADER', payload: true });
  let promise = new Promise((resolve, reject) => {
            fetch(`http://localhost:8083/api/cards/type/${type}`)
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