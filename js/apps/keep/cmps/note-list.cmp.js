
import noteTodos from "./previews/note-todos.cmp.js";
import noteTxt from "./previews/note-txt.cmp.js";
import noteImg from "./previews/note-img.cmp.js";
import { noteService } from "../services/note-service.js";

export default {
  props: ["notes"],
  template: `
 <section class="note-list">
        <ul>
            <li v-for="note in notes" :key="note.id" class="note-preview-container" @click="select(note)">
            <component :is="note.type" :noteObj="note">note</component>
              <div class="actions">
                       <button @click.stop="remove(note.id)">X</button>
                    </div>
            
            </li>
        </ul>
    </section>
`,
  components: {
    noteTodos, 
    noteImg,
    noteTxt
  },

  data() {
    return {
      // notesList: notes

    };
  },
  created(){
    console.log('this.notes',this.notes)
  
    

  } ,
  methods: {
    remove(noteId) {
      this.$emit("removed", noteId);
    },
    select(note) {
        console.log('note', note)
      this.$emit("selected", note);
    },
  },
  computed: {},
};
