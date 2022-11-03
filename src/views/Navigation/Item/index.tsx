import { defineComponent } from 'vue';
import './index.less';

export default defineComponent({
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
  setup() {
    return {};
  },
  methods: {},
  render() {
    const { data } = this;
    return (
      <a href={data.value} target="_blank" class="level3">
        <div class="title" title={data.label}>
          <img class="img" src={data.icon} />
          {data.label}
        </div>
        <div class="desc" title={data.desc}>
          {data.desc}
        </div>
      </a>
    );
  },
});
