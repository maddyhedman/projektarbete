<template>
  <div class="home">
    <Top/>
     <CardStack class="card-stack" v-bind:cardarray="getCardStack"></CardStack>
  </div>
</template>

<script>
// @ is an alias to /src
import Top from '@/components/Top.vue';
import CardStack from "@/components/CardStack.vue";

export default {
  components: {
    CardStack, Top
  },
 data() {
   return {
     card: {
    cardClass: "",
    firstName: "",
    cardMonth: "",
    cardYear: "",
    cardVendor: "",
   }
 }
 },
  computed: {
    getCardStack() {
      return this.$root.cardStack; 
    }
  },
};
</script>

<style scoped>
.card-stack {
  margin: 2rem 0 12rem;
  display: grid;
  grid-auto-rows: 4rem;
}
</style>
