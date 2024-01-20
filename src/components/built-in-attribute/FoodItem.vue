<template>

   
    <tr><td>{{foodName}}</td><td>{{ foodDesc }}</td><td>{{ isFavorite }}</td></tr>
   
</template>

<script>
export default {
    props: ['foodName','foodDesc','isFavorite'],
}
</script>