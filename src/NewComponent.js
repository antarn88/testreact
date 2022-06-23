import axios from 'axios';
import { useEffect, useState } from 'react';

const NewComponent = () => {

  // Használunk egy belső state-et!
  const [list, setList] = useState([]);

  // Axios segítségével letöltünk egy listát a felhőből HTTP hívás segítségével
  const fetchList = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const { data } = await axios.get(url);
    setList(data); // Beállítjuk setteren keresztül a lista értékét!
  };

  const renderPost = (post, index) => {
    return (
      <div key={index} className='post'>
        <div>{post.title}</div>
      </div>
    );
  };

  // Lefut 1x, amikor a komponens legenerálódik
  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div>

      {/* Betöltjük a listát, amikor már letöltődött az adat, a map-nek átadjuk a renderPostot, ami megcsinál mindent */}
      {list.length > 0 && list.map(renderPost)}

    </div>
  );
};

export default NewComponent;