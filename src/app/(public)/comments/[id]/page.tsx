import {Metadata} from "next";

type Props = {
    params: { id: string}
};

export const generateMetadata = async ({params}: Props):Promise<Metadata> => {
    const {id} = await params;
    return {
        title: 'Comment id' + id
    }
};

const CommentPage =  async ({params}:Props) => {
    const {id} = await params;
    return (
        <>
            <h2>Comment id: {id}</h2>
        </>
    );
};

export default CommentPage;