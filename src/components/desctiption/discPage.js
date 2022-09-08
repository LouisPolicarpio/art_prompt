import React, { useState, useEffect } from "react"
import axios from "axios";

export default function Main(){
    const [descriptPersonAll, setDescriptPersonAll] = useState([]);
    const [descriptPerson, setDescriptPersion] = useState("");

    const [descriptClothAll, setDescriptClothAll] = useState([]);
    const [descriptCloth, setDescriptCloth] = useState("");

    const [descriptRacesAll, setDescriptRacesAll] = useState([]);
    const [descriptRaces, setDescriptRaces] = useState("");

    const [descriptClassesAll, setDescriptClassesAll] = useState([]);
    const [descriptClasses, setDescriptClasses] = useState("");



    const fechData =()=>{
        const discriptPersonApi = "https://api.datamuse.com/words?rel_jjb=man";
        const getDiscriptPerson = axios.get(discriptPersonApi);

        const discriptClothApi = "https://api.datamuse.com/words?rel_jjb=clothes";
        const getDiscriptCloth = axios.get(discriptClothApi);

        const discriptRacesApi = "https://www.dnd5eapi.co/api/races";
        const getDiscriptRaces = axios.get(discriptRacesApi);

        const discriptClassesApi = "https://www.dnd5eapi.co/api/classes";
        const getDiscriptClasses = axios.get(discriptClassesApi);

        axios.all([getDiscriptPerson, getDiscriptCloth, getDiscriptRaces, getDiscriptClasses]).then(
            axios.spread((...allData) =>{
                const allDescPersonData = allData[0].data;
                const allDescClothData = allData[1].data;
                const allDescRacesData = allData[2].data.results;
                const allDescClassesData = allData[3].data.results;


                setDescriptPersonAll(allDescPersonData);
                setDescriptClothAll(allDescClothData);
                setDescriptRacesAll(allDescRacesData);
                setDescriptClassesAll(allDescClassesData);

            })
        )
    }

    function handleClick(e) {
        e.preventDefault();
        var randomPerson = Math.floor(Math.random() * descriptPersonAll.length);
        var randomCloth = Math.floor(Math.random() * descriptClothAll.length);
        var randomRaces = Math.floor(Math.random() * descriptRacesAll.length);
        var randomClasses = Math.floor(Math.random() * descriptClassesAll.length);


        setDescriptPersion(descriptPersonAll[randomPerson].word);
        setDescriptCloth(descriptClothAll[randomCloth].word);
        setDescriptRaces(descriptRacesAll[randomRaces].name);
        setDescriptClasses(descriptClassesAll[randomClasses].name);



    }


    useEffect(() =>{
        fechData();
    },[])



    return(
        <div className="colour--body" >
            <button onClick={handleClick} className="colour--gen_btn"  > generate </button>
            <p>character : {descriptPerson}</p>
            <p>clothes : {descriptCloth}</p>
            <p>Race : {descriptRaces}</p>
            <p>class : {descriptClasses}</p>
       </div> 
    )

}