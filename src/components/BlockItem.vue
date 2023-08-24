<template>
    <div class="block_info">
        <div class="block_val">Номер блока: {{ block.number }}</div>
        <div class="block_val">Хэш блока: {{ block.hash }}</div>
        <div class="block_val">Газа использовано: {{ block.gasUsed }}</div>
        <div class="block_val">Стоимость: {{ block.baseFeePerGas }}</div>
        <div class="block_val">Список транзакций:</div>
        <router-link
            v-for="hash in block.transactions"
            :to="`/transaction/${hash}`"
            >
                <div class="block_val">
                    {{ hash }}
                </div>
        </router-link>
    </div>

</template>

<script>
import { mapActions } from 'vuex'

export default{
    name: "block-item",
    data(){
        return{
            block: {}
        }
    },
    props:{
        blockNumberOrHash: {
            type: String,
            required: true
        }
    },
    methods:{
        ...mapActions({
            getBlock: "getBlock"
        })
    },
    async mounted(){
        this.block = await this.getBlock(this.blockNumberOrHash)
    },
    watch:{
        async blockNumberOrHash(){
            this.block = await this.getBlock(this.blockNumberOrHash)
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
