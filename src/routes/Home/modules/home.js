// ------------------------------------
// Constants
// ------------------------------------
const STORE_FILES = 'STORE_FILES'
// ------------------------------------
// Actions
// ------------------------------------
export function FilesUploaded(files) {
  return (dispatch) => {
    var songfiles = []
    files.map(file => {
      var reader = new FileReader();
      reader.readAsDataURL(file);
      songfiles.push({ name: file.name, songData: reader.result })
    })
    dispatch({
      type: STORE_FILES,
      songfiles
    })
  }

  //  var song= new Audio(resbaseurl);

}
// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [STORE_FILES]: (state, action) => {
    return Object.assign({}, state, { songfiles: action.songfiles })
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  songslist: [{}]
}
export default function homeReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
