<template>
  <header>
    <div class="navbar-top">
      <b-container>
        <p>info@kardiologiui.com</p>
        <b-link to="" class="login">
          <img src="/user.png" alt="">
          <span>Member</span>
        </b-link>
      </b-container>
    </div>
    <b-navbar type="light" toggleable="lg">
      <b-container>
        <b-navbar-brand to="/"><img src="/logo.png" alt=""></b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item to="/tentang">Tentang Kami</b-nav-item>
            <b-nav-item to="/penerimaan">Penerimaan</b-nav-item>
            <b-nav-item to="/penelitian">Penelitian</b-nav-item>
            <b-nav-item to="/pengabdian-masyarakat">Pengabdian Masyarakat</b-nav-item>
            <b-nav-item to="/galeri">Galeri</b-nav-item>
            <b-nav-item to="/publikasi">Publikasi</b-nav-item>
            <b-nav-item to="/berita">Berita & Agenda</b-nav-item>
            <b-nav-item><img src="/search.png" alt=""></b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </header>
</template>
