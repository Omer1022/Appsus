import todoTask from "../todo-task.cmp.js";

export default {
props: ['todos'],
 template: `
   
  <ul class = todo-list>
            <li v-for="todo in list" :key="todo.id" >
        <todo-task :todo="todo"></todo-task>
        <button @click.stop="removeTask(todo.id)">X</button>
            </li>
            
        </ul>

   
`,
data() {
return {
    list: null, 
   
}
},
components: {
    todoTask
},
created() {
    this.list = this.$props.todos
    // console.log('yes',this.list)

},
methods:{
    removeTask(todoId){
        console.log('remove task', todoId)
        // console.log('id to find',todoId)
        console.log('this.list', this.list)
        
        const idx = this.list.findIndex((item)=>{
        item.id === todoId})
        this.list.splice(idx, 1)
        console.log('this.list', this.list)
        
        // let index = "tri li"
        // console.log('idx',idx)
    }

},

computed: {},
unmounted() {},
};