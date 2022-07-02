// import { noteService } from "../../services/note-service.js";

// export default {

//  template: `
//     <input v-model="task" type="text" placeHolder="list item..." @keydown.once="addItem" @keydown.enter.prevent="addTask">
//     <!-- <input v-model="task" type="text" placeHolder="list item..." @keydown.once="addItem" @keyup.enter(this) = "addTask"> -->
// `,
// data() {
// return {
//     task:''
// };
// },
// created() {},
// methods: {
//     addItem() { 
//         console.log('keydown');
//         this.$emit('addListItem')
//     },
//     addTask(ev){
//     console.log('enter')
    
//     if(!this.task.length) return
//       this.$emit('addTask', this.task)
//     }
// },
// computed: {},
// unmounted() {},
// };