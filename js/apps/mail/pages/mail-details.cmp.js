import { mailService } from "../services/mail-service.js";

export default {
  template: `
  <div class="sidenav">
  <router-link to="/mail/compose">➕ Compose</router-link>
          <router-link to="/mail">📥 Inbox</router-link>
          <router-link to="/starred">⭐ Starred</router-link>
          <router-link to="/sentmail">📨 Sent Mail</router-link>
          <router-link to="/drafts">📄 Drafts</router-link>
  </div>
      <section v-if="email" class="email-details app-main">
          <h1>{{email.subject}}</h1>
          <h2>{{email.from}}</h2> <h4><{{email.to}}></h4>
          <p>{{email.body}}</p>
          <button class="remove-mail" style="background: url(img/delete.png)" 
        @click="remove(email.id)"></button>
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
