import { useMemo, useState } from 'react';
import ReactTable from "components/ReactTable";
import { getCoreRowModel, getSortedRowModel, flexRender, useReactTable, getPaginationRowModel, ColumnDef, HeaderGroup, SortingState } from '@tanstack/react-table';
import Chip from '@mui/material/Chip';

// ==============================|| REACT TABLE - SORTING ||============================== //

export default function UsersList() {
  const data: any = [
    {
      empId: "4321",
      name: "vamsi",
      officeNumber: "0987654",
      role: "poiu",
      branch: "gfds",
      status: "cvbn",
      actions: "cvbcv"
    },
    {
      empId: "1234",
      name: "ravi",
      officeNumber: "0987654",
      role: "poiu",
      branch: "gfds",
      status: "cvbn",
      actions: "cvbcv"
    },
    {
      empId: "3432",
      name: "kiran",
      officeNumber: "0987654",
      role: "poiu",
      branch: "gfds",
      status: "cvbn",
      actions: "cvbcv"
    },
    {
      empId: "12",
      name: "vinay",
      officeNumber: "0987654",
      role: "poiu",
      branch: "gfds",
      status: "cvbn",
      actions: "cvbcv"
    },
    {
      empId: "4321",
      name: "pandu",
      officeNumber: "0987654",
      role: "poiu",
      branch: "gfds",
      status: "cvbn",
      actions: "cvbcv"
    },
    {
      empId: "4321",
      name: "durga",
      officeNumber: "0987654",
      role: "poiu",
      branch: "gfds",
      status: "cvbn",
      actions: "cvbcv"
    },
    {
      empId: "4321",
      name: "dts",
      officeNumber: "0987654",
      role: "poiu",
      branch: "gfds",
      status: "cvbn",
      actions: "cvbcv"
    },
    {
      empId: "1234",
      name: "anirudh",
      officeNumber: "0987654",
      role: "poiu",
      branch: "gfds",
      status: "cvbn",
      actions: "cvbcv"
    },
    {
      empId: "3432",
      name: "ganesh",
      officeNumber: "0987654",
      role: "poiu",
      branch: "gfds",
      status: "cvbn",
      actions: "cvbcv"
    },
    {
      empId: "12",
      name: "sai",
      officeNumber: "0987654",
      role: "poiu",
      branch: "gfds",
      status: "cvbn",
      actions: "cvbcv"
    },
    {
      empId: "4321",
      name: "karthik",
      officeNumber: "0987654",
      role: "poiu",
      branch: "gfds",
      status: "cvbn",
      actions: "cvbcv"
    },
    {
      empId: "4321",
      name: "mahesh",
      officeNumber: "0987654",
      role: "poiu",
      branch: "gfds",
      status: "cvbn",
      actions: "cvbcv"
    },
    {
      empId: "4321",
      name: "naveen",
      officeNumber: "0987654",
      role: "poiu",
      branch: "gfds",
      status: "cvbn",
      actions: "cvbcv"
    },
    {
      empId: "1234",
      name: "praveen",
      officeNumber: "0987654",
      role: "poiu",
      branch: "gfds",
      status: "cvbn",
      actions: "cvbcv"
    },
    {
      empId: "3432",
      name: "dharanidhar",
      officeNumber: "0987654",
      role: "pandu",
      branch: "gfds",
      status: "cvbn",
      actions: "cvbcv"
    },
    {
      empId: "12",
      name: "check",
      officeNumber: "0987654",
      role: "poiu",
      branch: "gfds",
      status: "cvbn",
      actions: "cvbcv"
    },
    {
      empId: "4321",
      name: "kischc",
      officeNumber: "0987654",
      role: "poiu",
      branch: "gfds",
      status: "cvbn",
      actions: "cvbcv"
    },
    {
      empId: "4321",
      name: "mmmisc",
      officeNumber: "0987654",
      role: "poiu",
      branch: "gfds",
      status: "cvbn",
      actions: "cvbcv"
    }
  ]

  const columns = useMemo<ColumnDef<any>[]>(
    () => [
      {
        header: 'Employee ID',
        accessorKey: 'empId'
      },
      {
        header: 'Name',
        accessorKey: 'name'
      },
      {
        header: 'Office Number',
        accessorKey: 'officeNumber'
      },
      {
        header: 'Role',
        accessorKey: 'role'
      },
      {
        header: 'Branch',
        accessorKey: 'branch',
        meta: { className: 'cell-right' }
      },
      {
        header: 'Status',
        accessorKey: 'status',
        cell: (props) => {
          switch (props.getValue()) {
            case 'Complicated':
              return <Chip color="error" label="Complicated" size="small" variant="light" />;
            case 'Relationship':
              return <Chip color="success" label="Relationship" size="small" variant="light" />;
            case 'Single':
            default:
              return <Chip color="info" label="Single" size="small" variant="light" />;
          }
        }
      },
      {
        header: 'Actions',
        accessorKey: 'actions',
      }
    ],
    []
  );

  return (<>
    <ReactTable data={data} columns={columns} includeSearch={true} needCSV={true} />
  </>);
}
