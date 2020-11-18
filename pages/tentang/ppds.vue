<template>
  <div>
    <div class="head-inner">
      <b-container>
        <b-row>
          <b-col>
            <h3>Tentang</h3>
            <div
              class="hero-image"
              style="background-image: url('/tentang-banner.jpg')"
            ></div>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <NavTentang />

    <div class="content-inner">
      <b-container>
        <b-row>
          <b-col md="8" offset-md="2">
            <h3>PPDS</h3>
            <p>Comming Soon</p>
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
        "Tentang PPDS | Departemen Kardiologi dan Kedokteran Vaskular FK UI",
      meta: [
        {
          hid: "title",
          name: "title",
          content:
            "Tentang PPDS | Departemen Kardiologi dan Kedokteran Vaskular FK UI",
        },
        {
          hid: "og:title",
          name: "og:title",
          content:
            "Tentang PPDS | Departemen Kardiologi dan Kedokteran Vaskular FK UI",
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "Yayasan, Universitas Indonesia, Kardiologi, Indonesia, Vaskular, Departemen Kardiologi, Kedokteran Vaskular, Departemen Kardiologi dan Kedokteran Vaskular FK UI",
        },
        {
          hid: "description",
          name: "description",
          content:
            "Departemen Kardiologi dan Kedokteran Vaskular FK UI menyelenggarakan Program Spesialis Kardiovaskular dan mengembangkan penelitian di bidang kardiovaskular",
        },
        {
          hid: "og:description",
          name: "og:description",
          content:
            "Departemen Kardiologi dan Kedokteran Vaskular FK UI menyelenggarakan Program Spesialis Kardiovaskular dan mengembangkan penelitian di bidang kardiovaskular",
        },
      ],
    };
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>