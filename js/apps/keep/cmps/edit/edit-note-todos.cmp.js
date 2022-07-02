import todoList from "../previews/todo-list.cmp.js"  
import { todoService } from "../../services/todo-service.js"  
import { utilService } from "../../services/util-service.js"  


export default {
    props:["note"],
    template: `

 <input type="text" v-model="note.info.label" >
 <todo-list :todos="note.info.todos"/>
 <li><input v-model="newTask" type="text" placeholder="add task.." @click.stop><button @click="addTask">add</button></li>
  <button class="close-modal" @click="$emit('close', note)">Close</button>

`,
    data() {
        return {
            note:null,
            newTask: null
        }  
    },
    created() { 
        this.note = this.$props.note
    },
    methods: {
        addTask(){
            const newTodo = todoService.getEmptyTodo()
            newTodo.id = utilService.makeId()
            newTodo.txt = this.newTask
            this.note.info.todos.push(newTodo)
        }
    },
    computed: {},
    unmounted() { },
    components:{
        todoList,
       
    }
}  