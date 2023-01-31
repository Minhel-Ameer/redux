export const incNumber = (num) => {
return{
  type: "INCREMENT",
  payload : num
}   
}

export const decNumber = (num) => {
return{
  type: "DECREMENT"
}  
}

export const divNumber = (num) => {
  return{
    type: "DIVIDE"
  }
}

export const mulNumber = (num) => {
  return{
    type: "MULT",
    payload : num
  }
}