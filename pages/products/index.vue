<template>
    <div>
<div class="grid grid-cols-4 gap-5">
    <div v-for="p in products"  >
        <ProductCard :product= "p" />
    </div> 
</div>
    </div>
</template>
<script setup>
useHead({
    title: 'nuxt app',
  meta: [
    { name: 'description', content: 'nuxt 3 training app' }
  ],
})
definePageMeta({
    layout: 'products'
})
const products = useState('products list');
const { data } = await useFetch('https://fakestoreapi.in/api/products');
products.value = data?._rawValue?.products;
</script>  