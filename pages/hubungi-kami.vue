<template>
  <div>
    <div class="head-inner">
      <b-container>
        <b-row>
          <b-col>
            <h3>Hubungi Kami</h3>
            <div class="hero-image" style="background-image: url('/penelitian3.png')"></div>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <div class="kontak white-wrap">
      <b-container>
        <b-row>
          <b-col md="6">
            <h3 class="section-title">Sekretariat Kardiologi UI</h3>

            <div class="info-kardiologi">
              <p>
                Jl. Letjen S. Parman Kav 87, Slipi, Jakarta Barat, 11420<br/>
                P | 021-568 4085 Ext. 1427<br/>
                E | sekretariat@kardiologi-ui.com
              </p>

              <h6>Follow akun sosial media kami</h6>
              <b-link class="socmed" href="" target="_blank"><i class="fab fa-facebook-square"></i></b-link>
              <b-link class="socmed" href="" target="_blank"><i class="fab fa-twitter-square"></i></b-link>
              <b-link class="socmed" href="" target="_blank"><i class="fab fa-instagram"></i></b-link>
            </div>
          </b-col>
          <b-col md="6">
            <ValidationObserver v-slot="{ handleSubmit }" ref="observer">
              <form @submit.prevent="handleSubmit(submitKontak)">
                <b-row>
                  <b-col md="6">
                    <ValidationProvider name="Nama" rules="required" v-slot="{ errors }" class="form-wrap">
                      <b-form-input v-model="kontak.nama" :class="[{'is-invalid': errors[0] }, errors[0] ? 'mb-1' : 'mb-3' ]" placeholder="Nama"></b-form-input>
                      <span class="validator text-danger">{{ errors[0] }}</span>
                    </ValidationProvider>
                  </b-col>
                  <b-col md="6">
                    <ValidationProvider name="Email" rules="required|email" v-slot="{ errors }" class="form-wrap">
                      <b-form-input v-model="kontak.email" type="email" :class="[{'is-invalid': errors[0] }, errors[0] ? 'mb-1' : 'mb-3' ]" placeholder="Email"></b-form-input>
                      <span class="validator text-danger">{{ errors[0] }}</span>
                    </ValidationProvider>
                  </b-col>
                  <b-col md="12">
                    <ValidationProvider name="Judul" rules="required" v-slot="{ errors }" class="form-wrap">
                      <b-form-input v-model="kontak.judul" :class="[{'is-invalid': errors[0] }, errors[0] ? 'mb-1' : 'mb-3' ]" placeholder="Judul"></b-form-input>
                      <span class="validator text-danger">{{ errors[0] }}</span>
                    </ValidationProvider>
                  </b-col>
                  <b-col md="12">
                    <ValidationProvider name="Pesan" rules="required" v-slot="{ errors }" class="form-wrap">
                      <b-form-textarea v-model="kontak.pesan" :class="[{'is-invalid': errors[0] }, errors[0] ? 'mb-1' : 'mb-3' ]" placeholder="Pesan"></b-form-textarea>
                      <span class="validator text-danger">{{ errors[0] }}</span>
                    </ValidationProvider>
                  </b-col>
                </b-row>
                <div class="button-wrap">
                  <button id="submitKontak" type="submit" class="btn btn-secondary mt-3" :disabled="loading">Kirim Pesan</button>
                  <div class="load" v-if="loading">
                    <b-spinner variant="primary" label="Spinning" class="mt-2"></b-spinner>
                  </div>
                </div>
              </form>
            </ValidationObserver>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <GmapMap
      :center="{lat:-6.363259, lng:106.833672}"
      :zoom="15"
      map-type-id="terrain"
      class="map"
      :options="{
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: true,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
        disableDefaultUi: false
      }"
    >
      <GmapMarker
        :position="{lat:-6.363259, lng:106.833672}"
        icon="/marker.png"
      />
    </GmapMap>
  </div>
</template>

<script>

export default {
  head() {
    return {
      title: 'Hubungi Kami | Departemen Kardiologi dan Kedokteran Vaskular FK UI',
      meta: [
        { hid: 'title', name: 'title', content: 'Hubungi Kami | Departemen Kardiologi dan Kedokteran Vaskular FK UI' },
        { hid: 'og:title', name: 'og:title', content: 'Hubungi Kami | Departemen Kardiologi dan Kedokteran Vaskular FK UI' },
        { hid: 'keywords', name: 'keywords', content: 'Yayasan, Universitas Indonesia, Kardiologi, Indonesia, Vaskular, Departemen Kardiologi, Kedokteran Vaskular, Departemen Kardiologi dan Kedokteran Vaskular FK UI' },
        { hid: 'description', name: 'description', content: 'Departemen Kardiologi dan Kedokteran Vaskular FK UI menyelenggarakan Program Spesialis Kardiovaskular dan mengembangkan penelitian di bidang kardiovaskular' },
        { hid: 'og:description', name: 'og:description', content: 'Departemen Kardiologi dan Kedokteran Vaskular FK UI menyelenggarakan Program Spesialis Kardiovaskular dan mengembangkan penelitian di bidang kardiovaskular' },
      ]
    }
  },
  data(){
    return{
      loading: false,
      kontak: {
        nama: '',
        email: '',
        judul: '',
        pesan: '',
      }
    }
  },
	methods: {
    async submitKontak(){
      this.loading = true
      this.reset = false
      try{
        let formKontak = new FormData()
        formKontak.append('nama', this.kontak.nama)
        formKontak.append('email', this.kontak.email)
        formKontak.append('judul', this.kontak.judul)
        formKontak.append('pesan', this.kontak.pesan)

        await this.$axios.$post(`/contact-us`, formKontak)
        this.$toast.success('Terimakasih telah menghubungi kami!').goAway(3000);

        // reset form
        this.kontak.nama = ''
        this.kontak.email = ''
        this.kontak.judul = ''
        this.kontak.pesan = ''
        this.$nextTick(() => this.$refs.observer.reset());
      } catch(error){
        this.$toast.error(error).goAway(3000);
      }
      this.loading = false
    },
  }
}
</script>