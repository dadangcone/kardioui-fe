<template>
  <div>
    <div class="head-inner">
      <b-container>
        <b-row>
          <b-col>
            <div
              class="hero-image"
              :style="{ backgroundImage: `url('${dataDetail.url_banner}')`}"
            ></div>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <div class="content-inner">
      <b-container>
        <b-row>
          <b-col md="8" offset-md="2">
            <h3>{{ dataDetail.judul }}</h3>
            <h6>{{ dataDetail.publish_date | formatDateSlash }} oleh {{ dataDetail.penulis }}</h6>
            <div class="berita-detail"> <vue-markdown>{{ dataDetail.konten }}</vue-markdown></div>
            <b-link class="btn-berita-detail" to="/berita">Kembali ke halaman berita & agenda</b-link>
          </b-col>
        </b-row>
      </b-container>
    </div>
    
  </div>
</template>

<script>
export default {
  async asyncData({ route, app }) {
    let tempDetail = await app.$axios.$get(`/berita/` + route.params.slug + `/detail`)
    return { dataDetail : tempDetail.data }
  },
  data() {
    return{
    }
  },
  mounted() {
  },
  computed: {
  },
  methods: {
  },
}
</script>