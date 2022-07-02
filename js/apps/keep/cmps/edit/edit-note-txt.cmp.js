
export default {
    props:["note"],
    template: `
 <input type="text" v-model="note.info.title" >
 <textarea name="" id="" cols="30" rows="10"  v-model="note.info.txt"></textarea>
  <button class="close-modal" @click="$emit('close', note)">Close</button>

`,
    data() {
        return {
            note:null,
        }  
    },
    created() { 
        this.note = this.$props.note
    },
    components:{

    },
    methods: {},
    computed: {},
    unmounted() { },
}  