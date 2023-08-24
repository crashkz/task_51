<template>
    <div class="block_info">
        <div class="block_val">Хэш транзакции: {{ transaction.hash }}</div>
        <div class="block_val">От: {{ transaction.from }}</div>
        <div class="block_val">Кому: {{ transaction.to }}</div>
        <div class="block_val">Количество: {{ transaction.value }}</div>
    </div>

</template>

<script>
import { mapActions } from 'vuex'

export default{
    name: "transaction-item",
    data(){
        return{
            transaction: {}
        }
    },
    props:{
        transactionHash: {
            type: String
        }
    },
    methods:{
        ...mapActions({
            getTransaction: "getTransaction"
        })
    },
    async mounted(){
        this.transaction = await this.getTransaction(this.transactionHash)
    },
    watch:{
        async transactionHash(){
            this.transaction = await this.getTransaction(this.transactionHash)
        }
    }
}

</script>

<style>
.block_info{
    padding: 15px;
    border: 2px solid darkblue;
    margin-top: 15px;
}
.block_val{
    margin-top: 5px;
}
</style>
