<template>
    <div class="navbar">
        <button class="btn" @click="$router.push('/')">Главная страница</button>
        <button class="btn" @click="connectionWallet">Подключить Metamask</button>
        <button class="btn" @click="deployContract">Деплой контракта</button>
        <div class="user_info">
            <h2>Данные пользователя</h2>
            <div class="user_info">Адрес пользователя: {{ $store.state.wallet.address }}</div>
            <div class="user_info">Название сети: {{ $store.state.wallet.chain }}</div>
            <div class="user_info">ID сети: {{ $store.state.wallet.chainId }}</div>
        </div>
    </div>

    <div class="navbar">
        <div class="user_info">
            <h2>Изменение переменных</h2>
            <div>
                <input v-model="cAddress" placeholder="Укажите адрес контракта"/>
            </div>
            <div>
                <input v-model="number" placeholder="Укажите число"/>
                <button class="btn" @click="sNumber">Отправить</button>
            </div>
            <div>            
                <input v-model="string" placeholder="Укажите текст"/>
                <button class="btn" @click="sString">Отправить</button>
            </div>
            <div>            
                <input v-model="array" placeholder="Укажите массив"/>
                <button class="btn" @click="sArray">Отправить</button>
            </div>
            <h2>Просмотр переменных</h2>
            <div class="user_info">Number: {{ answerNumber }}</div>
            <div class="user_info">String: {{ answerString }}</div>
            <div class="user_info">Array: {{ answerArray }}</div>
            <div> 
                <button class="btn" @click="gNumber">Получить число</button>
                <button class="btn" @click="gString">Получить строку</button>
                <button class="btn" @click="gArray">Получить массив</button>
                <button class="btn" @click="$router.push(`/transaction/${$store.state.txHash}`)">Открыть последнию транзакцию</button>
            </div>
           
        </div>
    </div>

    <div class="navbar">
        <div class="user_info">
            <h2>Отправить ETH</h2>
            <input v-model="to" placeholder="Укажите адрес получателя"/>
            <input v-model="value" placeholder="Укажите сумму"/>
            <button class="btn" @click="sendTx">Отправить</button>
        </div>
    </div>
    <div class="navbar">
        <div class="user_info">
            <h2>Просмотр блока/транзакции</h2>
            <input v-model="blockNumberOrHash" placeholder="Введите номер или хэш блока"/>
            <button class="btn" @click="$router.push(`/block/${this.blockNumberOrHash}`)">Открыть</button>
            <div>
                <input v-model="transactionHash" placeholder="Введите хэш транзакции"/>
                <button class="btn" @click="$router.push(`/transaction/${this.transactionHash}`)">Открыть</button>
            </div>
        </div>

    </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
    methods:{
        ...mapActions({
            connectionWallet: "connectionWallet",
            sendTransaction: "sendTransaction",
            deployContract: "deployContract",
            setNumber: "setNumber",
            getNumber: "getNumber",
            setString: "setString",
            getString: "getString",
            setArray: "setArray",
            getArray: "getArray"
        }),
        async sendTx() {
            await this.sendTransaction(this.to, this.value)
            this.to = ""
            this.value = ""
        },
        async sNumber() {
            await this.setNumber([this.cAddress, this.number])
        },
        async gNumber() {
            this.answerNumber = await this.getNumber(this.cAddress)
        },
        async sString() {
            await this.setString([this.cAddress, this.string])
        },
        async gString() {
            this.answerString = await this.getString(this.cAddress)
        },
        async sArray() {
            await this.setArray([this.cAddress, this.array])
        },
        async gArray() {
            this.answerArray = await this.getArray(this.cAddress)
        },
        
    },
    name: "navbar",
    data(){
        return{
            blockNumberOrHash: "",
            transactionHash: "",
            to: "",
            value: "",
            cAddress: "",
            number: "",
            answerNumber: "",
            string: "",
            answerString: "",
            array: "",
            answerArray: ""
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
.user_info{
    padding: 15px;
    border: 2px solid darkblue;
    margin-top: 15px;
}

</style>