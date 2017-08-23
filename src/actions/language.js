const getLangVars = (lang) => dispatch => {
  
  dispatch({ type: 'ACTION_PRELOADER', payload: true });

  let promise = new Promise((resolve, reject) => {
            fetch(`https://scitech.herokuapp.com/api/langvars/${lang}`)
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

            dispatch({ type: 'LANG_VARS_LOADED', payload: result });
            
            dispatch({ type: 'ACTION_PRELOADER', payload: false });

        }, error => {
            dispatch({ type: 'LANG_VARS_NOT_LOADED', payload: false });
            dispatch({ type: 'ACTION_PRELOADER', payload: false });
        });
}
const onLangUpdate = (lang) => {
  return getLangVars(lang);
}
export {getLangVars, onLangUpdate}