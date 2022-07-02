import longText from "./long-text.cmp.js";
import boldText from "./bold-text.cmp.js";
import { emailsArray, mailService } from "../services/mail-service.js";

export default {
  props: ["email"],
  template: `
      <ul>
    <div class="mail-preview">
        <li><input type="checkbox" /></li>
        <router-link :to="'/email/'+email.id" @click="toggleIsRead(email.id)">
        <bold-text :text="email.from" :isRead="email.isRead"></bold-text>
        <bold-text :text="email.subject" :isRead="email.isRead"></bold-text>
        <long-text :text="email.body"></long-text>
        <li class="sentAt">{{email.sentAt}}</li>
    </router-link>
  </div>
</ul>
      `,
  components: {
    longText,
    boldText,
    mailService,
  },
  data() {
    return {};
  },
  methods: {
    toggleIsRead(id) {
      emailsArray.forEach((email) => {
        if (email.id === id) {
          email.isRead = !email.isRead;
          mailService.save(email);
        }
      });
    },
  },
  computed: {},
};
