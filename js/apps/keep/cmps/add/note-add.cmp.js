import { noteService } from "../../services/note-service.js";
import addTxt from "./add-txt.cmp.js";
import addImg from "./add-img.cmp.js";
import addTodo from "./add-todo.cmp.js";

export default {
  template: `

 <section class="add-new-note">
  
    <form @submit.prevent="add">
    <component :is="type" @newText = "newText"> </component>
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
      console.log('this.type', this.type)
      
    },
    newText(txt){
      this.$emit("newText", txt)
    },
    add() {
      console.log('adding')
      // if (!this.noteToEdit.title) return;
      // noteService.save(this.noteToEdit).then((note) => {
      //   this.$router.push("/note");
      // });
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
};
