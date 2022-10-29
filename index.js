const showRandomObject = () => {
  const randomString = 'this string is random'
  const randomObject = {cart: {food: { bananas: 1, apples: 2}}}
  const randomInteger = 1000

  console.log(randomObject, randomString, randomInteger);
    
  // Logic after hitting breakpoint 1
  let stepOutVar = 1
  stepOutVar = 2
  };


  const conditionalBreakpoint = () => {
    let totalIterations = 0;
    for (let i = 0; i < 10; i++) {
      if ( i == 5) {
        totalIterations = 'Bug'
      }
      totalIterations += 1
    }
  }

  const methodToDemonstrateStepOver = () => {
    console.log("methodToDemonstrateStepOver")
    const stepOverVar = 1;
  }

  showRandomObject();
  // Method called between breakpoints
  methodToDemonstrateStepOver()
  conditionalBreakpoint();