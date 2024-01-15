let counter = document.querySelector(".counter");
let button = document.querySelector(".increment");

// use state uses nothing but arrays and an index to maintain all the states in a [state, setstate] pair
let hooks = [];
let hooksIndex = 0;

// simple counter component
const Counter = () => {
  let [count, setCount] = useState(0);

  button.onclick = () => setCount(count + 1);

  counter.innerHTML = count;
};

var renderDom = () => {
  hooksIndex = 0;
  // whatever you wanna do with the state you do it here

  Counter();
};

function useState(initialstate = null) {
  let pair = hooks[hooksIndex];

  if (pair) {
    // if pair exists means we don't need to do anything just return the pair
    hooksIndex++;

    return pair;
  } else {
    // if it doesn't exist then we make a pair and return that
    pair = [initialstate, setState];

    function setState(nextState) {
      pair[0] = nextState;

      renderDom();
    }

    hooks[hooksIndex++] = pair;
    return pair;
  }
}

renderDom();
