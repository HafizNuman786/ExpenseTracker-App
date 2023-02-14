export default (state,action)=>{
  switch(action.type){
    case "DELETE_TRANSACTION" :
      return {
        ...state,
        transections: state.transections.filter(transection => transection.id !== action.payload)
      }

      case "ADD_TRANSACTION":
        return{
          ...state,
          transections:[action.payload,...state.transections]
        }

      case "EDIT_TRANSACTION":
        let index= state.transections.findIndex(transection => transection.id == action.payload.id,...state.transections );
        state.transections[index] = action.payload
        
        return{
          ...state,
          transections:[...state.transections]
        }
    default:
      return state }
}