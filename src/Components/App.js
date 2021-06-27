import '../App.css';
import Header from './Header';
import Cash from './Cashcontainer';
import Total from './TotalContainer';
import Numberc from './Numbercontainer';
import { useEffect, useState } from 'react';
const App = () => {
  const [number, setNumber] = useState([]);
  const [cashnumber, setCashnumber] = useState([]);
  const [totalnumber, setTotalnumber] = useState(0);

  useEffect(() => {
    const numdb = [{ id: 1, value: 1, color: false },
    { id: 2, value: 2, color: false },
    { id: 3, value: 3, color: false },
    { id: 4, value: 4, color: false },
    { id: 5, value: 5, color: false },
    { id: 6, value: 6, color: false },
    { id: 7, value: 7, color: false },
    { id: 8, value: 8, color: false },
    { id: 9, value: 9, color: false },
    { id: 10, value: 10, color: false },
    { id: 11, value: 11, color: false },
    { id: 12, value: 12, color: false },
    { id: 13, value: 13, color: false },
    { id: 14, value: 14, color: false },
    { id: 15, value: 15, color: false },
    { id: 16, value: 16, color: false },
    { id: 17, value: 17, color: false },
    { id: 18, value: 18, color: false },
    { id: 19, value: 19, color: false },
    { id: 20, value: 20, color: false },
    { id: 21, value: "clear" },
    { id: 22, value: "Cash" },
    { id: 23, value: "Random" }];

    const cashdb = [{ id: 1, cash: 1, times: 0 }, { id: 2, cash: 5, times: 0 }, { id: 3, cash: 10, times: 0 }, { id: 4, cash: 20, times: 0 }];

    setNumber(numdb);
    setCashnumber(cashdb);
  }, []);



  function numbercollector(id) { //Making button selected or unselected
    const updatednumber = [...number];
    const position = updatednumber.find(num => num.id === id);
    if (position.color === true) {// Used Counter "color" here for knowing whether button is true or false. This Condition checks about it.
      position.color = false;
    }
    else if (position.color === false) {
      let no = 0;
      updatednumber.map(num => num.color === true ? no = no + 1 : no = no + 0);// to check if user is going to select number more than 5
      if (no === 5) {
        alert("Please Deselect Number and add new one");
      }
      else {
        position.color = true;
      }
    }

    setNumber(updatednumber);
  }


  function cashvalue(id) {//adding cash values
    const updatednumbers = [...number];
    let no = 0;
    updatednumbers.map(num => num.color === true ? no = no + 1 : no = no + 0)// to check if user is going to select number more than 5
    if (no < 5) {
      alert("Please Select 5 Numbers.");
    }
    else {
      const updatecash = [...cashnumber];
      const position = updatecash.find(num => num.id === id);
      position.times = position.times + 1;//added counter "times" to know how many times a button is clicked so it can be looped and calculated.
      setCashnumber(updatecash);
      let a = 0;
      const updatedcash = [...cashnumber];
      updatedcash.forEach((item) => {
        a = item.cash * item.times + a;
        setTotalnumber(a);
      })
  }
  }
  
  function clear() {//clear button function
    const updatednumber = [...number];
    updatednumber.map(num => num.color = false);
    const updatedcash=[...cashnumber];
    updatedcash.map(num => num.times = 0);
    setNumber(updatednumber);
    setTotalnumber(0);
  }

  function cashd() {//cash button function
    const updatednumbers = [...number];
    let no = 0;
    updatednumbers.map(num => num.color === true ? no = no + 1 : no = no + 0)
    if(no < 5)
    {
      alert("Please Enter 5 Numbers and Cash to finally create ticket")
    }
    else{
    alert(updatednumbers);
    clear();
    }
  }


  function random() {//random function
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]; //Pen and Paper Algorithm for not getting repeated random numbers
    let numb = [];
    const updatednumber = [...number];
    updatednumber.map(num => num.color = false);
    const updatedcash=[...cashnumber];
    updatedcash.map(num => num.times = 0);
    while (numb.length !== 5) {
      let num = Math.floor(Math.random() * array.length);
      numb.push(array[num]);
      let position = updatednumber.find(i => i.id === array[num]);
      position.color = true;
      array.splice(num, 1);
    }
   
    setNumber(updatednumber); setTotalnumber(0);
  }

  return (
    <div >
      <Header></Header>
      <div style={{ display: 'grid', gridTemplateColumns: 'auto auto auto', gap: 36 }}>
        <Cash cash={cashnumber} Cn={cashvalue} />
        <Numberc Numbers={number} Nc={numbercollector} random={random} clear={clear} cash={cashd} />
        <Total Num={number} Cas={totalnumber} />
      </div>
    </div>
  )
}

export default App
