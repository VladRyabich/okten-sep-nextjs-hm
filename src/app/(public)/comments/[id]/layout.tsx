import React from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Comment Layout'
}
type Props = { children: React.ReactNode }
const CommentLayout = ({children}: Props) => {
    return (
        <>
            {children}
        </>
    );
};

export default CommentLayout;