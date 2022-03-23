import React, { useEffect, useState } from 'react';
import useDisclosure from '../hooks/useDisclosure';
import useUserContext from '../hooks/useUserContext';
import RecordService from '../services/RecordService';
import { IRecord } from '../typings/IRecord';
import EditRecordModal from './EditRecordModal';

const Record = () => {
    const { user } = useUserContext();
    const [records, setRecords] = useState<IRecord[]>();
    const [editRecord, setEditRecord] = useState<IRecord>();
    const { isOpen, onToggle } = useDisclosure();

    useEffect(() => {
        fetchRecords();
    }, []);

    async function fetchRecords(): Promise<void> {
        const response = await RecordService.getRecords();

        if (response.isSuccess) {
            setRecords(response.result);
        } else {
            console.log(response.message);
        }
    }

    function handleEditRecord(record: IRecord): void {
        setEditRecord(record);
        onToggle();
    }

    return (
        <React.Fragment>
            <table className="min-w-full table-auto">
                <thead className="text-left bg-slate-900 sticky top-0">
                    <tr>
                        <th>สถานะ</th>
                        <th>ที่</th>
                        <th>ว.ด.ป</th>
                        <th>หน่วยส่งซ่อม</th>
                        <th>ชื่อเครื่อง</th>
                        <th>หมายเลขเครื่อง</th>
                        <th>อุปกรณ์ประกอบ</th>
                        <th>ผู้ส่งซ่อม</th>
                        <th>ผู้รับเครื่อง</th>
                        <th>ผู้รับคืน/ว.ด.ป</th>
                        <th>หมายเหตุ</th>
                        <th className="sticky right-0 bg-slate-900"></th>
                    </tr>
                </thead>
                <tbody className="bg-slate-600 divide-y divide-neutral-700">
                    {
                        records
                        && records.map(record => {
                            const {
                                recordId,
                                recordNo,
                                repairDate,
                                section,
                                deviceName,
                                deviceSerialNumber,
                                deviceAccessories,
                                sender,
                                reciever,
                                recieveDate,
                                description
                            } = record;

                            return (
                                <tr key={recordId} className="divide-x divide-neutral-700">
                                    <td>status</td>
                                    <td>{recordNo}</td>
                                    <td>{new Date(repairDate).toLocaleDateString()}</td>
                                    <td>{section}</td>
                                    <td>{deviceName}</td>
                                    <td>{deviceSerialNumber}</td>
                                    <td>{deviceAccessories}</td>
                                    <td>{sender}</td>
                                    <td>{reciever}</td>
                                    <td>{new Date(recieveDate).toLocaleDateString()}</td>
                                    <td>{description}</td>
                                    <td className="sticky right-0 bg-slate-600">
                                        {user && <button
                                            onClick={() => handleEditRecord(record)}
                                            className="bg-warning text-slate-900 px-2 py-1 rounded-md"
                                        >
                                            แก้ไข
                                        </button>}
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
            {
                isOpen
                && (
                    <EditRecordModal
                        onClose={onToggle}
                        record={editRecord}
                    />
                )
            }
        </React.Fragment>
    );
}

export default Record;