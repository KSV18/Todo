var emoji = String.fromCodePoint(0x1F4CC);
function Todo({todo,index,remove}){
  function handle(){
    console.log('Ping:',index);
    remove(index);
  }
  return <div className="todo" onClick={handle}>{emoji + " " + todo.text} </div>
}
