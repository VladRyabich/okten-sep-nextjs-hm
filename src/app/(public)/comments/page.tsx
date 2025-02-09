import Link from "next/link";

const PostsPage = () => {
    return (
        <ul>
            <li>
                <Link href="/comments/1">Comments 1</Link>
            </li>
            <li>
                <Link href="/comments/2">Comments 2</Link>
            </li>
            <li>
                <Link href="/comments/3">Comments 3</Link>
            </li>
            <li>
                <Link href="/comments/4">Comments 4</Link>
            </li>
            <li>
                <Link href="/comments/5">Comments 5</Link>
            </li>
        </ul>
    );
};

export default PostsPage;