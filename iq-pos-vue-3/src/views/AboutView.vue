<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>{{ test }}</h1>
  </div>
</template>
<script>
import { mapState } from 'pinia'
import { useCounterStore } from '../store/index'
import { ZOHO } from '../lib/ZOHO-SDK'
export default{
  data(){
    return{

    }
  },
  methods: {
    getData(){
      console.log("calling getDate...")
      let config = {
        reportName: "All_Products",
      }
      ZOHO.CREATOR.API.getAllRecords(config).then((response) => {
        console.log('fetch products response', response);
      }).catch((e) => {
        console.log("error ", e);
      }).finally(() =>{
        console.log("")
      })
    }
  },
  computed:{
    ...mapState(useCounterStore, ['test'])
  },
  created(){
    this.getData()
  }
}
</script>
