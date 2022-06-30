import longText from "./long-text.cmp.js";

export default {
    props: ["noteObj"],
    template: `
    <long-text :text="noteObj.info.txt"/>
      
  `,
    data() {
      return {};
    },
    components: { 
      longText
    },
    methods: {},
    computed: {
   
   
    }

}
    