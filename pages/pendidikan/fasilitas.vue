<template>
  <div>
    <HeadInner menu="Penerimaan Fasilitas" />

    <div class="gray-container">
      <b-container fluid>
        <b-row>
          <b-col md="12">
            <div class="rounded-wrap">
              <b-row>
                <b-col md="8">
                  <b-breadcrumb :items="items"></b-breadcrumb>
                  <div class="content-inner">
                    <h3>{{ dataFasilitas.judul }}</h3>
                    <b-row>
                      <b-col
                        md="6"
                        v-for="fasil in fasilitases"
                        :key="fasil.id"
                      >
                        <div
                          class="image-grid"
                          :style="{ backgroundImage: 'url(' + fasil.img + ')' }"
                        ></div>
                      </b-col>
                    </b-row>

                    <vue-markdown class="markdown">{{ dataFasilitas.konten }}</vue-markdown>
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
        "Fasilitas Penerimaan | Departemen Kardiologi dan Kedokteran Vaskular FK UI",
      meta: [
        {
          hid: "title",
          name: "title",
          content:
            "Fasilitas Penerimaan | Departemen Kardiologi dan Kedokteran Vaskular FK UI"
        },
        {
          hid: "og:title",
          name: "og:title",
          content:
            "Fasilitas Penerimaan | Departemen Kardiologi dan Kedokteran Vaskular FK UI"
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
    let tempFasilitas = await app.$axios.$get(`/pendidikan-fasilitas`);
    return { dataFasilitas: tempFasilitas.data[0] };
  },
  data() {
    return {
      fasilitases: [
        { id: 1, img: "/fasilitas.jpg" },
        { id: 2, img: "/fasilitas2.jpg" },
        { id: 3, img: "/fasilitas3.jpg" },
        { id: 4, img: "/fasilitas4.jpg" }
      ],
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
          text: "Fasilitas",
          active: true
        }
      ]
    };
  },
  mounted() {},
  methods: {}
};
</script>
