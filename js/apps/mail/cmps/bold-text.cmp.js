export default {
  props: ["text"],
  template: `
      <li><span @click="isRead = !isRead" :style="readStyle">{{formatedText}}</span></li>
  `,
  data() {
    return {
      isRead: false,
    };
  },
  methods: {},
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
