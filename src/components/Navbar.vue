<template>
    <div class="navbar">
        <div>
            <button class="btn" @click="$router.push('/')">Главная страница</button>
        </div>
        <div>
            <input v-model="blockNumberOrHash" placeholder="Введите номер или хэш блока"/>
            <button class="btn" @click="$router.push(`/block/${this.blockNumberOrHash}`)">Открыть</button>
        </div>
        <div>
            <input v-model="transactionHash" placeholder="Введите хэш транзакции"/>
            <button class="btn" @click="$router.push(`/transaction/${this.transactionHash}`)">Открыть</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "navbar",
    data(){
        return{
            blockNumberOrHash: "",
            transactionHash: ""
        }
    }

}
</script>

<style>
input{
    padding: 10px 15px;
    margin-top: 15px;
    width: 250px;
}

.navbar {
    background-color:white;
    align-items: center;
    padding: 0 15px;
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