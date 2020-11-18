<template>
  <div>
    <div class="head-inner">
      <b-container>
        <b-row>
          <b-col>
            <h3>Penelitian</h3>
            <div class="hero-image" style="background-image: url('/penelitian.png')"></div>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <NavPenelitian />

    <div class="content-inner">
      <b-container>
        <b-row>
          <b-col md="8" offset-md="2">
            <h3>Fasilitas</h3>
            <b-row>
              <b-col md="6" v-for="fasil in fasilitases" :key="fasil.id">
                <div class="image-grid" :style="{ backgroundImage: 'url(' + fasil.img + ')' }"></div>
              </b-col>
            </b-row>

            <p>Departemen Kardiologi dan Kedokteran Vaskular FKUI bersama Rumah Sakit Jantung dan Pembuluh Darah Harapan Kita memiliki fasilitas penelitian di Gedung Penelitian dan Pengembangan.</p>
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
      title: 'Fasilitas Penelitian | Departemen Kardiologi dan Kedokteran Vaskular FK UI',
      meta: [
        { hid: 'title', name: 'title', content: 'Fasilitas Penelitian | Departemen Kardiologi dan Kedokteran Vaskular FK UI' },
        { hid: 'og:title', name: 'og:title', content: 'Fasilitas Penelitian | Departemen Kardiologi dan Kedokteran Vaskular FK UI' },
        { hid: 'keywords', name: 'keywords', content: 'Yayasan, Universitas Indonesia, Kardiologi, Indonesia, Vaskular, Departemen Kardiologi, Kedokteran Vaskular, Departemen Kardiologi dan Kedokteran Vaskular FK UI' },
        { hid: 'description', name: 'description', content: 'Departemen Kardiologi dan Kedokteran Vaskular FK UI menyelenggarakan Program Spesialis Kardiovaskular dan mengembangkan penelitian di bidang kardiovaskular' },
        { hid: 'og:description', name: 'og:description', content: 'Departemen Kardiologi dan Kedokteran Vaskular FK UI menyelenggarakan Program Spesialis Kardiovaskular dan mengembangkan penelitian di bidang kardiovaskular' },
      ]
    }
  },
  data() {
    return{
      fasilitases: [
        { id: 1, img: '/fasilitas5.png'},
        { id: 2, img: '/fasilitas6.png'},
        { id: 3, img: '/fasilitas7.png'},
        { id: 4, img: '/fasilitas8.png'},
      ]
    }
  },
  mounted() {
  },
  methods: {
  }
}
</script>