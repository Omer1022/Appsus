
import todoList from "./todo-list.cmp.js";
import { noteService } from "../../services/note-service.js";


export default {
  props: ["noteObj"],
  template: `
   <h3>{{note.info.label}}</h3>
  <todo-list :noteId = "note.id" :todos="note.info.todos" @removedTask="taskRemove"/>
     
  `,
  data() {
    return {
      note: null
    };
  },
  created(){
    this.note = this.$props.noteObj
    console.log('noteObj', this.noteObj)
    console.log('this.note', this.note)
  },
  components:{
    todoList
  },
  methods: {
    taskRemove(){
      console.log('hi hi hi')
      noteService.save(this.note)

    }
  
  },
  computed: {


  }

}
