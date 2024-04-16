import OrderSummary from "./OrderSummary";

const OrderCar = () => {
  return (
    <div>
      <OrderSummary
        onPurchaseClick={() => console.log("MAKING A PURCHASE")}
      ></OrderSummary>
    </div>
  );
};

export default OrderCar;
