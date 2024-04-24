'use client';

import Link from 'next/link';
import { format, add } from 'date-fns';

import { SafeInvoice } from '@/types';
import { TERMS } from '@/enums';
import { ArrowRight } from '@/assets/icons';
import StatusBadge from './StatusBadge';
import getShortId from '@/helpers/getShortId';

interface InvoiceCardProps {
  invoice: SafeInvoice;
}

const InvoiceCard: React.FC<InvoiceCardProps> = ({ invoice }) => {
  const dueDate = add(new Date(invoice.invoiceDate), {
    days: TERMS[invoice.paymentTerm]
  });

  const status =
    invoice.status === 'PENDING'
      ? 'pending'
      : invoice.status === 'DRAFT'
        ? 'draft'
        : 'paid';

  return (
    <Link
      href={`/invoices/${invoice.id}`}
      className="grid w-full grid-cols-2 items-center gap-1 rounded-md bg-white px-6 py-6 text-sm font-medium text-primary dark:bg-[#1E2139] sm:grid-cols-[50px_110px_repeat(3,1fr)_20px] sm:gap-4 sm:py-4 md:grid-cols-[80px_120px_repeat(3,1fr)_20px] md:px-8"
    >
      <div className="mb-6 font-bold uppercase sm:mb-0">
        <span className="text-[#7E88C3]">#</span>
        {getShortId(invoice.id)}
      </div>
      <span className="text-[#7E88C3] dark:text-[#DFE3FA]">
        Due {format(dueDate, 'dd MMM yyyy')}
      </span>
      <span className="col-start-2 row-start-1 mb-6 justify-self-end text-[#858BB2] dark:text-[#FFFFFF] sm:col-auto sm:row-auto sm:mb-0 sm:justify-self-start">
        {invoice.clientName}
      </span>
      <span className="col-start-1 row-start-3 text-base font-bold sm:col-auto sm:row-auto sm:justify-self-end md:pr-5">
        $ {invoice.total}
      </span>
      <StatusBadge status={status} />
      <span className="hidden justify-center sm:flex">
        <ArrowRight />
      </span>
    </Link>
  );
};

export default InvoiceCard;
