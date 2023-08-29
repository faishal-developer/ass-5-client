import React, { useState,ChangeEvent } from 'react';
import { usePostCommentMutation } from '../../redux/apiSlice/bookApi';
import {toast} from 'react-toastify';

interface Iprops{
    Reviews:string[];
    id:string
}

function ReviewSection(props:Iprops) {
  const {Reviews:reviews,id} = props;
  const [newReview, setNewReview] = useState('');
  const [postComment,{isLoading}] = usePostCommentMutation();

  const handleReviewChange = (event:ChangeEvent<HTMLInputElement>) => {
    setNewReview(event.target.value);
  };

  const handlePostReview = async() => {
    if (newReview.trim() !== '') {
    //   const updatedReviews = [...reviews, newReview];
        const result = await postComment({id,data:{review:newReview}});
        toast.info('data' in result && result?.data?.message);
        setNewReview("");
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Customer Reviews</h2>
      <ul className="mb-4">
        {reviews?.map((review, index) => (
          <li key={index} className="mb-2">{review}</li>
        ))}
      </ul>
      <div>
        <h3 className="text-lg font-semibold mb-2">Post Your Review</h3>
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded-md mb-2"
          value={newReview}
          onChange={handleReviewChange}
          placeholder="Write your review here"
        />
        <button
          className={isLoading?"":"px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"}
          onClick={handlePostReview}
        >
          Post Review
        </button>
      </div>
    </div>
  );
}

export default ReviewSection;
