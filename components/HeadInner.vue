<template>
  <div
    class="head-inner"
    v-if="dataBanner"
    :style="{ backgroundImage: `url('${dataBanner.url_banner}')` }"
  ></div>
</template>

<script>
import _ from "lodash";

export default {
  props: ["menu"],
  data() {
    return {
      dataBanner: null
    };
  },
  mounted() {
    this.getBanner();
  },
  methods: {
    async getBanner() {
      let getBanner = await this.$axios.$get(`/banner`);
      let filteredBanner = _.filter(getBanner.data, ["menu", this.menu]);
      let tempBanner = null;
      if (filteredBanner.length > 0) {
        tempBanner = filteredBanner[0];
      } else {
        tempBanner = [];
      }

      this.dataBanner = tempBanner;
    }
  }
};
</script>
