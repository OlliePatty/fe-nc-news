import { Link } from 'react-router-dom'

export default function ArticleCard({article}) {
    return (
          <article className='article-card' key={article.article_id}>
              <Link to={`/articles/${article.article_id}`}>
              <img className='image-card' src={article.article_img_url} alt={article.title}/>
              <h3>{article.title}</h3>
              </Link>
              <h4>By: {article.author}</h4>
              <h5>🕚 {article.created_at.slice(0, 10)}</h5>
              <p>Comments: {article.comment_count}</p>
              <p>Votes: {article.votes}</p>
              <button className='vote-button'>👍</button><button className='vote-button'>👎</button>
          </article>
    )
}
