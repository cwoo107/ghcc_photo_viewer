<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawerRight"
      app
      clipped
      right
      
    >
      <v-list dense>
        <div v-for="album in list" :key="album">
        <v-list-item @click.stop="right = !right" >
          <v-list-item-action>
          </v-list-item-action>
          <v-list-item-content>
            
              <a :href="'/'+album.id">{{album.title}}</a>
            
          </v-list-item-content>
        </v-list-item>
        </div>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      clipped-right
      color="blue-grey"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Toolbar {{id}}</v-toolbar-title>
      <div class="flex-grow-1"></div>
      <v-app-bar-nav-icon @click.stop="drawerRight = !drawerRight"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-item @click.stop="left = !left">
          <v-list-item-action>
            <v-icon>mdi-exit-to-app</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Open Temporary Drawer</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-navigation-drawer
      v-model="left"
      fixed
      temporary
    ></v-navigation-drawer>

    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          justify="center"
          align="center"
        >
        <div v-for="image in info" :key='image'>
          <v-col class="shrink">
            
              <img :src="image.image.thumb.url" >
            
          </v-col>
          </div>
        </v-row>
      </v-container>
    </v-content>

    <v-navigation-drawer
      v-model="right"
      fixed
      right
      temporary
    ></v-navigation-drawer>

    <v-footer
      app
      color="blue-grey"
      class="white--text"
    >
      <span>Vuetify</span>
      <div class="flex-grow-1"></div>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    props: {
      source: String,
    },
    data: () => ({
      id: null,
      list: null,
      info: null,
      drawer: false,
      drawerRight: false,
      right: false,
      left: false,
    }),
  mounted () {
    axios
      .get('https://ghcc-photos.herokuapp.com/albums.json').then(response => (this.list = response.data),axios .get('https://ghcc-photos.herokuapp.com/album_attachments.json?album_id='+this.$route.params.id+'')
      .then(response => (this.info = response.data)))
      
  }
  }
</script>