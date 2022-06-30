export default {
    props: ["note"],
    template: `
     <!-- <img v-if= "note.type = 'note-img'" :src="note.info.url" alt="note-img"> -->
     <p>{{note.id}}</p>
      <p >{{note.info.txt}}</p>
    
     
  `,
    data() {
      return {};
    },
    methods: {},
    computed: {
   
   
    }

}
    