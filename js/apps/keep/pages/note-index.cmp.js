import { noteService } from "../services/note-service.js"
import noteList from "../cmps/note-list.cmp.js"
import noteDetails from "../pages/note-details.cmp.js"
import noteFilter from "../cmps/note-filter.cmp.js"
import noteAdd from "../cmps/add/note-add.cmp.js"
import { utilService } from "../services/util-service.js"


export default {
  template: `
  
  <section class="note-app">
 
    <note-add  @newNote ="createNewNote"/>
     <note-list :notes="notesToShow"  @removed="removeNote"  @selected="selectNote"/>
     <note-details v-if="selectedNote"  @close="onClose" :note="selectedNote" @removed="removeNote" />
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
      // filterBy: null,
      selectedNote: null
    }
  },
  methods: {
    removeNote(noteId, src) {
      console.log('noteId', noteId)

      noteService.remove(noteId)
      const idx = this.notes.findIndex((note) => note.id === noteId)
      this.notes.splice(idx, 1)
      this.selectedNote = null

    },
    selectNote(note) {
      console.log('select note fired')
      this.selectedNote = note
    },
    setFilter(filterBy) {
      console.log('setfilter fired')
      this.filterBy = filterBy

    },
    createNewNote(info, type) {
      console.log('input+type', info, type)
      let newNote = noteService.getEmptyNote()
      newNote.type = type
      console.log('newNote', newNote)

      switch (type) {
        case 'note-txt': {
          console.log('texttttt')
          newNote.info.txt = info.txt
          newNote.info.title = info.title
          console.log('newNote.info.txt', newNote.info.txt)
          break
        }
        case 'note-img': {
          newNote.info.url = info.url
          newNote.info.title = info.title

          break
        }
        case 'note-todos': {
          console.log("I'm Making a new todo")
          newNote.info.label = info.label
          console.log('info.label', info.label)
          let tasksTxt = info.todosStr.split(',')
          console.log('tasksTxt', tasksTxt)
          let todoObj = tasksTxt.map(txt => {
            return {
              txt: txt,
              doneAt: null,
              id: utilService.makeId()
            }
          })
          console.log('todoObj', todoObj)

          newNote.info.todos = todoObj
          console.log(' newNote.info.todos', newNote.info.todos)

          break
        }
      }
      noteService.save(newNote)
      this.notes.push(newNote)
    },
    onClose(note) {
      this.selectedNote = null
      noteService.save(note)
    },
    removedTask() {
      console.log('never hae I ever')

    }




  },
  created() {

    noteService.query().then(note => this.notes = note)

  },
  computed: {
    notesToShow() {
  
      var notes = this.notes
      //   if (!this.filterBy) return this.notes

      // 	const regex = new RegExp(this.filterBy.title, 'i')
      // 	return this.notes.filter((note) => regex.test(note.type) && note.info.title)
      // },
      return notes
    },
  }
}
