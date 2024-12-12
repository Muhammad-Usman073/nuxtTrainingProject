<template>
    <div>
        <h2>About</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit id veniam autem, vel ut voluptatum pariatur quia laborum laudantium consequatur!</p>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit id veniam autem, vel ut voluptatum pariatur quia laborum laudantium consequatur!</p>
   <div>{{ data }}</div>
   </div>
</template>
<script setup>
const { data } = await useFetch('/api/currency/GBP');
</script>
<style scopped >
h2{
    margin-bottom: 20px;
font-size: 36px;
}
</style>