export default {
  props: ["text"],
  template: `
      <li><span @click="toggleIsRead" :style="readStyle">{{formatedText}}</span></li>
  `,
  data() {
    return {
      isRead: false,
    };
  },
  methods: {
    toggleIsRead() {
      this.isRead = !this.isRead;
      console.log(this.isRead);
    },
  },
  computed: {
    formatedText() {
      return this.text;
    },
    readStyle() {
      return {
        fontSize: "17px",
        fontWeight: this.isRead ? "normal" : "bold",
      };
    },
  },
};
