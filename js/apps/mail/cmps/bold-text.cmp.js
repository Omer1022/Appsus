export default {
  props: ["text", "isRead"],
  template: `
      <li><span :style="readStyle">{{formatedText}}</span></li>
  `,
  data() {
    return {};
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
