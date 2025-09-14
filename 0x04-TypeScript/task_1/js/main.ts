interface Teacher {
  readonly firstName: string;     // can only be set when initializing
  readonly lastName: string;      // can only be set when initializing
  fullTimeEmployee: boolean;      // always required
  yearsOfExperience?: number;     // optional
  location: string;               // always required
  [key: string]: any;             // allow additional attributes
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false, // extra property
};

console.log(teacher3);
