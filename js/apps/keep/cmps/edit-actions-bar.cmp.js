export default {
    props: ["note"],
    template: `
 <ul class="action-btns">
 <li @click="stopProp" class="color-picker"> <label for="create-color">  <input type="color" id="create-color" style="display: none" >
 <!-- <li @click="stopProp" class="color-picker"> <label for="create-color">  <input type="color" id="create-color" style="display: none" v-mo vbdel="backgroundStyle"> -->
                            <img style="width: 1rem"  src="../img/paint-board-and-brush.png" alt="color-picker">
                        </label></li>
                        <li><a  :style="pinnedStyle" @click.stop="TogglePinned">pinned</a></li>
                        <li @click.stop="remove"><a>trash</a></li>
 </ul>
`,
    data() {
        return {
            currNote: null
        }
    },
    created() {
        this.currNote = this.$props.note

    },
    methods: {
        remove() {
            this.$emit("removed", this.currNote.id)
        },
        TogglePinned() {
            this.currNote.isPinned = !this.currNote.isPinned
        },
        stopProp(click) {
            click.stopPropagation()
        },

    },
    computed: {
        pinnedStyle() {
            return { color: this.currNote.isPinned ? '#000000' : '#808080' }
        },



    },
    unmounted() { },
}  