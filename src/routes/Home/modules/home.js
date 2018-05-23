// ------------------------------------
// Constants
// ------------------------------------
const STORE_FILES = 'STORE_FILES'
// ------------------------------------
// Actions
// ------------------------------------
export function FilesUploaded(files) {
  // debugger
  // var file = files[0];
  //   var reader = new FileReader();
  //   file.end = file.size;
  //   debugger
  //   var reader = new FileReader();
  //  var resbaseurl= reader.readAsDataURL(file);
  //  var song= new Audio(resbaseurl);

  //   debugger
}
// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {

}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = 0
export default function homeReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
