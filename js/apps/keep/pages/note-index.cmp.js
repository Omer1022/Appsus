import { noteService } from "../services/note-service.js";
import noteList from "../cmps/note-list.cmp.js";
import noteDetails from "../pages/note-details.cmp.js";
import noteFilter from "../cmps/note-filter.cmp.js";
import noteAdd from "../cmps/add/note-add.cmp.js";


export default {
  template: `
  <div class = "screen" :class="{selectedNote:selectedNote}" @click="selectedNote = null"></div>
  <section class="note-app">
    <note-add  @newText ="createNewTxt"/>
    <!-- <note-filter @filtered="setFilter"/> -->
     <note-list :notes="notesToShow"  @removed="removeNote"  @selected="selectNote"/>
     <note-details v-if="selectedNote"  @close="selectedNote = null" :note="selectedNote" />
  </section>
`,
  components: {
    noteList,
    noteDetails,
    noteFilter,
    noteAdd
   
  },
  data() {
    return {
      notes: null,
      filterBy: null,
      selectedNote: null
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
    createNewTxt(txt){
      console.log('hey')
      let newNote = noteService.getEmptyNote()
       newNote.type = 'note-txt'
       newNote.info.txt = txt 
       noteService.save(newNote)
       this.notes.push(newNote)
      }

 
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
