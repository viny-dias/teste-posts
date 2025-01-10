import { Post } from "./Post";

export interface PostItemProps {
    post: Post;
    onEdit: (post: Post) => void;
    onDelete: (id: number) => void;
}