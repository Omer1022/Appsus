export default {
  template: `
      <header class="app-header">
        <div class="logo">
          </div>
          <nav class="nav-bar">
          <router-link to="/home">Home</router-link>|
          <router-link to="/mail">Mail</router-link>|
          <router-link to="/keep">Keep</router-link>|
          <router-link to="/book">Book</router-link>|
  </nav>
      </header>
     `,
  data() {
    return {};
  },
  methods: {},
  computed: {},
};
