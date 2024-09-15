import { useEffect, useState } from "react";
import incomeIcon from "/greenArrows.svg";
import expenseIcon from "/redArrow.png";

const TransactionHistory = () => {
  const transactions = [
    {
      icon: incomeIcon,
      type: "Monthly Subscription",
      date: "14 Aug, 2022",
      amount: "# 10,000",
      isIncome: true,
    },
    {
      icon: expenseIcon,
      type: "Wallet Top-Up",
      date: "14 Aug, 2022",
      amount: "# 30,000",
      isIncome: false,
    },
    {
      icon: incomeIcon,
      type: "Personal Plan",
      date: "14 Aug, 2022",
      amount: "# 10,000",
      isIncome: true,
    },
    {
      icon: incomeIcon,
      type: "Personal Plan",
      date: "14 Aug, 2022",
      amount: "# 10,000",
      isIncome: true,
    },
    // { icon: incomeIcon, type: "Personal Plan", date: "14 Aug, 2022", amount: "# 10,000", isIncome: true },
  ];

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="mt-8 p-4 shadow-xl py-6">
      <div className=" flex justify-between items-center px-4">
        <h2 className="text-lg font-bold">
          {windowWidth >= 768 ? "Transaction History" : "History"}
        </h2>
        <p className=" text-customGreen hidden md:block">See all</p>
      </div>
      <div className="mt-4">
        {transactions.map((transaction, index) => (
          <div key={index} className={`flex items-center p-4 `}>
            <div className="flex-shrink-0">
              <img
                src={transaction.icon}
                alt={transaction.type}
                className="w-8 h-8"
              />
            </div>
            <div className="ml-4 flex-1">
              <h3 className="text-sm font-semibold">{transaction.type}</h3>
              <p className="text-xs text-gray-600">{transaction.date}</p>
            </div>
            <div
              className={`text-sm font-medium ${
                transaction.isIncome ? "text-green-600" : "text-red-600"
              }`}
            >
              {transaction.amount}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionHistory;
