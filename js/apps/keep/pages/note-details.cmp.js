import longText from '../services/long-text.service.cmp.js'
import { noteService } from '../services/note-service.js'
export default {
  props: ['note'],
  template: `
    <section class="note-details-modal">
   
        <div class="details-text-modal">
            <h3>{{note.title}}</h3>
        </div> 
          
            <div class="product-details-modal">
                <p> <span>{{note.type}}</span></p>
         
            </div>
            <button class="close-modal" @click="$emit('close')">Close</button>
    </section>
  `,
  data() {
		return {

    }
	},
	methods: {},
  created() {
    // const id = this.$route.params.noteId
    // noteService.get(id).then(note => this.note = note)
  },
  
  computed: {
    
  },

  components: {
    longText,
  },
}
