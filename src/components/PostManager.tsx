import { useEffect, useState } from "react";
import { Post } from "../types/Post";
import PostForm from "./PostForm";
import PostList from "./PostList";

export function PostManager() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [editingPost, setEditingPost] = useState<Post | null>(null);

  
    useEffect(() => { 
      // @todo: Implementar a função para buscar os posts da API
      setPosts([
        { id: 1, title: 'Post de exemplo', content: 'Conteúdo do post' },
      ]);
    }, []);
  
    const handleCreatePost = async (title: string, content: string) => {
      // @todo: Implementar a função para criar um novo post
      console.log('Criar post:', title, content);
    };
  
    const handleUpdatePost = async (title: string, content: string, id: number) => {
      // @todo: Implementar a função para atualizar um post existente
      console.log('Atualizar post:', id, title, content);
    };
  
    const handleDeletePost = async (id: number) => {
      // @todo: Implementar a função para deletar um post
      console.log('Deletar post:', id);
    };
  
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