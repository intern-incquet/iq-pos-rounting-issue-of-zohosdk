<template>
  <HelloWorld />
</template>

<script>
import { defineComponent } from 'vue';

// Components
import HelloWorld from '../components/HelloWorld.vue';
import { ZOHO } from '../lib/ZOHO-SDK'
export default defineComponent({
  name: 'HomeView',

  components: {
    HelloWorld,
  },
  methods:{
    getData() {
      console.log("calling getDate...")
      let config = {
        reportName: "All_Products",
      }
      ZOHO.CREATOR.API.getAllRecords(config).then((response) => {
        console.log('fetch products response', response);
      }).catch((e) => {
        console.log("error ", e);
      }).finally(() => {
        console.log("")
      })
    }
  },
  created(){
    this.getData()
  }
});
</script>
