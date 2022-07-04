import { emailsArray, mailService } from "../services/mail-service.js";

export default {
  props: ["emails"],
  template: `
     <section class="email-filter">
     🔍<input type="text" v-model="filterBy.subject" @input="filter" placeholder="Search mail">
     <button class="sort" @click="sort">Sort By Date</button>
     </section>
    `,
  components: {
    mailService,
  },
  data() {
    return {
      oldestFirst: false,
      filterBy: {
        subject: "",
      },
      sortBy: {
        sortedEmails: "",
      },
    };
  },
  methods: {
    filter() {
      this.$emit("filtered", this.filterBy);
    },
    sort() {
      this.$emit("sortEmails");
    },
  },
  computed: {},
};
