export default {
    props:["id"],
 template: `
 <ul class="action-btns">
 <li class="color-picker"> <label for="create-color">  <input type="color" id="create-color" style="display: none" value="#ffffff"
                            @git input="onSetColor(value)">
                            <img src="/home/eran/Documents/git/sprint 3/Sprint3/img/paint-board-and-brush.png" alt="color-picker">
                        </label></li>
                        <li><a @click="pinned">pinned</a></li>
                        <li @click.stop="remove(noteId)"><a>trash</a></li>
 </ul>
`,
data() {
return {
    noteId:null
};
},
created() {
    this.noteId = this.$props.id
},
methods: {
    remove(noteId) {
        this.$emit("removed", noteId);
      }
},
computed: {},
unmounted() {},
};