export default {
    template: `
    <form action="">
    <input type="text" placeHolder="new list title..." v-model="info.label">
    <textarea  v-model="info.todosStr" placeHolder="enter your tasks separated by comas" cols="30" rows="10"></textarea>

    <button @click = "createdTodo">add</button>
    </form>
   `,
    data() {
        return {
            info:{
                label: '',
                todosStr: ''
            }
        } 
    },
    created() {

    },
    components: {

    },
    methods: {
        createdTodo() {
            if (!this.info.label.length && !this.info.todosStr.length) return
            this.$emit("newNote", this.info, 'note-todos')  
          
        },
    
    },
    computed: {},
    unmounted() { },
}


