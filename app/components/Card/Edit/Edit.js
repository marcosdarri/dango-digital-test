import React from "react";

const Edit = ({ edit, setNewTitle, setFontSize, fontSize }) => {
  return edit ? (
    <>
      <div className="mt-4 items-center max-h-36">
        <p className="text-black text-xl font-bold">New title:</p>
        <input
          type="text"
          className="text-gray-600 mt-2 w-full input input-bordered w-full max-w-xs"
          placeholder="write your new title here..."
          onChange={(e) => setNewTitle(e.target.value)}
        />
      </div>
      <div className="mt-4 items-center max-h-36">
        <p className="text-black text-xl font-bold">Font Size:</p>
        <input
          type="range"
          min={10}
          max="40"
          value={fontSize}
          className="range range-primary mt-2"
          onChange={(e) => setFontSize(e.target.value)}
        />
      </div>
    </>
  ) : null;
};

export default Edit;
