function addLength(str: string): string[] {
  return str.split(' ').map((word) => {
    return `${word} ${word.length}`;
  });
}

console.log(addLength('you will win'));
