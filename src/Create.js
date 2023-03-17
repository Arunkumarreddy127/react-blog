import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [image, setImage] = useState('');
    const [category, setCategory] = useState('Higher Education');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author, category, image };

        setIsPending(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('success');
            setIsPending(false);
        })
        console.log(blog);
        history.push('/allblogs');
    }

    return ( 
        <div className="create">
            <h2>Create your own blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input 
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog Body:</label>
                <textarea 
                    type="text"
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog Category:</label>
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="Higher Education">Higher Education</option>
                    <option value="Student Success">Student Success</option>
                    <option value="Course Development">Course Development</option>
                    <option value="Learning and Training">Learning and Training</option>
                </select>
                <label>Blog Image:</label>
                <input 
                    type="text"
                    required
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                />
                <label>Blog Author:</label>
                <input 
                    type="text"
                    required
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
                { !isPending && <button>Add Blog</button> }
                { isPending && <button disabled>Adding Blog...</button> }

                <p>{ title }</p>
                <p>{ body }</p>
                <p>{ category }</p>
                <p>{ author }</p>
                <img src={image} alt="demo" style={{height:'200px', width: '300px'}} />
            </form>
        </div>
     );
}
 
export default Create;