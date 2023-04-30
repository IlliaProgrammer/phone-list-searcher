import {BsGenderMale, BsGenderFemale} from "react-icons/bs"

function contact(props) {

    function gender(gen) {
      if ( gen === "male"){
        return <BsGenderMale/>
      } else if(gen === "female"){
        return <BsGenderFemale/>
      }
    }


    return (
      <div className="user">
        <div className="info">           
            <h2>{props.contact.firstName} {props.contact.lastName}</h2>
            <p className="gender">{gender(props.contact.gender)}</p>
        </div>
        <span>Phone: {props.contact.phone}</span>
        <hr />
      </div>
    );
  }
  
  export default contact;