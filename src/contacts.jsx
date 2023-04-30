import { useState } from 'react';
import './App.css';
import Contact from './components/contact';
import { v4 as uuidv4 } from 'uuid';
import {BsSearch} from 'react-icons/bs'



function Contacts() {
  const contacts = [{
    id: uuidv4(),
    firstName: "Барней",
    lastName: "Стинсовський",
    phone: "+380956319521",
    gender: "male"
    }, {
    id: uuidv4(),
    firstName: "Робін",
    lastName: "Щербатська",
    phone: "+380931460123",
    gender: "female"
    }, {
    id: uuidv4(),
    firstName: "Анонімний",
    lastName: "Анонімус",
    phone: "+380666666666"
    }, {
    id: uuidv4(),
    firstName: "Лілія",
    lastName: "Олдровна",
    phone: "+380504691254",
    gender: "female"
    }, {
    id: uuidv4(),
    firstName: "Маршен",
    lastName: "Еріксонян",
    phone: "+380739432123",
    gender: "male"
    }, {
    id: uuidv4(),
    firstName: "Теодор",
    lastName: "Мотсбес",
    phone: "+380956319521",
    gender: "male"
  }];
  
  const [search, setSearch] = useState("")
  const [contactValue, setContact] = useState(contacts)
  const [checkedValues, setCheckedValues] = useState( {
    male: true,
    female: true,
    unspecified: true,});

  function handleSearchChange(event){
    setSearch(event.target.value)
    if (event.target.value === "") {
      setContact(contacts);
    } else {
      setContact(contacts.filter(function searching(el){
        if(el.firstName.includes(event.target.value) || el.lastName.includes(event.target.value) || el.phone.includes(event.target.value)){
          return el;
        }
      }));
    }
  }

  function handleSearchChange(event) {
    setSearch(event.target.value);
    if (event.target.value === "") {
      setContact(contacts);
    } else {
      setContact(
        contacts.filter((el) => {
          if (
            el.firstName.includes(event.target.value) ||
            el.lastName.includes(event.target.value) ||
            el.phone.includes(event.target.value)
          ) {
            return el;
          }
        })
      );
    }
  }

  function handleCheckboxChange(event) {
    setCheckedValues({ ...checkedValues, [event.target.name]: event.target.checked });
  }
  
  return (
      <div className="App">
        <div className='search'>
          <BsSearch className='loopa'/>
          <input className="search-input" type="text" placeholder='search' value={search} onChange={(event)=>{handleSearchChange(event)}}/>
        </div>
        <div className="checkboxes">
        <label>
          <input
            type="checkbox"
            name="male"
            checked={checkedValues.male}
            onChange={(event) => {
              handleCheckboxChange(event);
            }}
          />
          Male
        </label>
        <label>
          <input
            type="checkbox"
            name="female"
            checked={checkedValues.female}
            onChange={(event) => {
              handleCheckboxChange(event);
            }}
          />
          Female
        </label>
        <label>
          <input
            type="checkbox"
            name="unspecified"
            checked={checkedValues.unspecified}
            onChange={(event) => {
              handleCheckboxChange(event);
            }}
          />
          Unspecified
        </label>
      </div>
       
        {contactValue.filter((contact) => {
          if (checkedValues.male && contact.gender === "male") {
            return true;
          }
          else if (checkedValues.female && contact.gender === "female"){
            return true;
          }
          else if (checkedValues.unspecified && !contact.gender){
            return true;
          }}).map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </div>
  );
}

export default Contacts;
