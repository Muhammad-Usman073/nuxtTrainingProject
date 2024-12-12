<template>
    <div>
        <ProductDetails :product="product" />
    </div>
</template>

<script setup> 
definePageMeta({
    layout: 'products'
})
import { useRoute } from 'vue-router';

const { id } = useRoute().params;
const product = useState('product data');
const uri = 'https://fakestoreapi.in/api/products/' + id;
const { data } = await useFetch(uri)
product.value = data?._rawValue?.product;
if(!product.value){
    throw createError({statusCode: 404, message:"Product Not Found", fatal: true}); 
}
</script>

<style lang="scss" scoped>

</style>