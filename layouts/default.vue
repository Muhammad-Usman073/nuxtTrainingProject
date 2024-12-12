<template>
    <div>
        <header class="shadow-sm bg-white" >
            <nav class="container mx-auto p-4 flex justify-between">
                <NuxtLink to="/" class="font-bold" > Nuxt application </NuxtLink>
                <ul class="gap-4 flex">
                    <li><NuxtLink to="/">Home</NuxtLink> </li>
                    <li><NuxtLink to="/about">About</NuxtLink></li>
                    <li><NuxtLink to="/products">products</NuxtLink></li>                   
                </ul>
            </nav>
        </header>
        <div class="container mx-auto p-4" >
<slot />
        </div>
   </div>
</template>
<style scopped>
.router-link-exact-active{
    color: #12b488;
}
</style>