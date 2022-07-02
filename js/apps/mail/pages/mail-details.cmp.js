import { mailService } from "../services/mail-service.js";
import mailPreview from "../cmps/mail-preview.cmp.js";

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
      <section v-if="email" class="email-details app-main">
          <h1>{{email.subject}}</h1>
          <h2>{{email.sentAt}} , {{email.time}}</h2>
          <h3>From: {{email.from}}</h3> 
          <h4>To: {{email.to}}</h4>
          <p>{{email.body}}</p>
          <div class="actions">
                <button class="remove-mail" @click="remove(email.id)"></button>
                </div>
      </section>
  `,
  components: {
    mailPreview,
  },
  data() {
    return {
      email: null,
    };
  },
  created() {
    const id = this.$route.params.emailId;
    mailService.get(id).then((email) => (this.email = email));
  },
  methods: {
    remove(emailId) {
      this.$emit("removed", emailId);
    },
  },
  computed: {},
};
