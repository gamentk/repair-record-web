import React from 'react';
import Portal from './Portal';
import { IoMdClose } from 'react-icons/io';
import { IRecord } from '../typings/IRecord';
import { useFormik } from 'formik';

interface IProps {
    record?: IRecord;
    onClose: () => void;
}

const EditRecordModal = ({ onClose, record }: IProps) => {
    const formik = useFormik<IRecord>({
        initialValues:
            (record)
                ? record
                : {
                    recordNo: 1,
                    repairDate: new Date(),
                    section: '',
                    deviceName: '',
                    deviceSerialNumber: '',
                    deviceAccessories: '',
                    sender: '',
                    reciever: '',
                    recieveDate: new Date(),
                    description: '',
                },
        onSubmit: handleSubmitRecord
    });

    function handleSubmitRecord(values: IRecord) {
        console.log(values);
    }

    return (
        <Portal>
            <div className="fixed w-[100vw] h-[100vh] backdrop-brightness-50 z-50 flex justify-center">
                <div className="bg-white p-6 my-auto w-[80%] max-w-[450px] rounded-md space-y-4">
                    <div className="flex items-center">
                        <h1 className="text-lg font-medium">เพิ่มบันทึก</h1>
                        <IoMdClose
                            onClick={onClose}
                            className="ml-auto right-4 top-4 cursor-pointer"
                        />
                    </div>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="grid grid-cols-2 gap-2">
                            <input
                                name="recordNo"
                                value={formik.values.recordNo}
                                onChange={formik.handleChange}
                                className="col-span-1 input-form"
                                placeholder="ที่"
                            />
                            <input
                                type="date"
                                name="repairDate"
                                value={formik.values.repairDate.toString()}
                                onChange={formik.handleChange}
                                className="col-span-1 input-form"
                                placeholder="ว.ด.ป"
                            />
                            <input
                                name="section"
                                value={formik.values.section}
                                onChange={formik.handleChange}
                                className="col-span-2 input-form"
                                placeholder="หน่วยส่งซ่อม"
                            />
                            <input
                                name="deviceName"
                                value={formik.values.deviceName}
                                onChange={formik.handleChange}
                                className="col-span-2 input-form"
                                placeholder="ชื่อเครื่อง"
                            />
                            <input
                                name="deviceSerialNumber"
                                value={formik.values.deviceSerialNumber}
                                onChange={formik.handleChange}
                                className="col-span-2 input-form"
                                placeholder="หมายเลขเครื่อง"
                            />
                            <input
                                name="deviceAccessories"
                                value={formik.values.deviceAccessories}
                                onChange={formik.handleChange}
                                className="col-span-2 input-form"
                                placeholder="อุปกรณ์ประกอบ"
                            />
                            <input
                                name="sender"
                                value={formik.values.sender}
                                onChange={formik.handleChange}
                                className="col-span-2 input-form"
                                placeholder="ผู้ส่งซ่อม"
                            />
                            <input
                                name="reciever"
                                value={formik.values.reciever}
                                onChange={formik.handleChange}
                                className="col-span-2 input-form"
                                placeholder="ผู้รับคืน"
                            />
                            <input
                                name="recieveDate"
                                value={formik.values.recieveDate.toString()}
                                onChange={formik.handleChange}
                                className="col-span-2 input-form"
                                placeholder="วันที่รับคืน"
                            />
                            <input
                                name="description"
                                value={formik.values.description}
                                onChange={formik.handleChange}
                                className="col-span-2 input-form"
                                placeholder="หมายเหตุ"
                            />
                        </div>
                        <div className="flex justify-end items-center gap-x-2">
                            <button
                                onClick={onClose}
                                type="button"
                                className="bg-gray-300 py-1 px-2 rounded-md shadow-sm"
                            >
                                ยกเลิก
                            </button>
                            <button type="submit" className="bg-primary text-white py-1 px-2 rounded-md shadow-sm">
                                เพิ่ม
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Portal >
    );
}

export default EditRecordModal;