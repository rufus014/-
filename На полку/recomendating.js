main.onclick = function(event)
{
  let target = event.target;
  if(target.id == "hider-1")
  {
    func1(document.getElementById("text-1"));
  }
  else if(target.id == "hider-2")
  {
    func1(document.getElementById("text-2"));
  }
  else if(target.id == "hider-3")
  {
    func1(document.getElementById("text-3"));
  }
}

function func1(target)
{
  if (target.style.display !== "none"){
      	target.style.display="none";
      }else{
      	target.style.display="block";
      }
}

