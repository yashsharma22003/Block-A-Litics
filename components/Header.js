import { ConnectButton } from '@rainbow-me/rainbowkit';
import Link from 'next/link';
const Header = () => {



    return (
        <div className="flex items-center justify-between m-3">
            <a href="./">
      <h1 className="text-5xl text-gray-950 font-bold "> Block-A-Litics </h1>
      </a>
            <ConnectButton label='Connect' accountStatus="avatar" chainStatus="icon" showBalance={true} />

        </div>);
}

export default Header;