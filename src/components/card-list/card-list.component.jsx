import Card from '../card/card.component';
import './card-list.styles.css';

const CardList = ({ posts }) => (
  <div className='card-list'>
    {posts.map((post) => {
      return <Card key={post.id} post={post} />;
    })}
  </div>
);

export default CardList;
