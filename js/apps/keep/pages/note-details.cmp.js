// import longText from '../services/long-text.service.cmp.js'
import editNoteImg from '../cmps/edit/edit-note-img.cmp.js'
import editNoteTxt from '../cmps/edit/edit-note-txt.cmp.js'
import editNoteTodos from '../cmps/edit/edit-note-todos.cmp.js'
import editActionsBar from '../cmps/edit-actions-bar.cmp.js'
// import { noteService } from '../services/note-service.js'


export default {
  props: ['note'],
  template: `
    <section class="note-details-modal">
   
        <div class="details-text-modal">
    
          <component :is="componentsType" :note="noteToEdit" @close="onClose"> </component>
          <edit-actions-bar :id="noteToEdit.id" @removed="remove"></edit-actions-bar>
            <!-- <button class="close-modal" @click="">Close</button> -->
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
      console.log('removed from details')
      this.$emit("removed", this.noteToEdit.Id)


    }
  },
  created() {
    this.noteToEdit = this.$props.note
    console.log('this.noteToEdit.id',   this.noteToEdit.id)
    this.componentsType = `edit-${this.noteToEdit.type}`
    console.log('this.note.type', this.componentsType)

  },

  computed: {

  },

  components: {
    // longText,
    editNoteTxt,
    editNoteTodos,
    editNoteImg,
    editActionsBar
  },
}
