<template>
    <div>
        <v-app id="example-2" standalone>
            <v-navigation-drawer persistent light :mini-variant.sync="mini" v-model="drawer" overflow>

                <v-list class="pa-0">
                    <v-list-tile avatar tag="div">
                        <v-list-tile-avatar>
                            <img src="http://file.vforum.vn/hinh/2016/07/hot-girl-han-quoc-2016(1).jpg" />
                        </v-list-tile-avatar>
                        <v-list-tile-content>
                            <v-list-tile-title>John Leider</v-list-tile-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                            <v-btn icon @click.native.stop="mini = !mini">
                                <v-icon>chevron_left</v-icon>
                            </v-btn>
                        </v-list-tile-action>
                    </v-list-tile>
                </v-list>

                <v-list class="pt-0" dense>
                    <v-list-group v-for="item in items" :value="item.active" v-bind:key="item.title">
                        <v-list-tile slot="item">
                            <v-list-tile-action>
                                <v-icon>{{ item.action }}</v-icon>
                            </v-list-tile-action>
                            <v-list-tile-content>
                                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                            </v-list-tile-content>
                            <v-list-tile-action>
                                <v-icon>keyboard_arrow_down</v-icon>
                            </v-list-tile-action>
                        </v-list-tile>
                        <v-list-tile v-for="subItem in item.items" v-bind:key="subItem.title">
                            <v-list-tile-action>
                                <v-icon>{{ subItem.action }}</v-icon>
                            </v-list-tile-action>
                            <v-list-tile-content>
                                <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </v-list-group>
                </v-list>

            </v-navigation-drawer>
            <v-toolbar fixed class="indigo darken-4" dark>
                <v-toolbar-side-icon @click.native.stop="drawer = !drawer"></v-toolbar-side-icon>
                <v-toolbar-title>Toolbar</v-toolbar-title>
            </v-toolbar>
            <main>
                <v-container fluid>
                    <!--dataTableLogSms-->
                    <dataTableLogSms></dataTableLogSms>
                    <!--v-router-->
                </v-container>
            </main>
        </v-app>
    </div>
</template>

<script>
    import dataTableLogSms from './dataTableLogSms.vue'
    export default {
      name: 'logsms',
      data () {
        return {
          drawer: true,
          items: [
            {
              action: 'mouse',
              title: 'Chăm sóc khách hàng',
              items: [
                { action: 'data_usage', title: 'Tra cứu MO/MT' },
                { action: 'data_usage', title: 'Lịch sử trừ cước' },
                { action: 'data_usage', title: 'Thông tin thuê bao' },
                { action: 'data_usage', title: 'Lịch sử giao dịch đ.ký/hủy' },
                { action: 'data_usage', title: 'Lịch sử tác động' },
                { action: 'data_usage', title: 'Đăng kí / Hủy dịch vụ' }
              ]
            }
          ],
          mini: false,
          right: null
        }
      },
      components: {
        dataTableLogSms
      }
    }
</script>

<style>
    .toolbar--fixed+main {
        padding-top: 0px;
    }
</style>
