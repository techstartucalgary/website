import "./PostCreation.css";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function PostCreation(props) {
  return (
    <div className="postCreationStyling">
      <h1 className="postCreationHeader">Create a Post</h1>
      <form id="postForm">
        <input id="createPostTitle" placeholder="Title..." type="text" />
        <br></br>
      </form>
      <textarea
        className="postTextArea"
        form="postForm"
        placeholder="Write your post here..."
      ></textarea>
      <input form="postForm" id="postSubmit" type="submit" value="Post" />
    </div>
  );
}

export default PostCreation;
