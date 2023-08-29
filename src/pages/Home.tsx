import React, { KeyboardEventHandler, useEffect } from 'react';
import BookCard from '../components/bookCard/BookCard';
import { useGetBooksQuery } from '../redux/apiSlice/bookApi';
import { Ibook } from '../interfaces/common';
import {useState,ChangeEvent} from 'react';

const Home = () => {
      const { data} = useGetBooksQuery(undefined);
      const [searchData,setSearchData] = useState('')
      const [isButtonClicked, setIsButtonClicked] = useState(false);

      const { data:buttonData, isLoading, isError } = useGetBooksQuery(searchData, {
        skip: !isButtonClicked, // Skip the query if isButtonClicked is false
      });
    
      const handleChange=(e:ChangeEvent<HTMLInputElement>)=>{
        setSearchData(e.target.value);
        
      }
      const handleKeyDown=(e:KeyboardEventHandler<HTMLInputElement>)=>{
        if(e.key==='Enter'){
          setIsButtonClicked(true);
        }

        
      }

      useEffect(()=>{
        console.log("buttondata",buttonData);
      },[buttonData])

     
  return (
    <div className="App bg-gray-100">
      {/* Navbar */}
      {/* <Navbar/> */}

      {/* Book Section */}
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold mb-6">All Books</h2>
          <div className="mb-4">
              <label htmlFor="search" className="block text-gray-600">search</label>
              <input onKeyDown={handleKeyDown} onChange={handleChange} type="text" id="search" name="search" className="w-full border border-gray-300 p-2 rounded" />
            </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
            {
              data?.data ?(
                data.data.map((book:Ibook)=><BookCard book={book}/>)
              ): 'Loading....'
            }
          </div>
          
        </div>
      </section>

      {/* Footer */}
      {/* <Footer/> */}
    </div>
  );
}



export default Home;
