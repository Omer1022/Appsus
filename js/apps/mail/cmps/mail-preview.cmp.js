export default {
  props: ["email"],
  template: `
  <table>
      <tr>
        <td><input type="checkbox" /></td>
        <td>{{email.from}}</td>
        <td><p><strong>{{email.subject}}</strong> - {{email.body}}</p></td>
        <td>{{email.sentAt}}</td>
      </tr>
  </table>
      `,
  data() {
    return {};
  },
  methods: {},
  computed: {},
};
