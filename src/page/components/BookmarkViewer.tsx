const BookmarkItem = ({node} : {node:chrome.bookmarks.BookmarkTreeNode}) => {
  if (node.url) {
    // URLを持つブックマーク
    return (
      <li>
        <a href={node.url} target="_blank" rel="noopener noreferrer">
          {node.title || node.url}
        </a> id:{node.id}
        <strong> tags: </strong>
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


const BookmarkViewer = ({bookmarks}: {bookmarks:chrome.bookmarks.BookmarkTreeNode[]}) => {
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