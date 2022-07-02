export default {
    props:["note"],
 template: `
 
 <img :src="noteToEdit.info.url" alt="">
 <input  v-model="noteToEdit.info.title" type="text" placeHolder="enter a title...">
 <input  v-model="noteToEdit.info.url" type="text" placeHolder="enter a url...">
 <button class="close-modal" @click="$emit('close', note)">Close</button>
`,
data() {
return {
    noteToEdit:null
};
},
created() {
    this.noteToEdit = this.$props.note
    console.log( this.noteToEdit.info.url)
},
methods: {},
computed: {},
unmounted() {},
};