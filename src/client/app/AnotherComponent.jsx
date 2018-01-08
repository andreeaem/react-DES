import React from 'react';

const person = {
   firstName: "Penelope",
   lastName: "Barrymore",
   fullName: function () {
        /*Notice we use "this" just as we used "he" in the example sentence earlier?​*/
        console.log(this.firstName + " " + this.lastName);
        /*We could have also written this:​​*/
       console.log(person.firstName + " " + person.lastName);
   }
}

class AnotherComponent extends React.Component{
  render(){
    return (
      <div>
        <p>Wazaa {this.props.greetTarget}</p>
        <h2>{person.firstName} {person.lastName}</h2>
      </div>
    );
  }
}

export default AnotherComponent;
