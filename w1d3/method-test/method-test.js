var person = {
  firstName: 'Bob',
  lastName:  'Smith',
  fullName: function() {
    return firstName + ' ' + lastName;
  }
}

// Nice, now I can just say:
console.log('Hello, ' + person.fullName());
// And it's much "cleaner" every time I need their full name!