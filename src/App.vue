<template>
  <v-app id="app" standalone>
    <v-navigation-drawer persistent light :mini-variant.sync="mini" v-model="drawer" overflow>
      <v-list class="pa-0">
        <v-list-tile avatar tag="div">
          <v-list-tile-avatar>
            <img src="https://cdn.emojidex.com/emoji/seal/black_pegasus.png?1417138123" />
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>Admin</v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-btn icon @click.native.stop="mini = !mini">
              <v-icon>chevron_left</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>

      <!--Tabbar-->



      <v-list class="pt-0" dense>
        <v-list-group v-for="item in items" :value="item.active" v-bind:key="item.title">
          <!--Tabbar-->
          <v-list-tile slot="item">
            <v-list-tile-action>
              <v-icon>{{ item.action }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ item.title }}
              </v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-icon>keyboard_arrow_down</v-icon>
            </v-list-tile-action>
          </v-list-tile>

          <v-list-tile @click.native="showMain(subItem)" v-for="(subItem, index) in item.items" :key="index">

              <v-list-tile-action>
                <v-icon>{{ subItem.action }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ subItem.title }}
                </v-list-tile-title>
              </v-list-tile-content>

          </v-list-tile>

        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar fixed class="indigo darken-4" dark>
      <v-toolbar-side-icon @click.native.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Toolbar</v-toolbar-title>
    </v-toolbar>

    <main class="main">
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </main>
  </v-app>
</template>

<script>
  export default {
    name: 'app',

    data () {
      return {
        drawer: true,
        items: [
          {
            action: 'mouse',
            title: 'Chăm sóc khách hàng',
            items: [
              { action: 'data_usage', route: '/tra_cuu_mo_mt', title: 'Tra cứu MO/MT' },
              { action: 'data_usage', route: '/lich_su', title: 'Lịch sử trừ cước' },
              { action: 'data_usage', route: '/thong_tin', title: 'Thông tin thuê bao' },
              { action: 'data_usage', route: '/lich_su_giao_dich', title: 'Lịch sử giao dịch đ.ký/hủy' },
              { action: 'data_usage', route: '/lich_su_tac_dong', title: 'Lịch sử tác động' },
              { action: 'data_usage', route: '/dang_ki', title: 'Đăng kí / Hủy dịch vụ' }
            ]
          }
        ],
        mini: false
      }
    },

    methods: {
      showMain (subItem) {
        this.$router.replace(subItem.route)
      }
    }
  }
</script>

<style scoped>
  #app {
    font-family: Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .main {
    padding-top: 0;
  }

  .nav-item {
    display: flex;
  }
</style>
