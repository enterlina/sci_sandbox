export default function defaultLang (state = 'ru', action) {
  if (action.type === 'SET_DEFAULT_LANG') {
    return action.payload;
  }
  return state;
}