import {FC} from "react";
import {Metadata} from "next";


type Props = {
    params: {id: string};
};

export const generateMetadata = async ({params}: Props): Promise<Metadata> => {
    const {id} = await params;
    return {
        title: 'Post page id ' + id
    }
};

const PostPage: FC<Props> = async ({params}:Props) => {
    const {id} = await params;

    return (
        <>
            <h2>Post id: {id}</h2>
        </>
    );
};

export default PostPage;