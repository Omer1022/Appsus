import { noteService } from "../../services/note-service.js"  
import addTxt from "./add-txt.cmp.js"  
import addImg from "./add-img.cmp.js"  
import addTodo from "./add-todo.cmp.js"  

export default {
  template: `

 <section class="add-new-note">
  
    <form @submit.prevent="add">
    <component :is="type" @newNote = "newNote"> </component>
        <ul class="note-types-list">
          <li><a @click="setInput('addTxt')">txt</a></li>
          <li><a @click="setInput('addImg')">img</a></li>
          <li><a @click="setInput('addTodo')">todo</a></li>
        </ul>  
    </form>
 </section>
`,
  data() {
    return { 
      type: 'addTxt'
      
    }
  },
  created() {
   
  },
  methods: {
    setInput(type){
      this.type = type    
    },
    newNote(info, type){
      this.$emit("newNote", info, type)
    },
 
  },
  components: {
    noteService,
    addTxt,
    addImg,
    addTodo
  },
  computed: {

  },
}  
