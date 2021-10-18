<template>
  <div>
    <div
      class="head-inner"
      :style="{ backgroundImage: `url('${dataDetail.url_banner[0]}')` }"
    ></div>

    <div class="gray-container">
      <b-container fluid>
        <b-row>
          <b-col md="12">
            <div class="rounded-wrap">
              <b-row>
                <b-col md="12">
                  <b-breadcrumb :items="items"></b-breadcrumb>
                  <div class="content-inner">
                    <h3>{{ dataDetail.judul }}</h3>
                    <h6>{{ dataDetail.publish_date | formatDateSlash }}</h6>
                    <vue-markdown class="markdown">{{ dataDetail.konten }}</vue-markdown>
                    <div class="clearfix"></div>
                    <b-link class="btn-berita-detail" to="/berita"
                      >Back to berita & agenda</b-link
                    >
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
  async asyncData({ route, app }) {
    let tempDetail = await app.$axios.$get(
      `/agenda/` + route.params.slug + `/detail`
    );
    return { dataDetail: tempDetail.data };
  },
  data() {
    return {
      items: [
        {
          text: "Beranda",
          href: "/"
        },
        {
          text: "Berita & Agenda",
          href: "/berita"
        },
        {
          text: "Agenda",
          href: "/berita/agenda"
        },
        {
          text: "Detail Agenda",
          active: true
        }
      ]
    };
  },
  mounted() {},
  computed: {},
  methods: {}
};
</script>
