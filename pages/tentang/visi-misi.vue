<template>
  <div>
    <HeadInner menu="Tentang Kami" />

    <div class="gray-container">
      <b-container fluid>
        <b-row>
          <b-col md="12">
            <div class="rounded-wrap">
              <b-row>
                <b-col md="8">
                  <b-breadcrumb :items="items"></b-breadcrumb>
                  <div class="content-inner">
                    <h3>Visi</h3>
                    <vue-markdown class="markdown">{{ dataVM.visi }}</vue-markdown>
                    <h3>Misi</h3>
                    <vue-markdown class="markdown">{{ dataVM.misi }}</vue-markdown>
                    <!-- <p>1. Menyelenggarakan pendidikan yang didukung pengembangan riset sehingga mampu melaksanakan pelayanan kesehatan sesuai standar profesi dan iptekdokes.<br><br>

                    2. Menyelenggarakan pendidikan dengan mengembangkan organisasi dan manajemen yang berorientasi pada kualitas,otonomi,akuntanbilitas,dan akreditasi.<br><br>

                    3. Membina jaringan kemitraan dengan berbagai institusi pendidikan dan rumah sakit pemerintah maupun swasta di indonesia dan diluar negri dalam kegiatan pendidikan,penelitian dan pelayanan kesehatan</p> -->
                  </div>
                </b-col>
                <b-col md="4">
                  <NavTentang />
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
        "Tentang Visi & Misi | Departemen Kardiologi dan Kedokteran Vaskular FK UI",
      meta: [
        {
          hid: "title",
          name: "title",
          content:
            "Tentang Visi & Misi | Departemen Kardiologi dan Kedokteran Vaskular FK UI"
        },
        {
          hid: "og:title",
          name: "og:title",
          content:
            "Tentang Visi & Misi | Departemen Kardiologi dan Kedokteran Vaskular FK UI"
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
    let tempVM = await app.$axios.$get(`/visi-misi`);
    return { dataVM: tempVM.data[0] };
  },
  data() {
    return {
      items: [
        {
          text: "Beranda",
          href: "/"
        },
        {
          text: "Tentang Kami",
          href: "/tentang"
        },
        {
          text: "Visi Misi",
          active: true
        }
      ]
    };
  },
  mounted() {},
  methods: {}
};
</script>
