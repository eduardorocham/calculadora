let data = [];
let newData = '';

const toShow = (n) => {
    if (data.length === 0) {
        data.push(n);
        toString(data); 
    } else if (data[data.length -1] !== '+' && data[data.length -1] !== '-' && data[data.length -1] !== '*' && data[data.length -1] !== '/') {
        data.push(n);
        toString(data); 
    } else if (
        (data[data.length -1] === '+' || data[data.length -1] === '-' || data[data.length -1] === '*' || data[data.length -1] === '/') && (n!== '+' && n!== '-' && n!== '*' && n!== '/')
    ) {
        data.push(n);
        toString(data);
    }
}

const toString = (d) => {
    newData = d.join('');
    document.querySelector('.calculator_visor').innerHTML = newData;
}

const calc = () => {
    let equal = eval(newData);
    document.querySelector('.calculator_visor').innerHTML = equal;
}

const deleteAll = () => {
    if (document.querySelector('.calculator_visor').innerHTML !== '') {
        data = [];
        newData = '';
        document.querySelector('.calculator_visor').innerHTML = '';
    }  
}
