import noteTodos from "./previews/note-todos.cmp.js"  
import noteTxt from "./previews/note-txt.cmp.js"  
import noteImg from "./previews/note-img.cmp.js"  
import editActionsBar from "./edit-actions-bar.cmp.js"   

export default {
  props: ["notes"],
  template: `
 <section class="note-list">
        <ul>
            <li v-for="note in notes" :key="note.id" class="note-preview-container" @click="select(note)">
            <component :is="note.type" :noteObj="note">note</component>
              <div class="actions">
                    <edit-actions-bar :note="note" @removed="remove(note.id)"></edit-actions-bar>
                
                    </div>
            
            </li>
        </ul>
    </section>
`,
  components: {
    noteTodos, 
    noteImg,
    noteTxt,
    editActionsBar
  },
  data() {
    return {}  
  },
  created(){
    console.log('this.notes',this.notes)
  } ,
  methods: {
    remove(noteId) {
      console.log('removed from preview')
      this.$emit("removed", noteId, 'preview')  
    },
    select(note) {
        console.log('note', note)
      this.$emit("selected", note)  
    },
  },
  computed: {
  },
}  
