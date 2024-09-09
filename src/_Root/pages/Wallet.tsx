import HomeWallet from "@/components/Home/HomeWallet";
import TransactionHistory from "@/components/Home/TransactionHistory";

const Wallet = () => {
  return (
    <div className=" px-4 md:px-12 py-4 flex flex-col">
      <HomeWallet />
      <TransactionHistory />
    </div>
  );
};

export default Wallet;
