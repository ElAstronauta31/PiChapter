import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { QuoteDivCenter, QuoteH3, QuoteP } from "./bodyStyle";

const Quotes = () => {
    const quotes = useSelector(state => state.quotes.quotes);

    const random = () => {
        return Math.floor(Math.random() * quotes.length)
    }
    
    const ranQuote = random();

    return (
        <QuoteDivCenter>
            <QuoteP>{`"${quotes[ranQuote].quote}"`}</QuoteP>
            <QuoteH3>{`- Don ${quotes[ranQuote].author}`}</QuoteH3>
        </QuoteDivCenter>
    );
};

export default Quotes