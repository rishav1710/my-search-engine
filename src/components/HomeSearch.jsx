'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsFillMicFill } from 'react-icons/bs';

function HomeSearch() {
  const [input, setInput] = useState('');
  const router = useRouter();
  const [randomSearchLoading, setRandomSearchLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return '';
    router.push(`/search/web?searchTerm=${input.trim()}`);
  };

  const randomSearch = async () => {
    setRandomSearchLoading(true);
    const response = await fetch('https://random-word-api.herokuapp.com/word')
      .then((res) => res.json())
      .then((data) => data[0]);
    if (!response) return;
    router.push(`/search/web?searchTerm=${response}`);
    setRandomSearchLoading(false);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex w-full mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl"
      >
        <AiOutlineSearch className="text-xl text-gray-500 mr-3" />
        <input
          className="flex-grow focus:outline-none"
          type="text"
          onChange={(e) => setInput(e.target.value)}
        />
        <BsFillMicFill className="text-lg" />
      </form>
      <div className="flex flex-col space-y-2 sm:space-y-0 sm:space-x-4 justify-center sm:flex-row mt-8 ">
        <button onClick={handleSubmit} className="btn">
          Search Guru
        </button>
        <button
          onClick={randomSearch}
          disabled={randomSearchLoading}
          className="btn flex items-center justify-center disabled:opacity-80"
        >
          {randomSearchLoading ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src="spinner.svg"
              alt="loading..."
              className="h-6 text-center"
            />
          ) : (
            'I am Feeling Lucky'
          )}
        </button>
      </div>
    </>
  );
}

export default HomeSearch;
