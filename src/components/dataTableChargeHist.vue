<template>
    <div>
        <div class="title" style="text-align:left">Charge Hist</div>
        <!--Input-->
        <div>
            <v-layout row>
                <v-flex xs3>
                    <v-subheader></v-subheader>
                </v-flex>
                <v-flex xs4>
                    <v-text-field
                            v-model="phoneNumber"
                            name="input-1"
                            label="Nhập số điện thoại"
                            id="testing"
                    ></v-text-field>
                </v-flex>
                <v-flex xs3>
                    <v-btn primary dark @click.native="searchChargeHist">Tìm kiếm</v-btn>
                </v-flex>
            </v-layout>
            <!--Card-->
            <v-card class="grey lighten-4" flat height="200px">
                <v-toolbar class="white" light dense>
                    <v-toolbar-title>Show <select><option>7</option><option>20</option></select>entries</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn icon>
                        <v-icon>search</v-icon>
                    </v-btn>
                    <v-text-field style="margin-top:24px;margin-bottom:0"
                                  name="input-2"
                                  label="Search"
                    ></v-text-field>
                </v-toolbar>
                <!--dataTableChargeHist-->
                <v-data-table
                        v-bind:headers="headers"
                        v-bind:items="items"
                        v-bind:search="search"
                        v-bind:pagination.sync="pagination"
                        class="elevation-1"
                >
                    <template slot="headerCell" scope="props">
                                <span v-tooltip:bottom="{ 'html': props.header.text }">
                                    {{ props.header.text }}
                                </span>
                    </template>
                    <template slot="items" scope="props">
                        <td>{{ props.item.id }}</td>
                        <td  class="text-xs-right">{{ props.item.isdn }}</td>
                        <td  class="text-xs-right">{{ props.item.status }}</td>
                        <td  class="text-xs-right">{{ props.item.charge_price }}</td>
                        <td  class="text-xs-right">{{ props.item.packageCode }}</td>
                        <td  class="text-xs-right">{{ props.item.created_at }}</td>
                        <td  class="text-xs-right">{{ props.item.calcium }}</td>
                        <td  class="text-xs-right">{{ props.item.seviceCode }}</td>
                    </template>
                </v-data-table>
                <div class="text-xs-center pt-2">
                    <v-btn primary @click.native="toggleOrder">Toggle sort order</v-btn>
                    <v-btn primary @click.native="nextSort">Sort next column</v-btn>
                </div>
            </v-card>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'dataTableChargeHist',
    data () {
      return {
        phoneNumber: '',
        search: '',
        pagination: {
          sortBy: 'fat'
        },
        selected: [],
        headers: [
          {
            text: 'Id',
            align: 'left',
            value: 'id'
          },
          { text: 'Số điện thoại', value: 'isdn' },
          { text: 'Trạng thái', value: 'status' },
          { text: 'Giá', value: 'charge_price' },
          { text: 'Kênh', value: 'packageCode' },
          { text: 'Thời gian', value: 'created_at' },
          { text: 'Đ.ký/G.hạn', value: 'calcium' },
          { text: 'Thông tin mã lỗi', value: 'seviceCode' }
        ],
        items: []
      }
    },
    methods: {
      toggleOrder () {
        this.pagination.descending = !this.pagination.descending
      },
      nextSort () {
        let index = this.headers.findIndex(h => h.value === this.pagination.sortBy)
        index = (index + 1) % this.headers.length
        index = index === 0 ? index + 1 : index
        this.pagination.sortBy = this.headers[index].value
      },
      searchChargeHist () {
        const api = `/api/LichSuTruCuoc`
        this.axios.post(api, {
          phone: this.phoneNumber
        }).then(res => {
          console.log('success')
          this.items = res.data
        }).catch(error => {
          console.log(error)
        })
      }
    }
  }
</script>
