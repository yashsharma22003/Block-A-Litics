import PriceCard from "./PriceCard";

const priceFeed = (props) => {


  
    const addressMap = new Array(
        { base: "BTC", quote: "USD" },
        { base: "DAI", quote: "USD" },
        { base: "ETH", quote: "USD" },
        { base: "EUR", quote: "USD" },
        { base: "LINK", quote: "MATIC" },
        { base: "LINK", quote: "USD" }
    );
    
      const propsAddresses = props.add; 
      const pricesArray = props.prices; 
    
      console.log("adresses", propsAddresses);
      console.log("prices", pricesArray);



      
    return(<div>

<PriceCard tokenPair={addressMap} addresses={propsAddresses} prices={pricesArray} />

        {/* <ul>
        {
            propsAddresses.map((address, index) => (
                <li key={index}> <PriceCard tokenPair={addressMap} addresses={propsAddresses} prices={pricesArray} /> </li>
            ))
        }
        </ul> */}
        

    </div>);

}

export default priceFeed;