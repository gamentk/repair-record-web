import ReactDOM from 'react-dom';
import { useEffect, useMemo } from 'react';

interface IProps {
    children: React.ReactNode
}

const Portal = ({ children }: IProps) => {
    const element = useMemo(() => document.createElement('div'), []);

    useEffect(() => {
        const body = document.body;
        body.prepend(element);

        return () => {
            body.removeChild(element);
        }
    }, [element]);

    return ReactDOM.createPortal(children, element);
}

export default Portal;