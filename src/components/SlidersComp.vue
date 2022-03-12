<template>
    <div>
        <div id="form-section">
            <label for="purchase">Purchase Price</label>

            <input
                type="range"
                min="500000"
                max="1000000"
                step="50000"
                id="purchase"
                name="purchase"
                v-on:input="updatePurchasePrice"
            />
            {{ $store.state.purchasePrice }}
        </div>
        <div id="form-section">
            <label for="downpayment">Down Payment</label>
            <input
                type="range"
                min="20000"
                max="1000000"
                id="downpayment"
                name="downpayment"
                v-on:input="updateDownPayment"
            />
            {{ $store.state.downPayment }}
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            buyPrice: 0,
        };
    },
    methods: {
        updatePurchasePrice(e) {
            this.$store.state.purchasePrice = e.target.value;
        },
    },
};
</script>

<style scoped>
body {
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-image: radial-gradient(
        rgb(255, 221, 237),
        rgba(243, 145, 195, 1)
    );
}
label {
    margin-right: 5px;
}
input {
    display: inline-block;
    vertical-align: middle;
    font-size: 1em;
    font-family: Arial, sans-serif;
}

input[type="range"] {
    -webkit-appearance: none;
    margin-right: 15px;
    width: 200px;
    height: 7px;
    background: rgba(255, 255, 255, 0.6);
    border-radius: 5px;
    background-image: linear-gradient(#0051ff, #0004ff);
    background-size: 70% 100%;
    background-repeat: no-repeat;
}

#form-section {
    padding-bottom: 30px;
}
</style>
