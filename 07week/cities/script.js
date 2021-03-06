'use strict'

class Welcome extends React.Component {
  constructor () {
    super();
    this.state = {
      name: 'there',
      color: 'red'
    };
  }

  changeName = (e) => {
    let color;
    if (e.target.value.length % 3 ==== 0 && e.target.value.length % 5 === 0) {
      color = 'blue';
    } else if (e.target.value.length % 3 === 0) {
      color = 'green';
    } else if (e.target.value.length % 5 === 0) {
      color = 'red';
    } else {
      color = 'black';
    }

    this.setState ({
      name: e.target.value,
      color: color
    });
  }

  render() {
    return (
      <div>
        <h1 style={ {color: this.state.color} }>Hello, {this.state.name}!</h1>
        <input type="text" onChange={this.changeName} />
      </div>
    );
  }
}
    // The first this is referring to everything, and the second
    // this is referring to just the line that the this is on (scope)

    );
  }


ReactDOM.render(<Cities/>, document.getElementById('welcome'));

// 'use strict'
//
// class Cities extends React.component {
//   constructor (props) {
//     super (props);
//     this.state = [
//       cities:
//       'Boston',
//       'Austin',
//       'Chicago',
//       ]
//     };
//   }
//
//   render(){
//     const cityItems = this.state.cities.map((city)) =>
//     return (<li key=(city)>I love {city}!</li>);
//   });
//
//     return (<ul>(cityItems)</ul>);
//   }
// }
//
// ReactDOM.render(<Cities/>, document.getElementById('cities'));

// Using Hello World below to make it cleaer and simple
