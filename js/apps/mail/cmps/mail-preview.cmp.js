export default {
  props: ["email"],
  template: `
  <ul>
    <div class="mail-preview">
        <li><input type="checkbox" /></li>
        <router-link :to="'/email/'+email.id">{{email.from}}</router-link>
        <router-link :to="'/email/'+email.id">{{email.subject}} - {{email.body}}</router-link>
        <li>{{email.sentAt}}</li>
        <button class="remove-mail" style="background: url(img/delete.png)" 
        @click="remove(email.id)"></button>
</div>
</ul>
      `,
  data() {
    return {};
  },
  methods: {
    remove(emailId) {
      this.$emit("removed", emailId);
    },
  },
  computed: {},
};
