import { useState,useEffect } from 'react';


const BookmarkViewer = ({bookmarkId}: {bookmarkId:string}) => {
  const [bookmark, setBookmark] = useState<chrome.bookmarks.BookmarkTreeNode|undefined>(undefined);

  useEffect( ()=>{
    chrome.bookmarks.get(bookmarkId, (results:chrome.bookmarks.BookmarkTreeNode[])=>{
      if (results && results.length > 0) {
        setBookmark(results[0]);
        console.log(results[0]);
      }
      else{
        setBookmark(undefined);
      }
    })
  },[bookmarkId]);

  if (!bookmark) {
    return (
      <div>
        <p> {bookmarkId} </p>
        <p>No data</p>
      </div>
    );
  }

  return (
    <div>
      <p> {bookmarkId} </p>
      <p><strong>ID:</strong> {bookmark.id}</p>
      <p><strong>title:</strong> {bookmark.title}</p>
    </div>
  );
}

export default BookmarkViewer;