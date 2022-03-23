import React from 'react';
import Portal from './Portal';
import { useFormik } from 'formik';
import { IoMdClose } from 'react-icons/io';
import UserService from '../services/UserService';
import useUserContext from '../hooks/useUserContext';

interface IProps {
    onClose: () => void;
}

export interface ILoginForm {
    username: string;
    password: string;
}

const LoginModal = ({ onClose }: IProps) => {
    const { assignUser } = useUserContext();

    const formik = useFormik<ILoginForm>({
        initialValues: {
            username: '',
            password: ''
        },
        onSubmit: handleLogin
    });

    async function handleLogin(values: ILoginForm): Promise<void> {
        const response = await UserService.login(values);

        if (response.isSuccess && response.result) {
            assignUser(response.result);
            onClose();
        }
    }

    return (
        <Portal>
            <div className="fixed w-[100vw] h-[100vh] z-50 backdrop-brightness-50 flex justify-center">
                <div className="relative bg-white p-6 my-auto w-[80%] max-w-[320px] rounded-md">
                    <IoMdClose
                        onClick={onClose}
                        className="absolute ml-auto right-4 top-4 cursor-pointer"
                    />
                    <form
                        className="flex flex-col items-center gap-y-4"
                        onSubmit={formik.handleSubmit}
                    >
                        <h1 className="text-xl font-semibold">เข้าสู่ระบบ</h1>
                        <input
                            name="username"
                            onChange={formik.handleChange}
                            className="input-form"
                            placeholder="ชื่อผู้ใช้"
                        />
                        <input
                            type="password"
                            name="password"
                            onChange={formik.handleChange}
                            className="input-form"
                            placeholder="รหัสผ่าน"
                        />
                        <button
                            className="bg-primary w-full p-2 text-white rounded-md "
                            type="submit"
                        >
                            เข้าสู่ระบบ
                        </button>
                    </form>
                </div>
            </div>
        </Portal>
    );
}

export default LoginModal;