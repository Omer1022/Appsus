import todoList from "../previews/todo-list.cmp.js";
export default {
    props:["note"],
    template: `
 <!-- <h3>hey hey hey- yo yo yo</h3> -->
 <!-- <pre>{{note}}</pre> -->
 <input type="text" v-model="note.info.label" >
 <todo-list :todos="note.info.todos"/>
 <!-- <textarea name="" id="" cols="30" rows="10"  v-model="note.info.todos"></textarea> -->
  <button class="close-modal" @click="$emit('close', note)">Close</button>
`,
    data() {
        return {
            note:null,
        };
    },
    created() { 
        this.note = this.$props.note
    },
    methods: {},
    computed: {},
    unmounted() { },
    components:{
        todoList
    }
};