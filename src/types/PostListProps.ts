import { Post } from "./Post";

export interface PostListProps {
    posts: Post[];
    onEdit: (post: Post) => void;
    onDelete: (id: number) => void;
}