import { useState, useEffect } from 'react';
import BookmarkViewer from './components/BookmarkViewer.tsx';

const Main = () => {

  const [bookmarks, setBookmarks] = useState<chrome.bookmarks.BookmarkTreeNode[]>([]);
  
  useEffect( ()=>{
    chrome.bookmarks.getTree()
      .then( (result)=>{
        if (result) {
          setBookmarks(result);
        }
        else{
          setBookmarks([]);
        }
      }).catch( ()=>{
        console.log("Error in getTree");
      });
  },[]);

  return (
    <div>
      <BookmarkViewer bookmarks={bookmarks}/>
    </div>
  );
}

export default Main;