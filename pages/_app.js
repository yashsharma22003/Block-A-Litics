import "@/styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css"
import 'react-toastify/dist/ReactToastify.css';
import Header from '../components/Header';
import { ToastContainer } from 'react-toastify';
import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { polygonAmoy } from "wagmi/chains";
import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function App({ Component, pageProps }) {

  const config = getDefaultConfig({
    appName: "PriceFeed",
    projectId: '0a17be4969ed49c295ead2b7a3e0adfe',
    chains: [polygonAmoy],
    ssr: true,
  })

  const queryClient = new QueryClient();

  return (<>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
        <ToastContainer />
          <Header/>
          <Component {...pageProps} />
         
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  </>);
}
