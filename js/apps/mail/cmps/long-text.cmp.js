export default {
  props: ["text"],
  template: `
    <li><span :style="readStyle" v-if="!isMore && longText">{{formatedText}}...</span></li>
`,
  data() {
    return {
      isMore: false,
      longText: this.text.length > 10,
    };
  },
  methods: {},
  computed: {
    formatedText() {
      return this.isMore ? this.text : this.text.slice(0, 10);
    },
    readStyle() {
      return {
        fontSize: "13px",
        color: "gray",
      };
    },
  },
};
