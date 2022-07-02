export default {
  props: ["text"],
  template: `
      <li><span :style="readStyle" @click="isRead = !isRead">{{formatedText}}</span></li>
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
