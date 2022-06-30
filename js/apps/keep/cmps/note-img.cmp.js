export default {
    props: ["noteObj"],
    template: `
     <img :src="noteObj.info.url" alt="note-img">
     <h2>{{noteObj.info.title}}</h2>

    
  `,
    data() {
      return {};
    },
    methods: {},
    computed: {
  
    }

}
    