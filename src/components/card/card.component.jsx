import './card.styles.css';

const Card = ({ post }) => {
  const { id, userId, title, body } = post;

  return (
    <div className='card-container'>

      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
};

export default Card;
