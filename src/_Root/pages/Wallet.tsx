import HomeWallet from "@/components/Home/HomeWallet";
import TransactionHistory from "@/components/Home/TransactionHistory";

const Wallet = () => {
  return (
    <div className=" px-4 md:px-12 py-4 flex flex-col md:flex-row gap-8">
      <div className=" w-full">
        <HomeWallet />
      </div>
      <div className=" w-full">
        <TransactionHistory />
      </div>
    </div>
  );
};

export default Wallet;
