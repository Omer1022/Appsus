import { noteService } from "../services/note-service.js";

export default {
  template: `

 <section v-if="noteToEdit" class="note-edit">
  <h4>{{pageTitle}}</h4>
    <form @submit.prevent="save">
        <input type="text" placeholder="title" v-model="noteToEdit.title">
        <button>Save</button>    
    </form>
 </section>
`,
  data() {
    return {
      noteToEdit: null,
    };
  },
  created() {
    const id = this.$route.params.noteId;
 console.log('id', id)
    if (id) {
      noteService.get(id).then((note) => (this.noteToEdit = note));
      console.log('EDITING A NOTE')
      
    } else {
      this.noteToEdit = noteService.getEmptyNote();
      console.log('getting an empty note')
    }
  },
  methods: {
    save() {
      if (!this.noteToEdit.title) return;
      noteService.save(this.noteToEdit).then((note) => {
        this.$router.push("/note");
      });
    },
  },
  computed: {
    pageTitle() {
      const id = this.$route.params.noteId;
      console.log('id', id)
      
      return id ? "Edit note" : "Add note";
    },
  },
};
