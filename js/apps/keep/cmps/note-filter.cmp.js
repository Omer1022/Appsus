export default {
  template: `
   <section class="note-filter">
      <form action="">
      Filter by title:
      <input type="text" v-model="filterBy.title" @input="filter" placeholder="Enter title....">
      Filter by price
      <input type="range" v-model="filterBy.price" @input="filter" min="0" max="250" :title="filterBy.price" >
      </form>
   </section>
  `,
  data() {
    return {
      filterBy: {
        title: '',
        price: 0
      },
    }
  },
  methods: {
    filter() {
      this.$emit("filtered", this.filterBy)
    },
  },
  computed: {

  },
}
