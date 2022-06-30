// import notePreview from "../cmps/note-preview.cmp.js";
import noteTodos from "./note-todos.cmp.js";
import noteTxt from "./note-txt.cmp.js";
import noteImg from "./note-img.cmp.js";

export default {
  props: ["notes"],
  template: `
 <section class="note-list">
        <ul>
            <li v-for="note in notes" :key="note.id" class="note-preview-container" @click="select(note)">
            <component :is="note.type" :noteObj="note"> </component>
              <div class="actions">
                       <button @click="remove(note.id)">X</button>
                       <!-- <router-link :to="'/note/'+note.id">Details</router-link> -->
                        <!-- <router-link :to="'/note/edit/'+note.id">Edit</router-link> -->
                    </div>
            
            </li>
        </ul>
    </section>
`,
  components: {
    // notePreview,
    noteTodos, 
    noteImg,
    noteTxt
  },

  data() {
    return {};
  },
  created(){

    
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
