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
            <h3>Alumni</h3>
            <p>Comming Soon</p>
          </b-col>
        </b-row>
      </b-container>
    </div>
     <div class="content-inner gray-wrap form-list">
      <b-container>
        <b-row>
          <b-col md="12">
            <b-form-input
              type="search"
              class="search-list left"
              placeholder="Cari staf pengajar"
            ></b-form-input>
            <div class="sort">
              <label for="">Filter berdasarkan</label>
              <b-form-select v-model="sort">
                <option>Semua Divisi</option>
                <option>Kardiologi Klinik</option>
                <option>
                  Kardiologi Non-Invasif Ekokardiografi dan Treadmill
                </option>
              </b-form-select>
            </div>
            <div class="clearfix"></div>
            <b-row>
              <b-col md="12">
                <div class="alumni-wrap">
                  <h3>1992</h3>
                  <h6 class="text-right">Jumlah lulusan 124</h6>
                  <div class="alumni-item">
                    <ul>
                      <li>Prof. Dr. dr. Bambang Budi Siswanto, SpJP(K)</li>
                      <li>Dr. dr. Barita S. Sitompul, SpJP(K)</li>
                      <li>dr. Dian Yaniarti Hasanah, Sp.JP</li>
                      <li>dr. Hadi Purnomo, Sp.JP(K)</li>
                      <li>dr. Hari Sakti Mulyawan, PhD, SpJP</li>
                      <li>dr. Jetty RH. Sedyawan, SpJP(K)</li>
                     
                    </ul>
                  </div>
                </div>
              </b-col>
             
             
            </b-row>
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
        "Tentang Alumni | Departemen Kardiologi dan Kedokteran Vaskular FK UI",
      meta: [
        {
          hid: "title",
          name: "title",
          content:
            "Tentang Alumni | Departemen Kardiologi dan Kedokteran Vaskular FK UI",
        },
        {
          hid: "og:title",
          name: "og:title",
          content:
            "Tentang Alumni | Departemen Kardiologi dan Kedokteran Vaskular FK UI",
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