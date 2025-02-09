import Link from "next/link";

const PostsPage = () => {
    return (
        <ul>
            <li>
                <Link href="/posts/1">Post 1</Link>
            </li>
            <li>
                <Link href="/posts/2">Post 2</Link>
            </li>
            <li>
                <Link href="/posts/3">Post 3</Link>
            </li>
            <li>
                <Link href="/posts/4">Post 4</Link>
            </li>
            <li>
                <Link href="/posts/5">Post 5</Link>
            </li>
        </ul>
    );
};

export default PostsPage;