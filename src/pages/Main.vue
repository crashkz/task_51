<template>
    <block
        v-for="block in $store.state.blocks"
        :block="block"
    />
</template>

<script>
import {mapActions} from 'vuex'

export default{
    methods:{
        ...mapActions({
            newBlockHeaders: "newBlockHeaders"
        })
    },
    mounted(){
        this.newBlockHeaders()
    }
}

</script>

<style>
</style>
