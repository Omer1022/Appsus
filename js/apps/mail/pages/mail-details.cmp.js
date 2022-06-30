import { mailService } from "../services/mail-service.js";

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
          <h2>{{email.from}}</h2> 
          <h4>{{email.to}}</h4>
          <p>{{email.body}}</p>
      </section>
  `,
  data() {
    return {
      email: null,
    };
  },
  created() {
    const id = this.$route.params.emailId;
    mailService.get(id).then((email) => (this.email = email));
  },
  methods: {},
  computed: {},
};
