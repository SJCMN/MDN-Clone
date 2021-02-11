
// variable definitions - array of contact information 'name:phone number'
const contacts = ['Steve:(651) 404-2654', 'Sarah:(651) 404-8534', 'Bill:(651) 404-5734', 'Mary:(651) 404-3234', 'Dianne:(651) 404-1444'];
const para = document.querySelector('#phoneSearch');
const input = document.querySelector('#search');
const btn = document.querySelector('#searchBtn');

// attach an event listener to the button, on click execute function
btn.addEventListener('click', function() {
  // variable to store button text input
  // convert input toLowerCase
  const searchName = input.value.toLowerCase();
  // reset search field input value back to empty
  input.value = '';
  // focus back on search field
  input.focus();
  // loop begins
  // start counter at 0 
  // condition = loop until counter is no longer less than contacts.length
  // increment counter by 1 after each loop
  for(let i = 0; i < contacts.length; i++) {
    // inside loop
    // split current contact at the colon
    // store resulting two values in an array called splitContact
    let splitContact = contacts[i].split(':');
    // test if splitContact[0] (then contact name toLowerCase) = input from search 
    if(splitContact[0].toLowerCase() === searchName) {
      // if true output to <p> contact name + contact number
      para.textContent = splitContact[0] + '\'s number is ' + splitContact[1] + '.';
      // exit loop
      break;
      // after (contacts.length) iterations
      // if contact name does not match entered search, output to <p> "Contact not found"
      // loop continues untill condition is no longer true
    } else {
      para.textContent = 'Contact not found.';
    }
  }
});

// variable definitions - paragraph outut, input search, number button
const paraNumSeq = document.querySelector('.genNumSeq');
const inputNum = document.querySelector('#number');
const btnNum = document.querySelector('#numBtn');


// input should be a number (num). 
btnNum.addEventListener('click', function() {
  paraNumSeq.textContent = 'Output: ';
  let num = inputNum.value;
  inputNum.value = '';
  inputNum.focus();
  // For loop counter begins at 1, we do not want to use 0.
  // an exit condition says the loop will stop when the counter becomes greater than the input num
  // an iterator adds 1 to the counter
  for (let i = 1; i <= num; i++) {
    // Inside the loop, find the square root of each number using Math.sqrt(i)
    let sqRoot = Math.sqrt(i);
    // Check if the square root is an integer by testing weather it is the same as itself when rounded down to the nearest integer Math.floor()
    if(Math.floor(sqRoot) !== sqRoot) {
      // If the square root and the rounded down square root (!==), then the square root is not an integer, so we are not interested in the value
      // In such case, we use the continue statement to skip on to the next loop iteration without recording the number
      continue;
    }
    // If the square root is an integer, we skip the block, the continue statment is not executed;
    // Instead we concatenate the current [i] value plus a space
    paraNumSeq.textContent += i + ' ';
  }
});

// variable definitions - paragraph output, input search, number button
// creates new paragraph

const btnCountDown = document.querySelector('#launchBtn');
const output = document.querySelector('.output');

btnCountDown.addEventListener('click', function() {
  output.textContent = '';
  // loop down from 10
  for(let i = 10; i >= 0; i--) {
    const paraCountDown = document.createElement('p');
    if (i === 10) {
      paraCountDown.textContent = 'Coundown from' + i;
    } else if (i === 0) {
      paraCountDown.textContent = 'Blast off!';
    } else {
      paraCountDown.textContent = i;
    }
    // appends the paragraph to the output <p>
    output.appendChild(paraCountDown);
  }
});

// Loops 1
let listBtn = document.querySelector('#listBtn');
let myArray = ['tomatoes', 'chick peas', 'onions', 'rice', 'black beans'];
let list = document.createElement('ul');


// Add your code here
listBtn.addEventListener('click', function() {
for (let i = 0; i < myArray.length; i++) {
    let listItem = document.createElement('li');
    listItem.textContent = myArray[i];
    list.appendChild(listItem);
    }
});
// Don't edit the code below here!

const section = document.querySelector('.preview');
section.appendChild(list);


// Loops 2

const contactName = document.querySelector('#phoneBookSearch');
const btnSearch = document.querySelector('#phoneBookBtn')

let phoneList = document.createElement('p');

const phoneBook = [
  { contactName : 'Chris', number : '1549' },
  { contactName : 'Li Kang', number : '9634' },
  { contactName : 'Anne', number : '9065' },
  { contactName : 'Francesca', number : '3001' },
  { contactName : 'Mustafa', number : '6888' },
  { contactName : 'Tina', number : '4312' },
  { contactName : 'Bert', number : '7780' },
  { contactName : 'Jada', number : '2282' },
]

// Add your code here

btnSearch.addEventListener('click', function() {

const contactNameSearch = contactName.value.toLowerCase();
contactName.value = '';
contactName.focus();
let i = 0;

do {
  if(phoneBook[i].contactName.toLowerCase() === contactNameSearch) {
    phoneList.textContent = `${ phoneBook[i].contactName }'s number is ${ phoneBook[i].number }.`;
    break;
  }

  if(i === phoneBook.length - 1) {
    phoneList.textContent = 'Name not found in the phonebook';
  }

  i++;
} while(i < phoneBook.length);

});

// Don't edit the code below here!
let phoneSection = document.querySelector('.phoneSection');
phoneSection.appendChild(phoneList);

// // Add contacts to phonebook array
// // declare form fields variables
// let phoneNameInput = document.querySelector('#phoneName');
// let phoneNumberInput = document.querySelector('#phoneNumber');
// let addContactBtn = document.querySelector('#addPhoneContact');

// // collect input for phoneBook contatNames Array

// addContactBtn.onclick = function (){
//   addContact();
// }

// function addContact () {
//   phoneNameInput.value 
//   contactName = input phoneName
//   number = input phoneNumber
//   splice phoneName, phoneNumber into phoneBook[]
//   phoneBook.push({contactName: '', number : ''});
// };





