export default {
  props: ["email"],
  template: `
  <ul>
    <div class="mail-preview">
        <li><input type="checkbox" /></li>
        <router-link :to="'/email/'+email.id">
        <strong>
        <li>{{email.from}}</li>
        <li>{{email.subject}} -</li>
        <li class="email-body">{{email.body}}</li>
        <li>{{email.sentAt}}</li>
    </strong>
    </router-link>
</div>
</ul>
      `,
  data() {
    return {};
  },
  methods: {},
  computed: {},
};
