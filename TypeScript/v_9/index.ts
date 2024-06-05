const greet = (name: string, id?: number) => {
    if (id) {
      return `Welcome ${name}, your id is ${id}`;
    } else {
      return `Welcome ${name}`;
    }
  };
  
  const result1 = greet("Gautam");
  console.log(result1);
  
  const result2 = greet("Chanchal", 123);
  console.log(result2);