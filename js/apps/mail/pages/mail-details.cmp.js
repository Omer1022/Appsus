import { mailService } from "../services/mail-service.js";

export default {
  template: `
      <section v-if="email" class="email-details app-main">
          <h1>{{email.subject}}</h1>
          <p>From - {{email.from}}</p>
          <p>To - {{email.to}}</p>
          <p>{{email.body}}</p>
          <button @click="$emit('close')">Back To Emails</button>
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
