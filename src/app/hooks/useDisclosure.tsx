import { useState } from 'react';

interface IProps {
    initialState?: boolean
}

interface IDisclosure {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    onToggle: () => void;
}

const useDisclosure = (props?: IProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(props?.initialState ?? false);

    const store: IDisclosure = {
        isOpen,
        onOpen: () => setIsOpen(true),
        onClose: () => setIsOpen(false),
        onToggle: () => setIsOpen(!isOpen)
    };

    return store;
}

export default useDisclosure;