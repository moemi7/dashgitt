import { Item } from '@prisma/client';

interface InvoiceInfoItemListProps {
  items: Item[];
}

const InvoiceInfoItemList: React.FC<InvoiceInfoItemListProps> = ({ items }) => {
  return (
    <div className="bg-[#F9FAFE] p-6 dark:bg-[#252945] sm:p-8">
      {/* Table head */}
      <div className="mb-6 hidden grid-cols-9 sm:grid">
        <span className="col-span-4">Item Name</span>
        <span className="justify-self-center">QTY.</span>
        <span className="col-span-2 justify-self-end">Price</span>
        <span className="col-span-2 justify-self-end">Total</span>
      </div>
      {/* Item list */}
      <ul className="flex flex-col gap-6 sm:gap-4">
        {items.map((item, index) => (
          <li
            key={index}
            className="grid grid-cols-2 items-center font-bold text-primary sm:grid-cols-9"
          >
            <div className="flex flex-col gap-2 sm:col-span-4">
              <span>{item.name}</span>
              <span className="text-[#7E88C3] dark:text-[#888EB0] sm:hidden">
                {item.quantity} x $ {item.price}
              </span>
            </div>
            <span className="hidden justify-self-center sm:block">
              {item.quantity}
            </span>
            <span className="col-span-2 hidden justify-self-end sm:block">
              $ {item.price}
            </span>
            <span className="justify-self-end sm:col-span-2">
              $ {item.total}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InvoiceInfoItemList;
