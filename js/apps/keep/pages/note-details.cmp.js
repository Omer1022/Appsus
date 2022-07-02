
import editNoteImg from '../cmps/edit/edit-note-img.cmp.js'
import editNoteTxt from '../cmps/edit/edit-note-txt.cmp.js'
import editNoteTodos from '../cmps/edit/edit-note-todos.cmp.js'
import editActionsBar from '../cmps/edit-actions-bar.cmp.js'


export default {
  props: ['note'],
  template: `
    <section class="note-details-modal">
   
        <div class="details-text-modal">
    
          <component :is="componentsType" :note="noteToEdit" @close="onClose"> </component>
          <edit-actions-bar :note="noteToEdit" @removed="remove"></edit-actions-bar>
       
    </section> -->
  `,
  data() {
    return {
      noteToEdit: null,
      componentsType: null
    }
  },
  methods: {
    onClose(note) {
      this.$emit('close', this.noteToEdit)
    },
    remove(noteId) {
    
      this.$emit("removed", this.noteToEdit.Id)


    }
  },
  created() {
    this.noteToEdit = this.$props.note

    this.componentsType = `edit-${this.noteToEdit.type}`
 

  },

  computed: {

  },

  components: {
    editNoteTxt,
    editNoteTodos,
    editNoteImg,
    editActionsBar
  },
}
