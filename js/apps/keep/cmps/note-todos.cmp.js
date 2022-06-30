export default {
    props: ["noteObj"],
    template: `
           <section class="todo-list">
        <ul class = todo-list>
            <li v-for="todo in noteObj.info.todos" class=" todo-item" @click="toggleCrossLIne>
          
                  
            
            </li>
        </ul>
    </section>
  `,
    data() {
      return {};
    },
    methods: {},
    computed: {
   
   
    }

}
    