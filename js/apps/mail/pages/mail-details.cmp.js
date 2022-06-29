import { mailService } from "../services/mail-service.js";

export default {
  template: `
      <section v-if="email" class="email-details app-main">
          <h4>Email Details</h4>
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
    console.log("id", id);
  },
  methods: {},
  computed: {},
};
