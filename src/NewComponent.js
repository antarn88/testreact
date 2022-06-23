import { useEffect, useState } from 'react';

const NewComponent = (props) => {

  // Használ egy "state" elemet 0 kezdőértékkel, counter névvel, setCounter setterrel. Ebből a sorból lehet több is!
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => {
    setCounter(counter + 1);
  };


  // Ha csak simán használjuk a useEffect metódust, akkor inicializáláskor és minden egyes property változásnál le fog futni.
  /*
  useEffect(() => {
    console.log('useEffect lefut minden prop változásnál');
  });
  */

  // Csak inicializáláskor fut le!
  /*
  useEffect(() => {
    console.log('Ha 2. paraméterként megkap egy üres tömböt, akkor csak inicializáláskor fog lefutni!');
  }, []);
  */


  // Csak inicializáláskor és akkor fut le, ha változik a counter értéke!
  /*
  useEffect(() => {
    console.log('Ha figyelünk 1-1 változót, akkor a tömbbe felsoroljuk őket');
  }, [counter]);
  */

  // Ez a típus pedig lefut inicializáláskor, és minden counter változáskor, és a végén van egy callback return block,
  // ahol akár bizonyos helyzetekben leiratkozhatunk változókról
  useEffect(() => {
    console.log('Ha figyelünk 1-1 változót, akkor az alsó tömbbe felsoroljuk őket');
    return () => {
      console.log('Ez a blokk például leiratkozásokhoz alkalmas, leiratkozás után újra renderelődik');
    };
  }, [counter]);


  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={increaseCounter} type="button">Add +1</button>

    </div>
  );
};

export default NewComponent;