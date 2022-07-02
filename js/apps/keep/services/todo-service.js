
export const todoService = {
  getEmptyTodo
}


function getEmptyTodo(){
    return {
        txt:'',
        doneAt:'',
        id:''
    }
}