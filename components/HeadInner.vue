<template>
  <div class="head-inner">
    <b-container>
      <b-row>
        <b-col>
          <h3 v-if="dataBanner">{{ dataBanner.menu }}</h3>
          <div
            class="hero-image"
            v-if="dataBanner"
            :style="{ backgroundImage: `url('${dataBanner.url_banner}')`}"
          ></div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import _ from "lodash";

export default {
  props: ['menu'],
  data() {
    return {
      dataBanner: null,
    };
  },
  mounted(){
    this.getBanner()
  },
  methods: {
    async getBanner(){
      let getBanner = await this.$axios.$get(`/banner`)
      let filteredBanner = _.filter(getBanner.data, ['menu', this.menu])
      let tempBanner = null
      if(filteredBanner.length > 0){
        tempBanner = filteredBanner[0]
      } else {
        tempBanner = []
      }

      this.dataBanner = tempBanner
    }
  },
};
</script>