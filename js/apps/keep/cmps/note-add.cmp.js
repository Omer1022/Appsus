// import { noteService } from "../services/note-service.js";

// export default {
//   template: `

//  <section class="add-new-note">
  
//     <form @submit.prevent="add">
//     <component :is="getType"> </component>
//         <ul class="note-types-list">
//           <li><a @click="setNoteType('txt')">txt</a></li>
//           <li><a @click="setNoteType('img')"></a>img</li>
//           <li><a @click="setNoteType('todo')">todo</a></li>
//         </ul>
//         <button>Add</button>    
//     </form>
//  </section>
// `,
//   data() {
//     return { 
//       type: text
      
//     }
//   },
//   created() {
   
//   },
//   methods: {
//     getType(){
//       return
//     }
//     setNoteType(type){
//       console.log(type)
//     },
//     add() {
//       console.log('adding')
//       // if (!this.noteToEdit.title) return;
//       // noteService.save(this.noteToEdit).then((note) => {
//       //   this.$router.push("/note");
//       // });
//     },
//   },
//   computed: {

//   },
// };
