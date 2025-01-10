import { Post } from "./Post";

export interface PostFormProps {
    onSubmit: (title: string, content: string) => void;
    onEdit?: (title: string, content: string, id: number) => void;
    editingPost: Post | null;
    setEditingPost: (post: Post | null) => void;
}