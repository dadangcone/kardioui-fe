<template>
  <div>
    <HeadInner menu="Penelitian Fasilitas" />

    <div class="gray-container">
      <b-container fluid>
        <b-row>
          <b-col md="12">
            <div class="rounded-wrap">
              <b-row>
                <b-col md="8">
                  <b-breadcrumb :items="items"></b-breadcrumb>
                  <div class="content-inner">
                    <h3>{{ dataPenelitian.judul }}</h3>
                    <b-row>
                      <b-col
                        md="6"
                        v-for="fasil in dataPenelitian.fasilitas_penelitian_image"
                        :key="fasil.id"
                      >
                        <div
                          class="image-grid"
                          :style="{
                            backgroundImage: 'url(' + fasil.url_image + ')'
                          }"
                        ></div>
                      </b-col>
                    </b-row>

                    <vue-markdown class="markdown">{{ dataPenelitian.konten }}</vue-markdown>
                  </div>
                </b-col>
                <b-col md="4">
                  <NavPenelitian />
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
        "Fasilitas Penelitian | Departemen Kardiologi dan Kedokteran Vaskular FK UI",
      meta: [
        {
          hid: "title",
          name: "title",
          content:
            "Fasilitas Penelitian | Departemen Kardiologi dan Kedokteran Vaskular FK UI"
        },
        {
          hid: "og:title",
          name: "og:title",
          content:
            "Fasilitas Penelitian | Departemen Kardiologi dan Kedokteran Vaskular FK UI"
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
    let tempPenelitian = await app.$axios.$get(`/fasilitas-penelitian`);
    return { dataPenelitian: tempPenelitian.data.data[0] };
  },
  data() {
    return {
      fasilitases: [
        { id: 1, img: "/fasilitas5.png" },
        { id: 2, img: "/fasilitas6.png" },
        { id: 3, img: "/fasilitas7.png" },
        { id: 4, img: "/fasilitas8.png" }
      ],
      items: [
        {
          text: "Beranda",
          href: "/"
        },
        {
          text: "Penelitian",
          href: "/penelitian"
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
