import longText from '../cmps/long-text.cmp.js'
import { noteService } from '../services/note-service.js'
export default {
  props: ['note'],
  template: `
    <section v-if="note" class="note-details-modal">
   
        <div class="details-text-modal">
            <h3>{{note.title}}</h3>
        </div> 
          
            <div class="product-details-modal">
                <p> <span>{{note.type}}</span></p>
         
            </div>
         <router-link to="/keep">close</router-link>
    </section>
  `,
  data() {
		return {
      note: null,
    }
	},
	methods: {},
  created() {
    const id = this.$route.params.noteId
    noteService.get(id).then(note => this.note = note)
  },
  
  computed: {
    
  },

  components: {
    longText,
  },
}
