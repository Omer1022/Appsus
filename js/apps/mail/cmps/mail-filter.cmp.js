export default {
  props: ["emails"],
  template: `
     <section class="email-filter">
        Search: <input type="text" v-model="filterBy.title" @input="filter">
     </section>
    `,
  data() {
    return {
      filterBy: {
        title: "",
      },
    };
  },
  methods: {
    filter() {
      this.$emit("filtered", this.filterBy);
    },
  },
  computed: {},
};
