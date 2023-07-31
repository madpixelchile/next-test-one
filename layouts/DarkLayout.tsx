import { FC, ReactNode } from "react";

interface DarkLayoutProps {
    children: ReactNode;
}

export const DarkLayout: FC<DarkLayoutProps> = ({ children }) => {
    return (
        <div style={{
            backgroundColor: 'rgba(0,0,0,0.2)',
            borderRadius: '6px',
            padding: 20
        }}>
            <div>
                {
                    children
                }
            </div>
        </div>
    )
}