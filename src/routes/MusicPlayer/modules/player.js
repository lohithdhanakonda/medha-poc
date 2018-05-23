// ------------------------------------
// Constants
// ------------------------------------
const FILL_SONGS='FILL_SONGS'
// ------------------------------------
// Actions
// ------------------------------------
export function availableAllSongsList() {
  return (dispatch, getState) => {
    let availableSongs=getState()&&getState().home?getState().home.songfiles:[]
    if(availableSongs.length){
      dispatch({
        type: FILL_SONGS,
        availableSongs
      })
    }
  }
}
// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [FILL_SONGS]:(state,action)=>{
    return Object.assign({},state,{availableSongs: action.availableSongs})
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = 0
export default function playerReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
