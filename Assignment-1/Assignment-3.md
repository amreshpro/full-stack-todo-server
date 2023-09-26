
## Assignment 3

### 1.Background Change



![bgcolor.png](../_resources/bgcolor.png)



```sh 
index.html
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Change Background Color</title>
  </head>
  <body class="container"  onclick="changeBackgroundColor()" >
    

  <div class="box" onclick="()=>{}">
    <input type="text" id="hexbox" /> 
    <h3 id="hexbox"></h3>
    <button class="btn" onclick="changeBackgroundColor()">
      Change Color
    </button>
  </div>



    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
     .container{
        width: 100vw;
        height: 100vh;
      
        display: flex;
        flex-direction: column;
        justify-items: center;
        justify-content: center;
        align-items: center;
        gap: 4px;

     }

     .box{
        display: flex;
        flex-direction: column;
        justify-items: center;
        justify-content: center;
        align-items: center;
        gap: 4px;
     }
   
      .btn {
        background-color: #b0b0fa;
        color: #fff;
        padding: 5px 8px 5px 8px;
        border-radius: 10px;
        font-size: 20px;
        width: fit-content;
        outline: none;
        border: none;
        border:2px solid  #6f6fc2;
        
      }
      .btn:hover{
        background-color: #6f6fc2;
        
      }

      #hexbox{
        outline: none;
      }
    </style>

    <script src="./script.js"></script>
  </body>
</html>

```

```sh
script.js
```

```js
const container = document.querySelector('.container');
const hexbox = document.getElementById('hexbox');



const color = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']


// random color generator
function getRandomColor() {
    const pt1 = color[Math.floor(Math.random() * 16)];
    const pt2 = color[Math.floor(Math.random() * 16)];
    const pt3 = color[Math.floor(Math.random() * 16)];
    const pt4 = color[Math.floor(Math.random() * 16)];
    const pt5 = color[Math.floor(Math.random() * 16)];
    const pt6 = color[Math.floor(Math.random() * 16)];

    const randomColor = `#${pt1}${pt2}${pt3}${pt4}${pt5}${pt6}`
    hexbox.value = randomColor
    return randomColor

}

// background color
function changeBackgroundColor() {
    container.style.backgroundColor = getRandomColor()

}

changeBackgroundColor()



//copy
function copyTextContent() {

    // Select the text field
    hexbox.select();
    hexbox.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(hexbox.value);


}


//on click anywhere in body, change the color
container.addEventListener('click', () => {
    changeBackgroundColor()
    hexbox.addEventListener('hover', copyTextContent())
    console.log("body listener")
});




```


### 2.Display Names



![displayNames.png](../_resources/displayNames.png)



```sh
index.html
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Display Names</title>
  </head>
  <body class="container">
    <div class="box">
      <button id="prev" class="btn" onclick="showPreviousName()">
        Previous
      </button>
      <h1 id="name"></h1>
      <button id="next" class="btn" onclick="showNextName()">Next</button>
    </div>
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      .container {
        width: 100vw;
        height: 100vh;
        background-color: cadetblue;
        display: flex;
        flex-direction: column;
        justify-items: center;
        justify-content: center;
        align-items: center;
        gap: 4px;
      }

      .box {
        display: flex;
        flex-direction: row;
        justify-items: center;
        justify-content: center;
        align-items: center;
        gap: 4px;
      }

      .btn {
        background-color: #b0b0fa;
        color: #fff;
        padding: 5px 8px 5px 8px;
        border-radius: 10px;
        font-size: 20px;
        width: fit-content;
        outline: none;
        border: none;
        border: 2px solid #6f6fc2;
      }
      .btn:hover {
        background-color: #6f6fc2;
      }
    </style>

    <script src="./script.js"></script>
  </body>
</html>


```


```sh 
script.js
```

```js
const showName = document.getElementById("name");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

const names = [
  "Aarav",
  "Sanya",
  "Vikram",
  "Neha",
  "Rohan",
  "Priya",
  "Amit",
  "Meera",
  "Rajiv",
  "Ananya",
];
console.log(names);

//initial name on load
showName.innerText = names[0];

let currentState = {
  value: 0,
};

//next fun
const showNextName = () => {
  if (currentState.value === names.length - 1) currentState.value = -1;

  showName.innerText = names[++currentState.value];
};

//prev fun
const showPreviousName = () => {
  if (currentState.value === 0) currentState.value = names.length;

  showName.innerText = names[--currentState.value];
};



```