

function Article(props){
    return(
        <div>
            <h3>{props.posts.title}</h3>
            <small>
                const date={props.date}
            </small>
            <p> {props.posts.preview}</p>
        </div>
    );
}
export default Article;