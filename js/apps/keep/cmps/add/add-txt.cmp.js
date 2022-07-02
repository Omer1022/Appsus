export default {
 template: `
 <form  action="">
 <input type="text" v-model= "info.title">
<textarea cols="30" rows="10" v-model="info.txt" placeHolder="take a note..."></textarea>
<button @click = "createdTxt(info)">add</button>
 </form>
`,
data() {
return {
    info: {
        title: '',
        txt: ''
    }
}  
},
created() {
    
},
methods: { 
    createdTxt(info){
        if (!this.info.title.length && !this.info.txt.length) return
        this.$emit("newNote", this.info, 'note-txt')  
     
    }
},
computed: {},
unmounted() {},
}