<template>
  <div>
    <HeadInner menu="Pengabdian Masyarakat" />

    <div class="gray-container">
      <b-container fluid>
        <b-row>
          <b-col md="12">
            <div class="rounded-wrap">
              <b-row>
                <b-col md="12">
                  <b-breadcrumb :items="items"></b-breadcrumb>
                  <div class="content-inner">
                    <h3>{{ dataPM.judul }}</h3>
                    <vue-markdown class="markdown">{{ dataPM.deskripsi }}</vue-markdown>
                  </div>
                </b-col>
              </b-row>
            </div>
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
      title:
        "Penerimaan PPDS | Departemen Kardiologi dan Kedokteran Vaskular FK UI",
      meta: [
        {
          hid: "title",
          name: "title",
          content:
            "Penerimaan PPDS | Departemen Kardiologi dan Kedokteran Vaskular FK UI"
        },
        {
          hid: "og:title",
          name: "og:title",
          content:
            "Penerimaan PPDS | Departemen Kardiologi dan Kedokteran Vaskular FK UI"
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "Yayasan, Universitas Indonesia, Kardiologi, Indonesia, Vaskular, Departemen Kardiologi, Kedokteran Vaskular, Departemen Kardiologi dan Kedokteran Vaskular FK UI"
        },
        {
          hid: "description",
          name: "description",
          content:
            "Departemen Kardiologi dan Kedokteran Vaskular FK UI menyelenggarakan Program Spesialis Kardiovaskular dan mengembangkan penelitian di bidang kardiovaskular"
        },
        {
          hid: "og:description",
          name: "og:description",
          content:
            "Departemen Kardiologi dan Kedokteran Vaskular FK UI menyelenggarakan Program Spesialis Kardiovaskular dan mengembangkan penelitian di bidang kardiovaskular"
        }
      ]
    };
  },
  async asyncData({ route, app }) {
    let tempPM = await app.$axios.$get(`/pelayanan-masyarakat`);
    return { dataPM: tempPM.data[0] };
  },
  data() {
    return {
      items: [
        {
          text: "Beranda",
          href: "/"
        },
        {
          text: "Pengabdian Masyarakat",
          active: true
        }
      ]
    };
  },
  mounted() {},
  methods: {}
};
</script>
