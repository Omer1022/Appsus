import { noteService } from "../../services/note-service.js"


export default {
 template: `
 <form  action="">
 <input v-model="txt" type="text" placeHolder="take a note...">
<button @click = "createdTxt(txt)">add</button>
<p>the new note: {{txt}}</p>
 </form>
`,
data() {
return {
    txt: ''
};
},
created() {
    
},
methods: { 
    createdTxt(txt){
        this.$emit("newText", txt);
     
    }
},
computed: {},
unmounted() {},
}