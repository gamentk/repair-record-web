import React from 'react';
import useDisclosure from '../hooks/useDisclosure';
import useUserContext from '../hooks/useUserContext';
import LoginModal from './LoginModal';

const TopNav = () => {
    const { user, assignUser } = useUserContext();
    const { isOpen, onToggle } = useDisclosure();

    function handleLogout(): void {
        assignUser(undefined);
    }

    return (
        <nav className="flex justify-between items-center px-4 h-[55px] w-full bg-slate-900">
            <h1 className="text-xl font-semibold">บันทึกการซ่อม</h1>
            {
                (!user)
                    ? (
                        <button
                            onClick={onToggle}
                            className="bg-primary px-2 py-1 rounded-md text-sm"
                        >
                            เข้าสู่ระบบ
                        </button>
                    ) : (
                        <button
                            onClick={handleLogout}
                            className="bg-danger px-2 py-1 rounded-md text-sm"
                        >
                            ออกจากระบบ
                        </button>
                    )
            }
            {isOpen && <LoginModal onClose={onToggle} />}
        </nav>
    );
}

export default TopNav;