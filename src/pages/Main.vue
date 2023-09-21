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
.btn{
    align-self: flex-end;
    padding: 10px 15px;
    background: none;
    color: darkblue;
    border: 2px solid darkblue;
    margin-left: auto;
}
</style>
