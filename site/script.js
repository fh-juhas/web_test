document.addEventListener("DOMContentLoaded", 
function(event)
{
    function sayHello(k){
        this.textContent="said it !"
        var name=(document.getElementById("name").value);
        var message = "<h1>Hello "+name+" !!</h1>";
        
        
        document.getElementById("content").innerHTML = message;
      
        if (name == 'student'){
          var title = document.querySelector("#title").textContent;
          title+=" yes sir";
      
        document.querySelector("#title").textContent=title;
      
        }
      }

      this.documentElement.querySelector("button")
      .addEventListener("click",sayHello);
}
)


