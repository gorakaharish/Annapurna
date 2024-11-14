import { useMemo, useState } from 'react';
import ReactTable from "components/ReactTable";  // Ensure this is the correct import for ReactTable
import Chip from '@mui/material/Chip';
import { Menu, MenuItem } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { Cell } from '@tanstack/react-table'; // Import Cell type for typing

// The UsersList component now passes actions to the ReactTable component
export default function UsersList() {
  const data: any = [
    { empId: "4321", name: "vamsi", officeNumber: "0987654", role: "poiu", branch: "gfds", status: "Single" },
    { empId: "1234", name: "ravi", officeNumber: "0987654", role: "poiu", branch: "gfds", status: "Complicated" },
    { empId: "3432", name: "kiran", officeNumber: "0987654", role: "poiu", branch: "gfds", status: "Relationship" },
    { empId: "123", name: "vinay", officeNumber: "0987654", role: "poiu", branch: "gfds", status: "Single" },
    { empId: "121", name: "vinay", officeNumber: "0987654", role: "poiu", branch: "gfds", status: "Single" },
    { empId: "122", name: "vinay", officeNumber: "0987654", role: "poiu", branch: "gfds", status: "Single" },
    { empId: "124", name: "vinay", officeNumber: "0987654", role: "poiu", branch: "gfds", status: "Single" },
    { empId: "125", name: "vinay", officeNumber: "0987654", role: "poiu", branch: "gfds", status: "Single" },
    { empId: "126", name: "vinay", officeNumber: "0987654", role: "poiu", branch: "gfds", status: "Single" },
    { empId: "127", name: "vinay", officeNumber: "0987654", role: "poiu", branch: "gfds", status: "Single" },
    { empId: "128", name: "vinay", officeNumber: "0987654", role: "poiu", branch: "gfds", status: "Single" },
    { empId: "129", name: "vinay", officeNumber: "0987654", role: "poiu", branch: "gfds", status: "Single" },
    { empId: "1210", name: "vinay", officeNumber: "0987654", role: "poiu", branch: "gfds", status: "Single" }
  ];

  const handleEdit = (row: any) => {
    console.log('row.........',row)
  };

  const handleDelete = (row: any) => {
    console.log('row.........',row)
  };

  const handleView = (row: any) => {
    console.log('row.........',row)
  };

  const ActionMenu = ({ row }: { row: any }) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
      <>
        <IconButton onClick={handleClick}>...</IconButton>
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
          <MenuItem onClick={() => { handleView(row); handleClose(); }}>View</MenuItem>
          <MenuItem onClick={() => { handleEdit(row); handleClose(); }}>Edit</MenuItem>
          <MenuItem onClick={() => { handleDelete(row); handleClose(); }}>Delete</MenuItem>
        </Menu>
      </>
    );
  };

  const columns = useMemo(
    () => [
      { header: 'Employee ID', accessorKey: 'empId' },
      { header: 'Name', accessorKey: 'name' },
      { header: 'Office Number', accessorKey: 'officeNumber' },
      { header: 'Role', accessorKey: 'role' },
      { header: 'Branch', accessorKey: 'branch' },
      {
        header: 'Status',
        accessorKey: 'status',
        // Typing the props parameter
        cell: (props: Cell<any, any>) => {
          const status = props.getValue();  // Use getValue() to get the cell value

          switch (status) {
            case 'Complicated':
              return <Chip color="error" label="Complicated" size="small" variant="light" />;
            case 'Relationship':
              return <Chip color="success" label="Relationship" size="small" variant="light" />;
            default:
              return <Chip color="info" label="Single" size="small" variant="light" />;
          }
        }
      }
    ],
    []
  );

  return (
    <ReactTable
      data={data}
      columns={columns}
      actions={(row: any) => <ActionMenu row={row} />}
      includeSearch={true}
      needCSV={true}
      pagination={'top'}
    />
  );
}
