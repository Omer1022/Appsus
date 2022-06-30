export default {
  props: ["email"],
  template: `
      <ul>
    <div class="mail-preview" style="{ font-weight: bold }">
        <li><input type="checkbox" /></li>
        <li>⭐ </li>
        <router-link :to="'/email/'+email.id">
        <li>{{email.from}}</li>
        <li>{{email.subject}} -</li>
        <li class="email-body">{{email.body}}</li>
        <li>{{email.sentAt}}</li>
    </router-link>
  </div>
</ul>
      `,
  data() {
    return {
      isRead: false,
    };
  },
  methods: {},
  computed: {},
};
