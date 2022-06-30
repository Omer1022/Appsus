import mailPreview from "../cmps/mail-preview.cmp.js";

export default {
  props: ["emails"],
  template: `
 <section class="email-list">
        <ul>
            <li v-for="email in emails" :key="email.id" class="email-preview-container" 
            @click="select(email)">
            <div class="actions">
                <button class="remove-mail" @click="remove(email.id)"></button>
                </div>
                <mail-preview :email="email"/>
            </li>
        </ul>
    </section>
`,
  components: {
    mailPreview,
  },

  data() {
    return {};
  },
  methods: {
    remove(emailId) {
      this.$emit("removed", emailId);
    },
    select(email) {
      this.$emit("selected", email);
    },
  },
  computed: {},
};
