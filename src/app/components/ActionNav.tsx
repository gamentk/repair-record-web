import React from 'react';
import useDisclosure from '../hooks/useDisclosure';
import useUserContext from '../hooks/useUserContext';
import EditRecordModal from './EditRecordModal';

const ActionNav = () => {
    const { user } = useUserContext();
    const { isOpen, onToggle } = useDisclosure();

    return (
        <div className="flex h-[55px] justify-between items-center bg-slate-900 px-4 py-2 sticky top-0">
            <input
                className="rounded-md px-4 py-2"
                placeholder="ค้นหา"
            />
            {
                user
                && (
                    <button
                        onClick={onToggle}
                        className="bg-primary px-2 py-1 rounded-md text-sm"
                    >
                        เพิ่มบันทึก
                    </button>
                )
            }
            {isOpen && <EditRecordModal onClose={onToggle} />}
        </div>
    );
}

export default ActionNav;