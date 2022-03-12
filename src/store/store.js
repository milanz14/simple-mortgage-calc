import { createStore } from "vuex";

export const store = createStore({
    state() {
        return {
            purchasePrice: 750000,
            downPayment: 0,
            repaymentTime: 0,
            interest: 0,
            loanAmount: 0,
            monthlyPayment: 0,
        };
    },
});
