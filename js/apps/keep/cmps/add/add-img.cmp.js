export default {
 template: `
 <form action="">
 <input  v-model="info.title" type="text" placeHolder="enter a title...">
 <input  v-model="info.url" type="text" placeHolder="enter a url...">
 <button @click = "createdTxt(txt)">add</button>
 </form>
`,
data() {
return {
    info:{
        title: '',
        url: ''
    }
}
},
created() {
    
},
methods: { 
    createdTxt(info){
        
        if (!this.info.title.length && !this.info.url.length) return
        
        this.$emit("newNote", this.info, 'note-img')
    }
},
computed: {},
unmounted() {},
}