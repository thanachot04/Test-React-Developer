import React, { useEffect, useState } from 'react';
import { Button, Table } from 'antd';
import type { TableColumnsType, TableProps } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { useTranslation } from 'react-i18next';
import { addCandidate, updateCandidate, deleteCandidate } from '../store/slices/candidate';

type TableRowSelection<T> = TableProps<T>['rowSelection'];


interface DataType {
  key: React.Key;
  name: string;
  gender: string;
  mobilePhone: string;
  nationality: string;
  manage: React.ReactNode;

}

interface PropsTable {
  handleUpdate: (candidateId: number) => void;

}

const TableCandidate: React.FC<PropsTable> = ({ handleUpdate }: PropsTable) => {
  const candidateList = useSelector((state: RootState) => state.candidate.candidateList);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  // const data: DataType[] = [];
  const [data, setData] = useState<DataType[]>([]);
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const onDeleteCandidate = (candidateId: number) => {
    console.log('candidate sss', candidateId)
    alert('Delete Success');
    dispatch(deleteCandidate(candidateId));
  };


  const columns: TableColumnsType<DataType> = [
    {
      title: t('Name'),
      dataIndex: 'name',
    },
    {
      title: t('Gender'),
      dataIndex: 'gender',
    },
    {
      title: t('Mobile Phone'),
      dataIndex: 'mobilePhone',
    },
    {
      title: t('Nationality'),
      dataIndex: 'nationality',
    },
    {
      title: t('Manage'),
      dataIndex: 'manage',
    },
  ];

  useEffect(() => {
    let formattedData: DataType[] = []

    formattedData = candidateList.map((candidate, index) => ({
      key: index,
      name: `${candidate.firstname} ${candidate.lastname}`,
      gender: t(candidate.gender),
      mobilePhone: `${candidate.phonePrefix}${candidate.phoneNumber}`,
      nationality: t(candidate.nationality),
      manage: <div><a onClick={() => handleUpdate(candidate?.candidateId)}>{t('EDIT')}</a>&nbsp;&nbsp;<a onClick={() => onDeleteCandidate(candidate?.candidateId)}>{t('DELETE')}</a></div>,
    }));
    setData(formattedData);
  }, [candidateList, t]);

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection: TableRowSelection<DataType> = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
      {
        key: 'odd',
        text: 'Select Odd Row',
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return false;
            }
            return true;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
      {
        key: 'even',
        text: 'Select Even Row',
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return true;
            }
            return false;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
    ],
  };

  useEffect(() => {
  
    console.log('selectedRowKeys', selectedRowKeys)
  },[selectedRowKeys])
  return (
    <>
      <Button type="primary" className="btn-form">
        Delete
      </Button>
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
    </>


  )
};

export default TableCandidate;