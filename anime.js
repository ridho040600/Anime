var input1 = document.getElementById("search");
input1.addEventListener("keyup", function(event) {
if (event.keyCode === 13) {
event.preventDefault();
document.getElementById("tombol").click();
}
});  

var button = document.getElementById("tombol");
        button.addEventListener("click",muncul);
        function muncul(){
        document.getElementById("hasil").innerHTML="";
        var input = document.getElementById("search").value; 
          fetch("https://api.jikan.moe/v3/search/anime?q="+input)
                .then(Response => Response.json())
                .then(data => {
                  console.log(data.results);
                  if(data.results.length === 0){
                    Swal.fire('Maaf, Apa yang kamu cari tidak ada ...')
                  }
                  else {
                  for(var i=0; i<16; i++){
                    document.getElementById("hasil").innerHTML+=
                    "<div class='col-md-3 mb-4'>"+
                    "<div class='card' style='width: 15rem;'>"+
                    "<img src ='"+data.results[i].image_url+"' width='240' height='300'>"+
                    "<h5 class ='demo-2'>"+data.results[i].title+"</h5>"+
                    "<p class='demo-1'>"+data.results[i].synopsis+"</p>"+
                    "<a href='"+data.results[i].url+"'class='btn btn-primary btn-lg active' role='button' aria-pressed='true'>Selengkapnya</a>"
                    "</div>"+
                    "</div>"
                    "<hr style='border:1px outset;background-color:#000000;color:#353535;height:5px;width:75%;text-align:left;margin-left:12.5%'/><br>"
                  }
                }
                })

        }
function preview(){
            console.log(' ');
            fetch('https://api.jikan.moe/v3/top/anime/1/upcoming').then(response => response.json())
              .then((data) => { 
                  for(var i=0; i<16; i++){
                              document.getElementById("hasil").innerHTML+=
                              "<div class='text-center col-md-3 mb-4'>"+
                              "<div class='card' style='width: 15rem;'>"+
                              "<img src ='"+data.top[i].image_url+"' width='240' height='300'>"+
                              "<h5 class ='demo-2'>"+data.top[i].title+"</h5>"+
                              "<p class = card-text>Rank: "+data.top[i].rank+"</p>"+
                              "<p class = card-text>Type: "+data.top[i].type+"</p>"+
                              "<a href='"+data.top[i].url+"'class='btn btn-primary btn-lg active' role='button' aria-pressed='true'>Selengkapnya</a>"
                              "</div>"+
                              "</div>"
                              "<hr style='border:1px outset;background-color:#000000;color:#353535;height:5px;width:75%;text-align:left;margin-left:12.5%'/><br>"
                            }
              }); 
          }

          function keluar(pilihan){
          document.getElementById("hasil").innerHTML="";
          console.log(' '); 
          fetch("https://api.jikan.moe/v3/genre/anime/"+pilihan+"/1")
                  .then(Response => Response.json())
                  .then(data => {
                    for(var i=0; i<16; i++){
                      document.getElementById("hasil").innerHTML+=
                      "<div class='text-center col-md-3 mb-4'>"+
                      "<div class='card' style='width: 15rem;'>"+
                      "<img src ='"+data.anime[i].image_url+"' width='240' height='300'>"+
                      "<h5 class ='demo-2'>"+data.anime[i].title+"</h5>"+
                      "<p class = card-text>Type:"+data.anime[i].type+"</p>"+
                      "<p class = card-text>Episode:"+data.anime[i].episodes+"</p>"+
                      "<a href='"+data.anime[i].url+"'class='btn btn-primary btn-lg active' role='button' aria-pressed='true'>Selengkapnya</a>"
                      "</div>"+
                      "</div>"
                      "<hr style='border:1px outset;background-color:#000000;color:#353535;height:5px;width:75%;text-align:left;margin-left:12.5%'/><br>"
                    }
                    
                  })
  
          }

          
          