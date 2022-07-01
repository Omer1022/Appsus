export default {
props:["todo"],
 template: `
 <div :class= "{isDone: lineThrough}" @click.stop="lineThrough = !lineThrough">{{todo.txt}} <span class="doneAT">{{todo.doneAt}}</span></div>
`,
data() {
return {
    lineThrough: false
};
},
created() {},
methods: {

},
computed: {},
unmounted() {},
};