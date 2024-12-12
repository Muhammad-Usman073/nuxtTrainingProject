export default defineEventHandler(async (event)=>{
const {data} = await $fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_NOLBu8mm3iOjYRAIflub3ZYoFbYdDIqkdXsIJTTH')
return data;
})