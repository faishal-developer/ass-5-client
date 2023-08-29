import { Link, useNavigate, useParams } from "react-router-dom";
import { useDeleteBookMutation, useGetSingleBookQuery } from "../redux/apiSlice/bookApi";
import { useAppSelector } from "../redux/hook";
import { toast } from "react-toastify";
import ReviewSection from "../components/bookReview/Review";

function BookDetails() {
    const { bookId } = useParams();
    const {data} = useGetSingleBookQuery(bookId as string)
    const [deleteBook,{isLoading,}] = useDeleteBookMutation();
    const {user} = useAppSelector(state=>state.user);
    const navigate = useNavigate();

  const BookDeletion=async()=>{
    const deletion= await deleteBook({id:bookId as string});
    if('data' in deletion && deletion?.data?.deletedCount){
      toast.success("deletion successfull");
      navigate('/home');
    }else{
      toast.error("Failed")
    }
  }
  console.log(data);
  return (
    <div className="App bg-gray-100">
      
      <section className="py-12">
        <div className="container mx-auto">
          <div className="bg-white shadow-md rounded-lg overflow-hidden p-6">
            <h2 className="text-3xl font-semibold mb-4">{data?.Title}</h2>
            <p className="text-gray-600">Author: {data?.Author}</p>
            <p className="text-gray-600">publication date: {data?.Publication_date}</p>
            <p className="text-gray-600">Genre: {data?.Genre}</p>
            {
              user?.email ? (
                <>
                  <Link to={`/edit-book/${bookId}`}  className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Edit</Link><br/>
                  <button onClick={BookDeletion}   className={isLoading?" ":"mt-4 inline-block bg-red-500 text-white py-2 px-4 rounded hover:bg-blue-600"}>Delete</button>
                </>
              ) : ""
            }
          </div>
            <ReviewSection id={bookId as string} Reviews={data?.Reviews}/>

        </div>
      </section>

    </div>
  );
}

export default BookDetails;
