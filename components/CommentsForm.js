import React, { useRef, useState } from 'react';
import { submitComment } from '../services';

const CommentsForm = ({ slug }) => {
  const [error, setError] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const nameEl = useRef();
  const emailEl = useRef();
  const commentEl = useRef();

  const handleCommentSubmit = () => {
    setError(false);
    const { value: comment } = commentEl.current;
    const { value: name } = nameEl.current;
    const { value: email } = emailEl.current;

    if (!comment || !name || !email) {
      setError(true);
      return;
    }
    const commentData = {
      name,
      email,
      comment,
      slug,
    };

    submitComment(commentData).then((res) => {
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
    });
  };

  return (
    <div className="bg-white shadow-sm rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        Leave a Reply
      </h3>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea
          ref={commentEl}
          name="comment"
          placeholder="Comment"
          className="p-4 outline-none w-full   rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700 transition duration-200"
        ></textarea>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <input
          ref={nameEl}
          type="text"
          placeholder="Name"
          className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700 transition duration-200"
        />
        <input
          ref={emailEl}
          type="email"
          placeholder="Email"
          className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700 transition duration-200"
        />
      </div>
      {error && <p className="text-xs text-red-500">All fields are required</p>}
      <div className="mt-8">
        <button
          onClick={handleCommentSubmit}
          type="button"
          className="transition duration-150 ease-in hover:bg-indigo-800 inline-block bg-indigo-900 text-lg w-full rounded-lg text-white px-8 py-3 cursor-pointer"
        >
          Reply
        </button>
        {showSuccessMessage && (
          <span className="text-xl float-right font-semibold mt-3 text-green-500">
            Comment submitted for review
          </span>
        )}
      </div>
    </div>
  );
};

export default CommentsForm;
