const container = document.querySelector('.container');
const colors = ['red', 'blue', 'green', "yellow"];
const sizes = ['sm', 'md', 'lg', 'xl'];
const shapeArr = ['circle', 'square'];

function randomShape(){
  const colorIdx = Math.floor(Math.random()*colors.length);
  const sizeIdx = Math.floor(Math.random()*sizes.length);
  const shapeIdx = Math.floor(Math.random()*shapeArr.length);
  const shape = {
    color: colors[colorIdx],
    size: sizes[sizeIdx],
    shape: shapeArr[shapeIdx]
  };
  return shape;
}

const shapes = [
  randomShape(),
  randomShape()
];

function render(){
  const html = shapes.map(function(shape, idx){
    return `<div class='${shape.color} ${shape.size} ${shape.shape}'> ${idx + 1} </div>`;
  });
  container.innerHTML = html.join('');
}

render();
let interval = setInterval(function(){
  const newShape = randomShape();
  shapes.push(newShape);
  render();
  if(shapes.length + 1 > 5){
    clearInterval(interval)
  }
}, 500);