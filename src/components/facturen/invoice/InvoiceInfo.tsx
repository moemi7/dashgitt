'use client';

import { add, format } from 'date-fns';

import { SafeInvoice } from '@/types';
import useCountries from '@/hooks/useCountries';
import { TERMS } from '@/enums';
import { Item } from '@prisma/client';
import getShortId from '@/helpers/getShortId';

import InvoiceInfoItemList from './InvoiceInfoItemList';

interface InvoiceInfoProps {
  invoice: SafeInvoice & { items: Item[] };
}

const InvoiceInfo: React.FC<InvoiceInfoProps> = ({ invoice }) => {
  const { getByValue } = useCountries();

  const invoiceDate = new Date(invoice.invoiceDate);

  const dueDate = add(invoiceDate, {
    days: TERMS[invoice.paymentTerm]
  });

  return (
    <div className="overflow-y-auto rounded-md">
      <div className="grid grid-cols-2 gap-4 rounded-md bg-[#FFFFFF] px-8 py-5 font-medium text-[#7E88C3] dark:bg-[#1E2139] dark:text-[#DFE3FA] sm:grid-cols-3 sm:gap-2">
        {/* Id + description */}
        <div className="flex flex-col gap-2">
          <div className="text-base font-bold uppercase text-primary">
            <span className="text-[#7E88C3]">#</span>
            {getShortId(invoice.id)}
          </div>
          <span className="text-sm">{invoice.description}</span>
        </div>
        {/* Bill From */}
        <div className="col-start-1 flex flex-col gap-1 sm:col-start-3 sm:text-right">
          <span>{invoice.streetFrom}</span>
          <span>{invoice.cityFrom}</span>
          <span className="uppercase">{invoice.postCodeFrom}</span>
          <span>{getByValue(invoice.countryFrom)?.label}</span>
        </div>
        {/* Invoice Date + Payment Date */}
        <div className="col-start-1 flex flex-col gap-8 sm:col-start-auto">
          <div className="flex flex-col gap-3">
            <span>Invoice Date</span>
            <span className="text-base font-bold text-primary">
              {format(invoiceDate, 'dd MMM yyyy')}
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <span>Payment Due</span>
            <span className="text-base font-bold text-primary">
              {format(dueDate, 'dd MMM yyyy')}
            </span>
          </div>
        </div>
        {/* Bill To */}
        <div className="flex flex-col gap-2 justify-self-end sm:justify-self-start">
          <div className="flex flex-col gap-3">
            <span>Bill To</span>
            <span className="text-base font-bold text-primary">
              {invoice.clientName}
            </span>
          </div>
          <div className="col-start-3 flex flex-col gap-1">
            <span>{invoice.streetFrom}</span>
            <span>{invoice.cityFrom}</span>
            <span className="uppercase">{invoice.postCodeFrom}</span>
            <span>{getByValue(invoice.countryFrom)?.label}</span>
          </div>
        </div>
        {/* Client's email */}
        <div className="col-start-1 flex flex-col gap-2 sm:col-start-auto">
          <div className="flex flex-col gap-3">
            <span>Sent To</span>
            <span className="text-base font-bold text-primary">
              {invoice.clientEmail}
            </span>
          </div>
        </div>
        {/* Items Container */}
        <div className="col-span-3 mt-8 w-full overflow-hidden rounded-md">
          {/* Item List */}
          <InvoiceInfoItemList items={invoice.items} />
          {/* Total */}
          <div className="flex items-center justify-between bg-[#373B53] p-8 text-white dark:bg-[#0C0E16]">
            <span>Amount Due</span>
            <span className="text-2xl font-bold">$ {invoice.total}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceInfo;
