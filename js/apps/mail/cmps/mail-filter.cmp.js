export default {
  props: ["emails"],
  template: `
     <section class="email-filter">
     🔍<input type="text" v-model="filterBy.subject" @input="filter" placeholder="Search mail">
     <button class="sort" @click="sort()">Sort</button>
     </section>
    `,
  data() {
    return {
      oldestFirst: false,
      filterBy: {
        subject: "",
      },
      sortBy: {
        sentAt: "",
      },
    };
  },
  methods: {
    filter() {
      this.$emit("filtered", this.filterBy);
    },
    sort() {
      this.$emit("sort", this.sortBy);
    },
  },
  computed: {
    sortedEmails: function () {
      return this.emails.sort(
        (a, b) => new Date(a.sentAt) - new Date(b.sentAt)
      );
    },
  },
};
