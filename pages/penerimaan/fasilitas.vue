<template>
  <div>
    <div class="head-inner">
      <b-container>
        <b-row>
          <b-col>
            <h3>Penerimaan</h3>
            <div class="hero-image" style="background-image: url('/penerimaan3.png')"></div>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <NavPenerimaan />

    <div class="content-inner">
      <b-container>
        <b-row>
          <b-col md="8" offset-md="2">
            <h3>{{ dataFasilitas.judul }}</h3>
            <b-row>
              <b-col md="6" v-for="fasil in fasilitases" :key="fasil.id">
                <div class="image-grid" :style="{ backgroundImage: 'url(' + fasil.img + ')' }"></div>
              </b-col>
            </b-row>

            <vue-markdown>{{ dataFasilitas.konten }}</vue-markdown>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>

export default {
  head() {
    return {
      title: 'Fasilitas Penerimaan | Departemen Kardiologi dan Kedokteran Vaskular FK UI',
      meta: [
        { hid: 'title', name: 'title', content: 'Fasilitas Penerimaan | Departemen Kardiologi dan Kedokteran Vaskular FK UI' },
        { hid: 'og:title', name: 'og:title', content: 'Fasilitas Penerimaan | Departemen Kardiologi dan Kedokteran Vaskular FK UI' },
        { hid: 'keywords', name: 'keywords', content: 'Yayasan, Universitas Indonesia, Kardiologi, Indonesia, Vaskular, Departemen Kardiologi, Kedokteran Vaskular, Departemen Kardiologi dan Kedokteran Vaskular FK UI' },
        { hid: 'description', name: 'description', content: 'Departemen Kardiologi dan Kedokteran Vaskular FK UI menyelenggarakan Program Spesialis Kardiovaskular dan mengembangkan penelitian di bidang kardiovaskular' },
        { hid: 'og:description', name: 'og:description', content: 'Departemen Kardiologi dan Kedokteran Vaskular FK UI menyelenggarakan Program Spesialis Kardiovaskular dan mengembangkan penelitian di bidang kardiovaskular' },
      ]
    }
  },
  async asyncData({ route, app }) {
    let tempFasilitas = await app.$axios.$get(`/penerimaan-fasilitas`)
    return { dataFasilitas : tempFasilitas.data[0] }
  },
  data() {
    return{
      fasilitases: [
        { id: 1, img: '/fasilitas.jpg'},
        { id: 2, img: '/fasilitas2.jpg'},
        { id: 3, img: '/fasilitas3.jpg'},
        { id: 4, img: '/fasilitas4.jpg'},
      ]
    }
  },
  mounted() {
  },
  methods: {
  }
}
</script>