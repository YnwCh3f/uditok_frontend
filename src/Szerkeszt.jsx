import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from 'react-icons/md';

const Szerkeszt = () => {
  const [ uditok, setUditok ] = useState([ { uaz : "loading...", nev : "loading...", meret : "loading...", kep : "loading..." } ]);
  const [ nev, setNev ] = useState("");
  const [ meret, setMeret ] = useState(""); 
  const [ kep, setKep ] = useState(""); 
  const [ refresh, setRefresh ] = useState(true);

  const load = () => {
    const getUditok = async () => {
      const res = await fetch("http://localhost:88/uditok");
      const json = await res.json();
      setUditok([...json]);
    }
    getUditok();
  }


  const delUdito = async (id) => {
    await fetch("http://localhost:88/udito/" + id, {
      method : "DELETE"
    });
    setRefresh(!refresh);
  }

  const ujUdito = async () => {
    await fetch("http://localhost:88/udito", {
      method : "POST",
      headers : { "Content-Type" : "application/json" },
      body: JSON.stringify({
        nev : nev,
        meret : meret,
        kep : kep
      })
    });
    setRefresh(!refresh);
  }

  useEffect(load, [refresh]);

  return (
    <>
    <div style={{"marginTop" : "20px", "marginBottom": "20px"}}>
    <div className='ujszin'>
      <input placeholder='név' type="text" value={nev} onChange={x => setNev(x.target.value)}/>
      <input placeholder='méret' type="text" value={meret} onChange={x => setMeret(x.target.value)}/>
      <input placeholder='kép' type="text" value={kep} onChange={x => setKep(x.target.value)}/>
      <input type="button" value="Hozzáad" onClick={ujUdito} />
    </div>
    </div>
        <div className='displaySpace'>
      
      { uditok.map(x => <div style={{display: "flex", justifyContent: "space-between" }} key={x.uaz}><br />{x.nev} ({x.meret} Liter) <div> <MdDelete onClick={() => delUdito(x.uaz)} color='red' /></div></div>) }
    </div>
    </>
    
  )
}

export default Szerkeszt
