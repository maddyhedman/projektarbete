<template>
 <div class="home">
    <Top v-bind:cardclass="cardClass"></Top>
    <Card v-bind:card="card"></Card>
    <CardForm v-bind:card="card"></CardForm>

  
   </div>
</template>
<script>

import Top from '@/components/Top.vue';
import Card from '@/components/Card.vue';
import CardForm from '@/components/CardForm.vue';

export default {
 components: {Top, Card, CardForm},

 data() {
   return {
     card: {
    cardClass: "",
    firstName: "",
    cardMonth: "",
    cardYear: "",
   }
 }
 },
 
 computed: {
   cardStack() {
     return this.$root.cardStack; 
   }
 },
}

</script>

<style scoped>


</style>