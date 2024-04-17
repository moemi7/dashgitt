'use client';

//import { useCallback } from "react";
//import { Plus } from "@/assets/icons";
//import Filter from "./Filter";

//import { SafeUser } from "@/types";
import StudentCreateForm from '@/pages/leads/components/student-forms/student-create-form';
//import { Modal } from '@/components/ui/modal';
//import PopupModal from '@/components/shared/popup-modal';
import Empty from './empty';
import PopupModal from '@/components/shared/popup-modal';

//import { onOpen as onInvoiceOpen } from "@/libs/redux/features/invoice-slice";
//import { onOpen as onLoginModalOpen } from "@/libs/redux/features/modals/login-modal-slice";

//interface HeaderControlsProps {
// currentUser?: SafeUser | null;
//  numOfInvoices: number;
//}

const HeaderControls: React.FC = () => {
  const createNewInvoice = () => {
    <Empty />;
  };

  //    dispatch(onInvoiceOpen());
  //}, [currentUser, dispatch]);
  var numOfInvoices = 3;

  return (
    <div className="z-10 flex justify-between">
      <div className="flex flex-col gap-1 sm:gap-2">
        <h1 className="text-[20px] font-bold text-primary sm:text-[32px]">
          Invoices
        </h1>
        <p className="text-xs font-medium text-secondary">
          {numOfInvoices === 0
            ? 'No invoices'
            : `There are ${numOfInvoices} total invoices`}
        </p>
      </div>
      <div className="flex items-center gap-6 sm:gap-10">
        Filter
        <button
          onClick={createNewInvoice}
          className="flex items-center gap-2 rounded-full bg-[#7C5DFA] p-1.5 pr-3 text-xs font-bold capitalize text-white transition hover:bg-[#9277FF] sm:gap-4 sm:p-2 sm:pr-4"
        >
          <span className="rounded-full bg-white p-2.5 text-black">Plus</span>
          <div>
            Nieuwe <span className="hidden sm:inline">Factuur</span>
          </div>
        </button>
        <PopupModal
          renderModal={(onClose) => <StudentCreateForm modalClose={onClose} />}
        />
      </div>
    </div>
  );
};

export default HeaderControls;

//const dispatch = useAppDispatch();

//const createNewInvoice = useCallback(() => {
// if (!currentUser) {
//   return dispatch(onLoginModalOpen());
// }

//onClick={createNewInvoice} 45
