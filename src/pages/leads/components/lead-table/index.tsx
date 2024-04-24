import DataTable from '@/components/shared/data-table';
import { columns } from './columns';
import StudentTableActions from './student-table-action';

type LeadsTableProps = {
  leads: any;
  page: number;
  totalLeads: number;
  pageCount: number;
};

export default function LeadsTable({ leads, pageCount }: LeadsTableProps) {
  return (
    <>
      <StudentTableActions />
      {leads && (
        <DataTable columns={columns} data={leads} pageCount={pageCount} />
      )}
    </>
  );
}
