
import Blog from "./blog";

const BlogTab = ({blogs}) => {
    return ( 
      blogs.map((blog,index)=><Blog key={blog.img} blog={blog} index={index}/>)
     );
}
 
export default BlogTab;