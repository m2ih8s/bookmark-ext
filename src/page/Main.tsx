// import { useState } from 'react';
import BookmarkViewer from './components/BookmarkViewer';

const Main = () => {
  let tree : chrome.bookmarks.BookmarkTreeNode[] = [];

  chrome.bookmarks.getTree()
    .then( (result)=>{
      tree=result;
      console.log(tree);
    }).catch( (result)=>{
      console.log(result)
  })

  return (
    <div>
      <BookmarkViewer />
    </div>
  );
}

export default Main;