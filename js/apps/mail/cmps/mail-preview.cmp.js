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
      </router-link>
    </strong>
        <button class="remove-mail" style="background: url(img/delete.png)" 
        @click="remove(email.id)"></button>
</div>
</ul>
      `,
  data() {
    return {
      isRead: false,
    };
  },
  methods: {
    remove(emailId) {
      this.$emit("removed", emailId);
    },
  },
  computed: {
    readMessage() {
      let text = email.subject;
      if (!isRead) return (text.style.fontWeight = "bold");
    },
  },
};
