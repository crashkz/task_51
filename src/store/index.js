import { createStore } from 'vuex'

// web3 - npm version 1.8.2
const Web3 = require('web3')
const web3 = new Web3('wss://eth-goerli.g.alchemy.com/v2/XruToWBXmylHCyWPYvePYpPW7r_rmbWs')

export default createStore({
    state: {
        blocks: []
    },
    getters: {
    },
    mutations: {
        addBlock(state, newBlock){
            state.blocks.unshift(newBlock)
        }
    },
    actions: {
        async newBlockHeaders({commit}){
            let subscribe = web3.eth.subscribe("newBlockHeaders")
            .on('data', block => {
                let newBlock = {
                    number: block.number,
                    hash: block.hash
                }
                commit('addBlock', newBlock)
            })
        },
        async getBlock({commit}, blockNumberOrHash){
            return await web3.eth.getBlock(blockNumberOrHash)
        },
        async getTransaction({commit}, transactionHash){
            return await web3.eth.getTransaction(transactionHash)
        }
    },
    modules: {
    }
    })
