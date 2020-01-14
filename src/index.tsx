import * as React from 'react';
import * as ReactDOM from 'react-dom';

// page-1
ReactDOM.render(
    <h1>Hello world!</h1>,
    document.getElementById('page-1')
);

// page-2 1
const name = 'Nana Chang';
const page21Element = <h1>Hello, {name}</h1>;
ReactDOM.render(
    page21Element,
    document.getElementById('page-2-1')
);

//page-2 2
function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName:'Nana',
    lastName: 'AR',
};
const page22Element = (<h1>
    Hello, {formatName(user)}!
</h1>);

ReactDOM.render(
    page22Element,
    document.getElementById('page-2-2')
);