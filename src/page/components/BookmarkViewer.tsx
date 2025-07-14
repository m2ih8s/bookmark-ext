import { useState,useEffect } from 'react';

const BookmarkItem = ({node} : {node:chrome.bookmarks.BookmarkTreeNode}) => {
  if (node.url) {
    // URLを持つブックマーク
    return (
      <li>
        <a href={node.url} target="_blank" rel="noopener noreferrer">
          {node.title || node.url}
        </a> id:{node.id}
        <strong> tags: </strong> A, B ,C
      </li>
    );
  } else {
    // フォルダ
    return (
      <li>
        <strong>{node.title || 'Untitled Folder'} </strong> id:{node.id}
        {node.children && node.children.length > 0 && (
          <ul>
            {node.children.map((child) => (
              <BookmarkItem key={child.id} node={child} />
            ))}
          </ul>
        )}
      </li>
    );
  }
};


const BookmarkViewer = () => {
  const [bookmarks, setBookmarks] = useState<chrome.bookmarks.BookmarkTreeNode[]|undefined>(undefined);

  useEffect( ()=>{
    chrome.bookmarks.getTree()
      .then( (result)=>{
        if (result) {
          setBookmarks(result);
        }
        else{
          setBookmarks(undefined);
        }
      }).catch( ()=>{
        console.log("no bookmark");
      });
  },[]);

  if(!bookmarks){
    return (
      <h1>No bookmarks</h1>
    );
  }

  return (
    <div>
      <h1>Bookmark manager</h1>
      <ul>
        {bookmarks.map((node) => (
          <BookmarkItem key={node.id} node={node} />
        ))}
      </ul>
    </div>
  );
}

export default BookmarkViewer;