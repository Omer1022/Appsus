import todoTask from "./todo-task.cmp.js";

export default {
props: ['todos'],
 template: `
   
  <ul class = todo-list>
            <li v-for="todo in todos" >
        <todo-task :todo="todo"></todo-task>
            </li>
        </ul>
   
`,
data() {
return {

}
},
components: {
    todoTask
},
created() {},

computed: {},
unmounted() {},
};