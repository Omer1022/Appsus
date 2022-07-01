
import todoList from "./todo-list.cmp.js";
export default {
  props: ["noteObj"],
  template: `
   <h3>{{noteObj.info.label}}</h3>
  <todo-list :todos="noteObj.info.todos"/>
     
  `,
  data() {
    return {};
  },
  created(){
    console.log('noteObj', this.noteObj)
  },
  components:{
    todoList
  },
  methods: {
  
  },
  computed: {


  }

}
