import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { postSchema, PostFormData } from '../schemas/postSchema';
import { PostFormProps } from '../types/PostFormProps';
import { useEffect } from 'react';

const PostForm = ({ onSubmit, onEdit, editingPost, setEditingPost }: PostFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<PostFormData>({
    resolver: zodResolver(postSchema),
    defaultValues: {
      title: editingPost?.title || '',
      content: editingPost?.content || ''
    }
  });

  useEffect(() => {
    if (editingPost) {
      reset({
        title: editingPost.title,
        content: editingPost.content
      });
    } else {
      reset({
        title: '',
        content: ''
      });
    }
  }, [editingPost, reset]);

  const onSubmitForm = async (data: PostFormData) => {
    if (editingPost && onEdit) {
      await onEdit(data.title, data.content, editingPost.id);
    } else {
      await onSubmit(data.title, data.content);
    }
    
    if (!editingPost) {
      reset();
    }
  };

  const handleCancel = () => {
    setEditingPost(null);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmitForm)} className="mb-6">
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
          Título
        </label>
        <input
          id="title"
          {...register('title')}
          type="text"
          placeholder="Digite o título"
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            errors.title ? 'border-red-500' : 'border-gray-300'
          }`}
          disabled={isSubmitting}
        />
        {errors.title && (
          <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="content" className="block text-gray-700 font-bold mb-2">
          Conteúdo
        </label>
        <textarea
          id="content"
          {...register('content')}
          placeholder="Digite o conteúdo"
          rows={4}
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            errors.content ? 'border-red-500' : 'border-gray-300'
          }`}
          disabled={isSubmitting}
        />
        {errors.content && (
          <p className="text-red-500 text-sm mt-1">{errors.content.message}</p>
        )}
      </div>

      <div className="flex items-center space-x-4">
        <button
          type="submit"
          className={`bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 
            ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={isSubmitting}
        >
          {isSubmitting 
            ? 'Processando...' 
            : editingPost 
              ? 'Atualizar' 
              : 'Criar'}
        </button>

        {editingPost && (
          <button
            type="button"
            onClick={handleCancel}
            className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
            disabled={isSubmitting}
          >
            Cancelar
          </button>
        )}
      </div>
    </form>
  );
};


export default PostForm;