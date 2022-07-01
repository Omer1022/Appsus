import todoItemInput from "./todo-item-input.cmp.js";
export default {
    template: `
    <form action="">
    <input type="text" placeHolder="new list title..." v-model="info.label">
    <ul>
        <li class="list-item"><todo-Item-Input @addListItem = "addLine" @addTask = "addTodo"></li>
        <li v-for="todo in info.todos">
            <todo-Item-Input @addListItem = "addLine" @addTask = "addTodo">
            </li>
    </ul>
    <button @click = "createdTodo">add</button>
    </form>
   `,
    data() {
        return {
            info:{
                label: '',
                todos: []
            }
        };
    },
    created() {

    },
    components: {
        todoItemInput
    },
    methods: {
        createdTodo() {
            // if (!this.info.label.length && !this.info.todos.length) return
            // console.log('this.info', this.info)
            this.$emit("newNote", this.info, 'note-todo');
            // console.log('adding a new todo')
        },
        addLine(){
            console.log('add line');
        },
        addTodo(task){
            console.log('addtodo')
            this.info.todos.push(task)
            console.log('todos', this.info.todos)
        }
    },
    computed: {},
    unmounted() { },
}


