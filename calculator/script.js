function insert(char) {
    //get the initial value on the screen
    const initialValue = $("input").val()
    $("input").val(initialValue + char)

}

$("#evaluate").on("click", () => {
    //get the value on the screen
    const screenValue = $("input").val();
    //Evaluate the screenValue
    const evaluatedValue = eval(screenValue);
    //display the evaluated value onthe screen
    $("input").val(evaluatedValue)
});

$("#clearAll").on("click", () => {
    $("input").val("")

})
$("#clear").on("click", () => {
  let  oldValue = $("input").val()
    $("input").val(oldValue.slice(0,-1))
    

})


$("#sqrt").on("click", () => {
    //get the value on the screen
    const screenValue = $("input").val();
    //Evaluate the screenValue
    const evaluatedValue = Math.sqrt(screenValue);
    //display the evaluated value onthe screen
    $("input").val(evaluatedValue)
});



$("#sqr").on("click", () => {
    //get the value on the screen
    const screenValue = $("input").val();
    //Evaluate the screenValue
    const evaluatedValue = screenValue ** 2;
    //display the evaluated value onthe screen
    $("input").val(evaluatedValue)
});
// sine
$("#sin").on("click", () => {
    //get the value on the screen
    const screenValue = $("input").val();
    //Evaluate the screenValue
    const evaluatedValue = Math.sin(screenValue * Math.PI / 180);
    //display the evaluated value onthe screen
    $("input").val(evaluatedValue)
});
// cosine
$("#cos").on("click", () => {
    //get the value on the screen
    const screenValue = $("input").val();
    //Evaluate the screenValue
    const evaluatedValue = Math.cos(screenValue * Math.PI / 180);
    //display the evaluated value onthe screen
    $("input").val(evaluatedValue)
});
// tangent
$("#tan").on("click", () => {
    //get the value on the screen
    const screenValue = $("input").val();
    //Evaluate the screenValue
    const evaluatedValue = Math.tan(screenValue * Math.PI / 180);
    //display the evaluated value onthe screen
    $("input").val(evaluatedValue)
});



