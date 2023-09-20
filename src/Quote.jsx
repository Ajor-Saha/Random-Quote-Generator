import React from "react";

function Quote({text,author}) {

    return(
        <div className="bg-white p-8 rounded-lg shadow-md">
           <blockquote className="text-gray-700 text-xl mb-4">{text}</blockquote>
           <cite className="text-gray-500 text-right block">{author}</cite>
        </div>
    );
}



export default Quote