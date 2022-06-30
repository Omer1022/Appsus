import { mailService } from "../apps/mail/services/mail-service.js";
import mailFilter from "../apps/mail/cmps/mail-filter.cmp.js";
import mailList from "../apps/mail/cmps/mail-list.cmp.js";

export default {
  template: `
  <div class="sidenav">
  <button class="modal-button" v-on:click="showModal()">➕ Compose</button>
          <router-link to="/mail">📥 Inbox</router-link>
          <router-link to="/starred">⭐ Starred</router-link>
          <router-link to="/sentmail">📨 Sent Mail</router-link>
          <router-link to="/drafts">📄 Drafts</router-link>
  </div>
    <section class="mail-page">
      <mail-filter @filtered="filterMail"/>
      <mail-list @removed="removeEmail" :emails="mailsToShow"/>
      <div v-if="isModalOpen" class="show-modal">
      <h1 class="modal-header">New Message</h1>
            To:<input class="to" type="text" />
            Subject:<input class="subject" type="text" />
            Body:<input class="body" type="text" />
            <button class="send-button" v-on:click="addMail">Send</button>
</div>
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
      isModalOpen: false,
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
    showModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
      this.newNickname = "";
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
