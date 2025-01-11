import { useState } from "react";
import { Post } from "../types/Post";
import PostForm from "./PostForm";
import PostList from "./PostList";
import { usePosts } from "../hooks/usePosts";
import { useToast } from "./ui/toast/use-toast";
import { ToastMessages } from "@/constants/toast-messages";

export function PostManager() {
    const [editingPost, setEditingPost] = useState<Post | null>(null);
    const { toast } = useToast();

    const { posts, isLoading, error, createPost, updatePost, deletePost } = usePosts();
  
    const handleCreatePost = async (title: string, content: string) => {
      try {
        await createPost.mutateAsync({ title, body: content });
        toast({
          title: ToastMessages.CREATE_SUCCESS_TITLE,
          description: ToastMessages.CREATE_SUCCESS_DESCRIPTION,
        });
      } catch (error: unknown) {
        console.error('Erro:', error);
        toast({
          variant: "destructive",
          title: ToastMessages.CREATE_ERROR_TITLE,
          description: ToastMessages.CREATE_ERROR_DESCRIPTION,
        });
      }
    };
  
    const handleUpdatePost = async (title: string, content: string, id: number) => {
      try {
        await updatePost.mutateAsync({ id, data: { title, body: content } });
        setEditingPost(null);
        toast({
          title: ToastMessages.UPDATE_SUCCESS_TITLE,
          description: ToastMessages.UPDATE_SUCCESS_DESCRIPTION,
        });
      } catch (error: unknown) {
        console.error('Erro:', error);
        toast({
          variant: "destructive",
          title: ToastMessages.UPDATE_ERROR_TITLE,
          description: ToastMessages.UPDATE_ERROR_DESCRIPTION,
        });
      }
    };
  
    const handleDeletePost = async (id: number) => {
      try {
        await deletePost.mutateAsync(id);
        toast({
          title: ToastMessages.DELETE_SUCCESS_TITLE,
          description: ToastMessages.DELETE_SUCCESS_DESCRIPTION,
        });
      } catch (error: unknown) {
        console.error('Erro:', error);
        toast({
          variant: "destructive",
          title: ToastMessages.DELETE_ERROR_TITLE,
          description: ToastMessages.DELETE_ERROR_DESCRIPTION,
        });
      }
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