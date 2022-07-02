// import todoItemInput from "./todo-item-input.cmp.js";
export default {
    template: `
    <form action="">
    <input type="text" placeHolder="new list title..." v-model="info.label">
    <textarea  v-model="info.todosStr" placeHolder="enter your tasks separated by comas" cols="30" rows="10"></textarea>
    <!-- <ul>
        <li class="list-item"><todo-Item-Input @addListItem = "addLine" @addTask = "addTodo"></li>
        <li v-for="todo in info.todos">
            <todo-Item-Input @addListItem = "addLine" @addTask = "addTodo">
            </li>
    </ul> -->
    <pre>todos: {{info.todosStr}}</pre>
    <button @click = "createdTodo">add</button>
    </form>
   `,
    data() {
        return {
            info:{
                label: '',
                todosStr: ''
            }
        };
    },
    created() {

    },
    components: {
        // todoItemInput
    },
    methods: {
        createdTodo() {
            if (!this.info.label.length && !this.info.todosStr.length) return
            console.log('this.info', this.info)
            this.$emit("newNote", this.info, 'note-todos');
            // console.log('adding a new todo')
        },
        // addLine(){
        //     console.log('add line');
        // },
        // addTodo(task){
            
        //     this.info.todos.push(task)
            
        //  }
    },
    computed: {},
    unmounted() { },
}


