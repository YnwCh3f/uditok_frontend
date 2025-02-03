import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const Uditok = () => {
  const [ uditok, setUditok ] = useState([ { uaz : "loading...", nev : "loading...", meret : "loading...", kep : "loading..." } ]);
   
  const [ refresh, setRefresh ] = useState(true);

  const load = () => {
    const getUditok = async () => {
      const res = await fetch("http://localhost:88/uditok");
      const json = await res.json();
      setUditok([...json]);
    }
    getUditok();
  }

  useEffect(load, [refresh]);

  return (
    <div style={{ display : "flex", gap: "10px", flexWrap: "wrap"}} className='uditok displaySpace'>
      { uditok.map(x => <div style={{ padding: "10px", border: "solid 1px grey", borderRadius: "10px" }} key={x.uaz}><img src={x.kep} /><br />{x.nev} ({x.meret} Liter)</div>) }
    </div>
  )
}

export default Uditok
