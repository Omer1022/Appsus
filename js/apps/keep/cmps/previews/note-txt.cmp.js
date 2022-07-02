import longText from "../../services/long-text.service.cmp.js";

export default {
    props: ["noteObj"],
    template: `
    <h3>{{noteObj.info.title}}</h3>
    <!-- <h4>{{noteObj.info.txt}}</h4> -->
    <long-text :text="noteObj.info.txt"/>
      
  `,
    data() {
      return {};
    },
    created(){
      // console.log('noteObj.info.txt',this.noteObj.info.txt.txt)
      
    },
    components: { 
      longText
    },
    methods: {},
    computed: {
   
   
    }

}
    