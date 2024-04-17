'use client';

interface ItemListProps {
  children: React.ReactNode;
}

const ItemList: React.FC<ItemListProps> = ({ children }) => {
  return (
    <div>
      <h3 className="mb-4 text-lg font-bold text-[#777F98]">Item List</h3>
      <div className="mb-4 hidden grid-cols-12 gap-4 text-[12px] font-medium text-[#7E88C3] dark:text-[#DFE3FA] sm:grid">
        <div className="col-span-5">Item Name</div>
        <div className="col-span-2">Quantity</div>
        <div className="col-span-2">Price</div>
        <div className="col-span-2">Total</div>
        <div> </div>
      </div>
      {children}
    </div>
  );
};

export default ItemList;
