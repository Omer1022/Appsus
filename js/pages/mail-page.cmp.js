import { mailService } from "../apps/mail/services/mail-service.js";
import mailFilter from "../apps/mail/cmps/mail-filter.cmp.js";
import mailList from "../apps/mail/cmps/mail-list.cmp.js";

export default {
  template: `
    <section class="mail-page">
      <mail-filter @filtered="filterMail"/>
      <mail-list @removed="removeEmail" :emails="mailsToShow"/>
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
    removeEmail(emailId) {
      mailService.remove(emailId);
      const idx = this.emails.findIndex((email) => email.id === emailId);
      this.emails.splice(idx, 1);
    },
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
