import React from "react";
import { Slider, Box } from "@mui/material";

function PurchasePrice(props) {
    const { purchase, purchasePrice } = props;
    return (
        <Box
            sx={{
                border: "1px solid black",
                width: 500,
                margin: "auto",
            }}
        >
            <h2>Purchase Price</h2>
            <p>What's the price of the home?</p>
            <label htmlFor="purchaseprice"></label>
            <Slider
                type="range"
                id="purchaseprice"
                name="purchaseprice"
                min={100000}
                max={2000000}
                step={10000}
                value={purchasePrice}
                onChange={(e) => purchase(e.target.value)}
                sx={{
                    width: 300,
                    color: "#5D3FD3",
                }}
            />
            <Box mb={3}>$ {purchasePrice}</Box>
        </Box>
    );
}

export default PurchasePrice;
