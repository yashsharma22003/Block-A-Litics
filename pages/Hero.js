import contract from "../components/contract";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import PriceFeed from "@/components/PriceFeed";
import { ToastContainer, toast } from "react-toastify"; // Import ToastContainer and toast

const Hero = () => {
    const { isConnected } = useAccount();
    const [address, setAddress] = useState([]);
    const [prices, setPrices] = useState([]);

    useEffect(() => {
        const setupContractListener = async () => {
            const contractInstance = await contract();

            const eventListener = (address, price) => {
                setAddress((prevAddresses) => [...prevAddresses, address]);
                setPrices((prevPrices) => [...prevPrices, price]);
                console.log("Event listened:", address, price);
            };

            // Listen for the event
            contractInstance.on("addresses", eventListener);

            // Cleanup function to remove the event listener
            return () => {
                contractInstance.off("addresses", eventListener);
            };
        };

        if (isConnected) {
            setupContractListener();
        }
    }, [isConnected]);

    const retrievePrices = async () => {
        const toastId = toast.loading('Fetching prices...'); // Show loading toast
        try {
            const contractInstance = await contract();
            console.log("Contract Instance", contractInstance);
            const tx = await contractInstance.getPrices();
            const receipt = await tx.wait();
            console.log("Receipt =", receipt);
            toast.update(toastId, { render: 'Prices retrieved successfully!', type: 'success', isLoading: false, autoClose: 3000 }); // Update toast to success message
        } catch (error) {
            console.error("Error retrieving prices Max MetaMask Requests Exceeded Please Wait:");
            toast.update(toastId, { render: 'Error retrieving prices, Max MetaMask Requests Exceeded Please Wait: ' , type: 'error', isLoading: false, autoClose: 3000 }); // Update toast to error message
        }
    };

    return (
        <div>
            {address.length > 0 ? (
                <div className="flex w-screen border-4 h-screen items-center justify-center space-x-10 bg-gray-300">
                    <div>
                        <h1 className="ml-10">Crypto Prices Retrieved From Chainlink Oracle</h1>
                        <a href="./Hero">
                            <button className="rounded-lg bg-blue-400 text-gray-100 text-2xl p-2 m-12">
                                Refresh Prices    
                            </button>
                        </a>
                    </div>
                    <PriceFeed add={address} prices={prices} />
                </div>
            ) : (
                <div className="flex w-screen border-4 h-screen items-center justify-center space-x-10 bg-gray-300">
                    <h1>Click Get Prices To Retrieve Crypto Prices</h1>
                    <button onClick={retrievePrices} className="rounded-lg bg-blue-400 text-gray-100 text-2xl p-2">
                        Get Prices
                    </button>
                </div>
            )}
            <ToastContainer position="bottom-center" autoClose={5000} hideProgressBar={false} closeOnClick draggable pauseOnHover /> {/* Set position here */}
        </div>
    );
};

export default Hero;
