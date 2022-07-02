export default {
  props: ["emails"],
  template: `
       <section class="email-sort">
       <button class="sort" @click="sort()">Sort</button>
       </section>
      `,
  data() {
    return {
      sortBy: {
        sentAt: "",
      },
    };
  },
  methods: {
    sort() {
      this.$emit("sort", this.sortBy);
    },
  },
  computed: {
    sortedMails: function sort() {
      function compare(a, b) {
        if (a.sentAt < b.sentAt) return -1;
        if (a.sentAt > b.sentAt) return 1;
        return 0;
      }
      return this.emails.sort(compare);
    },
  },
};
