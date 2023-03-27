import { useState, useEffect } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState(posts);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((posts) => setPosts(posts));
  }, []);

  useEffect(() => {
    const newFilteredPosts = posts.filter((post) => {
      return post.title.toLocaleLowerCase().includes(searchField) || post.body.toLocaleLowerCase().includes(searchField);
    });

    setFilteredPosts(newFilteredPosts);
  }, [posts, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className='App'>
      <h1 className='app-title'>Posts</h1>

      <SearchBox
        className='posts-search-box'
        onChangeHandler={onSearchChange}
        placeholder='search posts'
      />
      <CardList posts={filteredPosts} />
    </div>
  );
};

export default App;
