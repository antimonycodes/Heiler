import balanceEye from "../../assets/eye.svg"

const HomeWallet = () => {
  return (
    <div>
        <div className=" bg-customGreen text-white flex flex-col gap-4 px-4 py-4 rounded-xl">
          <h2 className=" text-white">My Balance</h2>
          <div className=" flex justify-between items-center">
          <h1>NGN 4,562.52</h1>
          <img src={balanceEye} alt="" />
          </div>
        </div>
    </div>
  )
}

export default HomeWallet