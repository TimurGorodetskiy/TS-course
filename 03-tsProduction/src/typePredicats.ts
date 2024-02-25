type Fish = { name?: string; swim: () => void };
type Bird = { name?: string; fly: () => void };

function isBird(pet: Fish | Bird): pet is Bird {
  return (pet as Bird).fly !== undefined;
}

function getFood(pet: Fish | Bird) {
  if (isBird(pet)) {
    return "It's a Bird food";
  } else {
    return "It's a FISH food";
  }
}

const eagle: Bird = {
  name: 'Eagle',
  fly() {
    console.log("It's called from object eagle");
  },
};

const shark: Fish = {
  name: 'White Shark',
  swim() {},
};

console.log(getFood(eagle));
