import longText from "./long-text.cmp.js";
import boldText from "./bold-text.cmp.js";

export default {
  props: ["email"],
  template: `
      <ul>
    <div class="mail-preview" style="{ font-weight: bold }">
        <li><input type="checkbox" /></li>
        <router-link :to="'/email/'+email.id">
        <bold-text :text="email.from"></bold-text>
        <bold-text :text="email.subject"></bold-text>
        <long-text :text="email.body"></long-text>
        <li class="sentAt">{{email.sentAt}}</li>
    </router-link>
  </div>
</ul>
      `,
  components: {
    longText,
    boldText,
  },
  data() {
    return {};
  },
  methods: {},
  computed: {},
};
