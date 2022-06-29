import notePreview from "../cmps/note-preview.cmp.js";

export default {
  props: ["notes"],
  template: `
 <section class="note-list">
        <ul>
            <li v-for="note in notes" :key="note.id" class="note-preview-container" @click.native="select(note)">
    
                <note-preview :note="note"/>
            
            </li>
        </ul>
    </section>
`,
  components: {
    notePreview,
  },

  data() {
    return {};
  },
  methods: {
    // remove(noteId) {
    //   this.$emit("removed", noteId);
    // },
    select(note) {
        console.log('note', note)
      this.$emit("selected", note);
    },
  },
  computed: {},
};
