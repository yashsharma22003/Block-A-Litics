import { useAccount } from 'wagmi';
import toast, { Toaster } from 'react-hot-toast';

export default function Home() {
  const account = useAccount();
  const notify = () => toast('Please Connect Wallet First');

  const assetO = ["BTC", "DAI", "ETH", "EUR", "LNK", "MTC"];
  const assetT = ["USD", "USD", "USD", "USD", "MTC", "USD"];
  const pngs = ["BTC.png", "DAI.png", "ETH.png", "EUR.png", "LINK.png", "MATIC.png"];
  const pngsT = ["USD.png", "USD.png", "USD.png", "USD.png", "MATIC.png", "USD.png"];

  return (
    <div>
      {/* Set position to bottom-center for the Toaster */}
      <Toaster position="bottom-center" />

    

      <div className="flex w-full h-full justify-center p-2 items-center">
        {!account.isConnected ? (
          <>
            <h2 className="text-lg text-gray-600 mr-4">Your One Stop For All Web3 Price Analytics, Connect</h2>
            <h1 className=" font-bold">&</h1>
            <button
              className="hover:bg-blue-700 ml-4 p-2 bg-blue-800 rounded-lg text-gray-50 font-bold"
              onClick={notify}
            >
              Start Conversion
            </button>
          </>
        ) : (
          <a href="./Hero" className="hover:bg-blue-700 ml-4 p-2 bg-blue-800 rounded-lg text-gray-50 font-bold">
            Start Conversion
          </a>
        )}
      </div>

      <div className="flex flex-col items-center space-y-5 w-screen h-screen">
        <h1 className="text-xl font-bold p-4 bg-gray-200 w-screen flex">Asset Conversion Supported:</h1>

        <ul className="w-auto bg-gray-200">
          {assetO.map((item, index) => (
            <li key={index} className="flex justify-between p-4 w-screen">
              <span className="flex text-xl font-bold items-center ml-10">
                {item}
                <img src={pngs[index]} className="mx-4" alt={item} />
              </span>

              <img src="Arrow.png" className="" alt="Arrow" />

              <span className="text-xl font-bold flex items-center mr-10">
                {assetT[index]}
                <img src={pngsT[index]} className="mx-4" alt={assetT[index]} />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
