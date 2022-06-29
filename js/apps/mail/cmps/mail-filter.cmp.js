export default {
  props: ["emails"],
  template: `
     <section class="email-filter">
     🔍<input type="text" v-model="filterBy.title" @input="filter" placeholder="Search mail">
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
