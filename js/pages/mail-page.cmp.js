import { mailService } from "../apps/mail/services/mail-service.js";
import mailFilter from "../apps/mail/cmps/mail-filter.cmp.js";
import mailList from "../apps/mail/cmps/mail-list.cmp.js";

export default {
  template: `
  <div class="sidenav">
  <button class="modal-button" v-on:click="showModal()">➕ Compose</button>
          <router-link to="/mail">📥 Inbox</router-link>
          <a href="#">⭐ Starred</a>
          <a href="#">📨 Sent Mail</a>
          <a href="#">📄 Drafts</a>
          <a href="#">🗑️ Trash</a>
  </div>
    <section class="mail-page">
      <mail-filter @filtered="filterMail"/>
      <mail-list @removed="removeEmail" :emails="mailsToShow"/>
      <div v-if="isModalOpen" class="show-modal">
      <h1 class="modal-header">New Message</h1>
            From:<input v-model="newFrom" type="text" />
            To:<input v-model="newTo" type="text" />
            Subject:<input v-model="newSubject" ype="text" />
            Body:<input v-model="newBody" type="text" />
            <button class="send-button" v-on:click="addEmail">Send</button>
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
    filterMail(filterBy) {
      this.filterBy = filterBy;
    },
    removeEmail(emailId) {
      mailService.remove(emailId);
      const idx = this.emails.findIndex((email) => email.id === emailId);
      this.emails.splice(idx, 1);
    },
    addEmail() {
      const id = Date.now() % 10000;
      const newEmail = {
        id,
        from: this.newFrom,
        to: this.newTo,
        subject: this.newSubject,
        body: this.newBody,
        sentAt: Date(),
      };
      this.emails.push(newEmail);
      this.closeModal();
    },
    showModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
  },
  computed: {
    save() {
      mailService.save(this.newEmail).then((email) => {
        this.$router.push("/mail");
      });
    },
    mailsToShow() {
      if (!this.filterBy) return this.emails;
      const regex = new RegExp(this.filterBy.subject, "i");
      return this.emails.filter((email) => regex.test(email.subject));
    },
  },
  unmounted() {},
};
