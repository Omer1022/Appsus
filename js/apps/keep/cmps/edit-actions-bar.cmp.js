export default {
 template: `
 <ul class="action-btns">
 <li class="color-picker"> <label for="create-color">  <input type="color" id="create-color" style="display: none" value="#ffffff"
                            @input="onSetColor(value)">
                            <img src="../imgs/paint-board-and-brush.png " alt="no image">
                        </label></li>
                        <li><a @click="pinned">pinned</a></li>
 </ul>
`,
data() {
return {};
},
created() {},
methods: {},
computed: {},
unmounted() {},
};