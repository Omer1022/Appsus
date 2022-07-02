export default {
props:["todo"],
 template: `
 <div :class= "{isDone: todoTask.lineThrough}" @click.stop="todoTask.lineThrough = !todoTask.lineThrough">{{todoTask.txt}} <span class="doneAT">{{todoTask.doneAt}}</span></div>
`,
data() {
return {
   todoTask: {
    lineThrough: false
   }
}  
},
created() {
    this.todoTask = this.$props.todo
},
methods: {

},
computed: {},
unmounted() {},
}  