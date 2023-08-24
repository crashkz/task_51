<template>
    <div class="block">
        <div>
            <div>Номер блока: {{ block.number }}</div>
            <div>Хэш блока: {{ block.hash }}</div>
        </div>
        <button class="btn" @click="$router.push(`/block/${block.number}`)">Открыть страницу блока</button>
    </div>

   
</template>

<script>

export default{
    name: "block",
    props:{
        block: {
            type: Object,
            required: true
        }
    }
}

</script>

<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.block{
    padding: 15px; 
    border: 2px solid darkblue;
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.btn{
    align-self: flex-end; 
    padding: 10px 15px; 
    background: none;
    color: darkblue;
    border: 2px solid darkblue;
    margin-left: auto;  
} 
</style>
