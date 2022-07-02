// import longText from '../services/long-text.service.cmp.js'
import editNoteImg from '../cmps/edit/edit-note-img.cmp.js'
import editNoteTxt from '../cmps/edit/edit-note-txt.cmp.js'
import editNoteTodos from '../cmps/edit/edit-note-todos.cmp.js'
// import { noteService } from '../services/note-service.js'


export default {
  props: ['note'],
  template: `
    <section class="note-details-modal">
   
        <div class="details-text-modal">
    
          <component :is="componentsType" :note="noteToEdit" @close="onClose"> </component>
     
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
    onClose(note){
      this.$emit('close', note)
    }
  },
  created() {
   this.noteToEdit = this.$props.note
   this.componentsType = `edit-${this.noteToEdit.type}`
    console.log('this.note.type',this.componentsType)
   
  },
  
  computed: {
    
  },

  components: {
    // longText,
    editNoteTxt,
    editNoteTodos,
    editNoteImg
  },
}
