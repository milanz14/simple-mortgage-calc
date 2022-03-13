import React, { useState } from "react";
import PurchasePrice from "./PurchasePrice";
import Interest from "./Interest";
import Heading from "./Heading";
import DownPayment from "./DownPayment";
import LoanAmount from "./LoanAmount";
import Repayment from "./Repayment";
import MonthlyPayment from "./MonthlyPayment";
import CalculateIcon from "@mui/icons-material/Calculate";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { Button, Box } from "@mui/material";

function Main() {
    const [purchasePrice, setPurchasePrice] = useState(0);
    const [downPayment, setDownPayment] = useState(0);
    const [repaymentTime, setRepaymentTime] = useState(0);
    const [interestRate, setInterestRate] = useState(0);
    const [loanAmount, setLoanAmount] = useState(0);
    const [monthlyPayment, setMonthlyPayment] = useState(null);

    const handleLoanCalculation = () => {
        let loan = purchasePrice - downPayment;
        setLoanAmount(loan);
    };

    const handlePurchasePrice = (data) => {
        setPurchasePrice(data);
        handleLoanCalculation();
    };

    const handleDownPayment = (data) => {
        setDownPayment(data);
        handleLoanCalculation();
    };

    const handleRepaymentTime = (data) => {
        setRepaymentTime(data);
    };

    const handleInterestRate = (data) => {
        setInterestRate(data);
    };

    const handleButtonClick = () => {
        // Perform the monthly calculation here, set the amount and display it on the page
        const monthly =
            (loanAmount *
                (interestRate / 100 / 12) *
                ((1 + interestRate / 100 / 12) ^ (12 * repaymentTime))) /
            (((1 + interestRate / 100 / 12) ^ (12 * repaymentTime)) - 1);

        const updatedMonthly = parseFloat(monthly).toFixed(2);

        setMonthlyPayment(updatedMonthly);
    };

    const handleResetClick = () => {
        setPurchasePrice(0);
        setDownPayment(0);
        setRepaymentTime(0);
        setInterestRate(0);
        setLoanAmount(0);
        setMonthlyPayment(0);
    };

    return (
        <Box>
            <Heading />
            <PurchasePrice
                purchase={handlePurchasePrice}
                purchasePrice={purchasePrice}
            />
            <DownPayment down={handleDownPayment} downPayment={downPayment} />
            <LoanAmount loanAmount={loanAmount} />
            <Interest
                interest={handleInterestRate}
                interestRate={interestRate}
            />
            <Repayment
                repay={handleRepaymentTime}
                repaymentTime={repaymentTime}
            />
            <Button
                variant="contained"
                onClick={handleButtonClick}
                size="large"
                startIcon={<CalculateIcon />}
                sx={{
                    border: "1px solid black",
                    width: 250,
                    margin: "auto",
                }}
            >
                Calculate
            </Button>
            <Button
                variant="contained"
                onClick={handleResetClick}
                size="large"
                startIcon={<RestartAltIcon />}
                sx={{
                    border: "1px solid black",
                    width: 250,
                    margin: "auto",
                }}
            >
                Reset
            </Button>
            {monthlyPayment && (
                <MonthlyPayment monthlyAmount={monthlyPayment} />
            )}
        </Box>
    );
}

export default Main;
