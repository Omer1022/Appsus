import longText from "../../services/long-text.service.cmp.js";

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
    