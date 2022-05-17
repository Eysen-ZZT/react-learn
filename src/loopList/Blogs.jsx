export function Blogs(props) {
  const slideBar = (
    <ul>
      {props.posts.map(post =>
        <li key={post.id}>
          {post.title}
        </li>
      )}
    </ul>
  )
  const concent = props.posts.map(post =>
    <div key={post.id}>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  )
  return (
    <div>
      {slideBar}
      <hr />
      {concent}
    </div>
  )
}