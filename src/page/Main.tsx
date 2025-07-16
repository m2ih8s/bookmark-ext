import { useState, useEffect } from 'react';
import BookmarkViewer from './components/BookmarkViewer.tsx';

// import sqlite3InitModule from '@sqlite.org/sqlite-wasm';

// const start = (sqlite3) => {
//   console.log('Running SQLite3 version', sqlite3.version.libVersion);
//   const db = new sqlite3.oo1.DB('/mydb.sqlite3', 'ct');
//   // Your SQLite code here.
// };

// const initializeSQLite = async () => {
//   try {
//     console.log('Loading and initializing SQLite3 module...');
//     const sqlite3 = await sqlite3InitModule({
//       print: console.log,
//       printErr: console.error,
//     });
//     console.log('Done initializing. Running demo...');
//     start(sqlite3);
//   } catch (err) {
//     console.error('Initialization error:', err);
//   }
// };

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