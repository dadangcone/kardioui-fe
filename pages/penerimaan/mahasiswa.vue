<template>
  <div>
    <HeadInner menu="Penerimaan Mahasiswa" />

    <NavPenerimaan />

    <div class="content-inner">
      <b-container>
        <b-row>
          <b-col md="8" offset-md="2">
            <h3>{{ dataMahasiswa.judul }}</h3>
            
            <vue-markdown>{{ dataMahasiswa.konten }}</vue-markdown>
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
      title: 'Penerimaan Mahasiswa | Departemen Kardiologi dan Kedokteran Vaskular FK UI',
      meta: [
        { hid: 'title', name: 'title', content: 'Penerimaan Mahasiswa | Departemen Kardiologi dan Kedokteran Vaskular FK UI' },
        { hid: 'og:title', name: 'og:title', content: 'Penerimaan Mahasiswa | Departemen Kardiologi dan Kedokteran Vaskular FK UI' },
        { hid: 'keywords', name: 'keywords', content: 'Yayasan, Universitas Indonesia, Kardiologi, Indonesia, Vaskular, Departemen Kardiologi, Kedokteran Vaskular, Departemen Kardiologi dan Kedokteran Vaskular FK UI' },
        { hid: 'description', name: 'description', content: 'Departemen Kardiologi dan Kedokteran Vaskular FK UI menyelenggarakan Program Spesialis Kardiovaskular dan mengembangkan penelitian di bidang kardiovaskular' },
        { hid: 'og:description', name: 'og:description', content: 'Departemen Kardiologi dan Kedokteran Vaskular FK UI menyelenggarakan Program Spesialis Kardiovaskular dan mengembangkan penelitian di bidang kardiovaskular' },
      ]
    }
  },
  async asyncData({ route, app }) {
    let tempMahasiswa = await app.$axios.$get(`/penerimaan-mahasiswa`)
    return { dataMahasiswa : tempMahasiswa.data[0] }
  },
  data() {
    return{
    }
  },
  mounted() {
  },
  methods: {
  }
}
</script>