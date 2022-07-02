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
    sortedEmails: function () {
      return this.emails.sort(
        (a, b) => new Date(a.sentAt) - new Date(b.sentAt)
      );
    },
  },
};
