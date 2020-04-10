<template>
  <div>
    <Header @showCP="showCP = !showCP" />

    <b-container fluid>
      <b-row>
        <b-col md="1" cols="2" class="bg-info full-height">
          <side-bar />
        </b-col>
        <b-col md="7" cols="10" class="bg-success full-height">
          <content-area />
        </b-col>
        <b-col md="4" cols="12" class="bg-danger full-height d-none d-md-block">
          <checkout-panel />
        </b-col>
      </b-row>
      <b-col cols="10" v-if="showCP" class="cp full-height">
        <checkout-panel />
      </b-col>
    </b-container>
  </div>
</template>

<script>
import Header from "@/components/Header";

import SideBar from "@/components/Shopika/Sidebar";
import ContentArea from "@/components/Shopika/ContentArea";
import CheckoutPanel from "@/components/Shopika/CheckoutPanel";
export default {
  data() {
    return {
      showCP: false
    };
  },
  components: {
    Header,
    SideBar,
    ContentArea,
    CheckoutPanel
  }
};
</script>

<style>
.full-height {
  height: 90vh;
}
.cp {
  position: absolute;
  top: 10vh;
  right: 0;
  background: darkred;
}
</style>