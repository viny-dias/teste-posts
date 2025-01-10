import { useState } from "react";
import { Post } from "../types/Post";
import PostForm from "./PostForm";
import PostList from "./PostList";
import { usePosts } from "../hooks/usePosts";

export function PostManager() {
    const [editingPost, setEditingPost] = useState<Post | null>(null);

    const { posts, isLoading, error, createPost, updatePost, deletePost } = usePosts();
  
    const handleCreatePost = async (title: string, content: string) => {
      await createPost.mutateAsync({ title, body: content });
    };
  
    const handleUpdatePost = async (title: string, content: string, id: number) => {
      await updatePost.mutateAsync({ id, data: { title, body: content } });
      setEditingPost(null);
    };
  
    const handleDeletePost = async (id: number) => {
      await deletePost.mutateAsync(id);
    };

    if (isLoading) return <div>Carregando...</div>;
    if (error) return <div>Erro ao carregar posts</div>;
  
    return (
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <PostForm
          onSubmit={handleCreatePost}
          onEdit={handleUpdatePost}
          editingPost={editingPost}
          setEditingPost={setEditingPost}
        />
        <PostList 
          posts={posts} 
          onEdit={setEditingPost} 
          onDelete={handleDeletePost} 
        />
      </div>
    );

}