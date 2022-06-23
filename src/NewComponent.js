import axios from 'axios';
import { useEffect, useReducer } from 'react';
import PostListReducer, { SET_LIST } from './PostList.reducer';

const NewComponent = () => {

  // Használjuk a userReducert, átadjuk neki a megírt reducert, és egy kezdőértéket
  // A tömb első eleme a lista, 2. a dispatch, amivel beállítjuk a későbbi értéket.
  const [reducerList, dispatch] = useReducer(PostListReducer, []);

  const fetchList = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const { data } = await axios.get(url);

    // A komponens betöltődésekor belőjük a SET_LIST actiont, aminek átadjuk a letöldődött listát
    dispatch({ type: SET_LIST, list: data });
  };

  const renderPost = (post, index) => {
    return (
      <div key={index} className='post'>
        <div>{post.title}</div>
      </div>
    );
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div>
      {reducerList.length > 0 && reducerList.map(renderPost)}
    </div>
  );
};

export default NewComponent;