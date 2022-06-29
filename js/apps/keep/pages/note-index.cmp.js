import { noteService } from "../services/note-service.js";
import noteList from "../cmps/note-list.cmp.js";
import noteDetails from "../pages/note-details.cmp.js";
import noteFilter from "../cmps/note-filter.cmp.js";

export default {
  template: `

  <h3>tri li li</h3>
  <div class = "screen" :class="{selectedNote:selectedNote}" @click="selectedNote = null"></div>
  <section class="note-app">
   
    <note-filter @filtered="setFilter"/>
    <note-list @selected="selectNote" :notes="notesToShow" />
    <note-details v-if="selectedNote"  @close="selectedNote = null" :note="selectedNote" />
  </section>
`,
components:{
  noteList,
  noteDetails,
  noteFilter
},
  data() {
    return {
      notes: noteService.query(),
      selectedNote: null,
      filterBy: null,
    };
  },
  methods: {
    removeNote(noteId) {
      noteService.remove(noteId);
      const idx = this.notes.findIndex((note) => note.id === noteId);
      this.notes.splice(idx, 1);
    },
    selectNote(note) {
        console.log('select note fired')
        this.selectedNote = note;
    },
    setFilter(filterBy) {
        console.log('setfilter fired')
      this.filterBy = filterBy;
      console.log(this.filterBy)
    },
  },
  computed: {
    notesToShow() {
      if (!this.filterBy) return this.notes

			const regex = new RegExp(this.filterBy.title, 'i')
			return this.notes.filter((note) => regex.test(note.title) && note.listPrice.amount >= this.filterBy.price)
    },
  },
};
