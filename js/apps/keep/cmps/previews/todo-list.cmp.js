import todoTask from "../todo-task.cmp.js";

export default {
props: ['todos', "noteId"],
 template: `
   
  <ul class = todo-list>
            <li v-for="todo in list" :key="todo.id" >
        <todo-task :todo="todo"></todo-task>
        <button @click.stop="removeTask">X</button>
            </li>
            
        </ul>

   
`,
data() {
return {
    list: null, 
    noteId: null
   
}
},
components: {
    todoTask
},
created() {
    this.list = this.$props.todos
    this.noteId = this.$props.noteId

  

},
methods:{
    removeTask(todoId){
        const idx = this.list.findIndex((item)=>{
        item.id === todoId})
        this.list.splice(idx, 1)
        console.log('ho ho ho')
        this.$emit('removedTask')
    }

},

computed: {},
unmounted() {},
};