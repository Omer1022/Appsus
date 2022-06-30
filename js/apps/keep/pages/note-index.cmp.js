import { noteService } from "../services/note-service.js";
import noteList from "../cmps/note-list.cmp.js";
import noteDetails from "../pages/note-details.cmp.js";
import noteFilter from "../cmps/note-filter.cmp.js";

export default {
  template: `
  <!-- <div class = "screen" :class="{selectedNote:selectedNote}" @click="selectedNote = null"></div> -->
  <section class="note-app">
   
    <!-- <note-filter @filtered="setFilter"/> -->
    <router-link to="/note/edit">Add New note</router-link>
     <note-list :notes="notesToShow"  @removed="removeNote" />
 
    <note-details />
  </section>
`,
  components: {
    noteList,
    noteDetails,
    noteFilter
  },
  data() {
    return {
      notes: null,
      filterBy: null,
    };
  },
  methods: {
    removeNote(noteId) {
      noteService.remove(noteId);
      const idx = this.notes.findIndex((note) => note.id === noteId);
      this.notes.splice(idx, 1);
    },
    setFilter(filterBy) {
      console.log('setfilter fired')
      this.filterBy = filterBy;
      console.log(this.filterBy)
    },
  },
  created() {

    noteService.query().then(note => this.notes = note)

  },
  computed: {
    notesToShow() {
      // console.log('note', this.notes)

      var notes = this.notes
      //   if (!this.filterBy) return this.notes

      // 	const regex = new RegExp(this.filterBy.title, 'i')
      // 	return this.notes.filter((note) => regex.test(note.title) && note.listPrice.amount >= this.filterBy.price)
      // },
      return notes
    },
  }
}
