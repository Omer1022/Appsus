import { mailService } from "../apps/mail/services/mail-service.js";
import mailFilter from "../apps/mail/cmps/mail-filter.cmp.js";
import mailList from "../apps/mail/cmps/mail-list.cmp.js";

export default {
  template: `
    <section class="mail-page app-main">
      <mail-filter @filtered="filterMail"/>
      <mail-list :emails="mailsToShow"/>
  </section>
`,
  components: {
    mailFilter,
    mailList,
  },
  data() {
    return {
      emails: null,
      filterBy: null,
    };
  },
  created() {
    mailService.query().then((emails) => (this.emails = emails));
  },
  methods: {
    filterMail(filterBy) {
      this.filterBy = filterBy;
    },
  },
  computed: {
    mailsToShow() {
      if (!this.filterBy) return this.emails;
      const regex = new RegExp(this.filterBy.subject, "i");
      return this.emails.filter((email) => regex.test(email.subject));
    },
  },
  unmounted() {},
};
