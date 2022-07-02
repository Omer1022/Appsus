export default {
 template: `
 <form action="">
 <input  v-model="info.title" type="text" placeHolder="enter a title...">
 <input  v-model="info.url" type="text" placeHolder="enter a url...">
 <button @click = "createdTxt(txt)">add</button>
 <pre>{{info}}</pre>
 </form>
`,
data() {
return {
    info:{
        title: '',
        url: ''
    }
};
},
created() {
    
},
methods: { 
    createdTxt(info){
        // console.log('info.title.length', this.info.title.length)
        
        if (!this.info.title.length && !this.info.url.length) return
        // console.log("img add clicked");
        // console.log('this.info', this.info)
        
        this.$emit("newNote", this.info, 'note-img');
    }
},
computed: {},
unmounted() {},
}