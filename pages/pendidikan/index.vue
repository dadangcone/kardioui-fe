<template>
  <div>
    <HeadInner menu="Penerimaan PPDS" />

    <div class="gray-container">
      <b-container fluid>
        <b-row>
          <b-col md="12">
            <div class="rounded-wrap">
              <b-row>
                <b-col md="8">
                  <b-breadcrumb :items="items"></b-breadcrumb>
                  <div class="content-inner">
                    <h3>{{ dataPPDS.judul }}</h3>
                    <vue-markdown>{{ dataPPDS.konten }}</vue-markdown>
                  </div>
                </b-col>
                <b-col md="4">
                  <NavPenerimaan />
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
    let tempPPDS = await app.$axios.$get(`/info-penerimaan`);
    return { dataPPDS: tempPPDS.data[0] };
  },
  data() {
    return {
      items: [
        {
          text: "Beranda",
          href: "/"
        },
        {
          text: "Penerimaan",
          href: "/penerimaan"
        },
        {
          text: "PPDS",
          active: true
        }
      ]
    };
  },
  mounted() {},
  methods: {}
};
</script>
