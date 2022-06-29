import mailPreview from "../cmps/mail-preview.cmp.js";

export default {
  props: ["emails"],
  template: `
 <section class="email-list">
            <p v-for="email in emails" :key="email.id" class="email-preview-container">
                <mail-preview :email="email"/>
</p>
    </section>
`,
  components: {
    mailPreview,
  },

  data() {
    return {};
  },
  methods: {},
  computed: {},
};
