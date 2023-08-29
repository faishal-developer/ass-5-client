import { FormEvent, useState,ChangeEvent,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGetSingleBookQuery, usePostBookMutation } from '../redux/apiSlice/bookApi';
import { toast } from 'react-toastify';

function AddNewBook() {
  const { bookId } = useParams();
  const {data} = useGetSingleBookQuery(bookId as string)
  const [newData,setnewData] = useState({
    Title:'',
    Author:'',
    Genre:''
  })
  const [postBook,{isError,isLoading,isSuccess}]= usePostBookMutation();

  const handleChange=(e:ChangeEvent<HTMLInputElement>)=>{
    setnewData({
      ...newData,
      [e.target.name]: e.target.value
    })
  }

  useEffect(()=>{
    setnewData({
      Title:data?.Title,
      Author:data?.Author,
      Genre:data?.Genre
    })
  },[data])

  const handleSubmit = async(e:FormEvent) => {
    e.preventDefault();
    if(bookId){
      const result = await postBook({data:newData,url:`/books/${bookId}`,method:'PATCH'})
      console.log(result);
    }else{
      postBook({data:newData,url:`/books`,method:'POST'})

    }
  };

  return (
    <div className="App bg-gray-100">
      {
        <>
          {(isError && !isLoading) && toast.error("Failed to Submit")}
          {(isSuccess && !isLoading) && toast.success("Submission successfull")}
        </>
      }
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold mb-6">{bookId? 'Edit Book' : "Add New Book"}</h2>
          <form className="bg-white shadow-md rounded-lg overflow-hidden p-6" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="title" className="block text-gray-600">Title</label>
              <input
                type="text"
                id="Title"
                name="Title"
                className="w-full border border-gray-300 p-2 rounded"
                value={newData.Title}
                onChange={(e) => handleChange(e)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="author" className="block text-gray-600">Author</label>
              <input
                type="text"
                id="Author"
                name="Author"
                className="w-full border border-gray-300 p-2 rounded"
                value={newData.Author}
                onChange={(e) => handleChange(e)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="genre" className="block text-gray-600">Genre</label>
              <input
                type="text"
                id="Genre"
                name="Genre"
                className="w-full border border-gray-300 p-2 rounded"
                value={newData.Genre}
                onChange={(e) => handleChange(e)}
                required
              />
            </div>
            <div className="text-center">
              <button type="submit" className={isLoading?"":"bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"}>{bookId?"Submit":"Add Book"}</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default AddNewBook;
