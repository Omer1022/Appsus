export default {
  props: ["email"],
  template: `
  <ul>
    <div class="mail-preview">
        <li><input type="checkbox" /></li>
        <li>{{email.from}}</li>
        <li>{{email.subject}} - {{email.body}}</li>
        <li>{{email.sentAt}}</li>
</div>
</ul>
      `,
  data() {
    return {};
  },
  methods: {},
  computed: {},
};
