        function muncul1(){
        document.getElementById("hasil").innerHTML="";
        var year = document.getElementById("year"); //ambil select
        var season = document.getElementById("season"); //ambil select
        var value1 = year[year.selectedIndex].value //ambil isi select
        var value2 = season[season.selectedIndex].value //ambil isi select
          fetch("https://api.jikan.moe/v3/season/"+value1+"/"+value2)
                .then(Response => Response.json())
                .then(data => {
                  console.log(data.anime);
                  if(data.anime.length === 0){
                    Swal.fire('Any fool can use a computer')
                  }
                  else {
                  for(var i=0; i<8; i++){
                    document.getElementById("hasil").innerHTML+=
                    "<div class='col-md-3 mb-4'>"+
                    "<div class='card' style='width: 15rem;'>"+
                    "<img src ='"+data.anime[i].image_url+"' width='240' height='300'>"+
                    "<h5 class = 'demo-2'>"+data.anime[i].title+"</h5>"+
                    "<p class = 'demo-3'>"+data.anime[i].synopsis+"</p>"+
                    "<a href='"+data.anime[i].url+"'class='btn btn-primary btn-lg active' role='button' aria-pressed='true'>Selengkapnya</a>"
                    "</div>"+
                    "</div>"
                    "<hr style='border:1px outset;background-color:#000000;color:#353535;height:5px;width:75%;text-align:left;margin-left:12.5%'/><br>"
                  }
                }
                })

        }
function preview(){
            console.log(' ');
            fetch('https://api.jikan.moe/v3/season/later').then(response => response.json())
              .then((data) => { 
                  for(var i=0; i<16; i++){
                              document.getElementById("hasil").innerHTML+=
                              "<div class='col-md-3 mb-4'>"+
                              "<div class='card' style='width: 15rem;'>"+
                              "<img src ='"+data.anime[i].image_url+"' width='240' height='300'>"+
                              "<h5 class = 'demo-2'>"+data.anime[i].title+"</h5>"+
                              "<p class = card-text>Rank: "+data.anime[i].rank+"</p>"+
                              "<p class = card-text>Type: "+data.anime[i].type+"</p>"+
                              "<p class='demo-3'>"+data.anime[i].synopsis+"</p>"+
                              "<a href='"+data.anime[i].url+"'class='btn btn-primary btn-lg active' role='button' aria-pressed='true'>Selengkapnya</a>"
                              "</div>"+
                              "</div>"
                              "<hr style='border:1px outset;background-color:#000000;color:#353535;height:5px;width:75%;text-align:left;margin-left:12.5%'/><br>"
                            }
              }); 
          }

          
          function output(season){
          document.getElementById("hasil").innerHTML="";
          fetch("https://api.jikan.moe/v3/season/"+season)
                  .then(Response => Response.json()) 
                  .then(data => {
                    console.log(data); 
                    for(var i=0; i<8; i++){
                      document.getElementById("hasil").innerHTML+=
                      "<div class='text-center col-md-3 mb-4'>"+
                      "<div class='card' style='width: 15rem;'>"+
                      "<img src ='"+data.anime[i].image_url+"'>"+
                      "<h5 class = 'demo-2'>"+data.anime[i].title+"</h5>"+
                      "<a href='"+data.anime[i].url+"'class='btn btn-primary btn-lg active' role='button' aria-pressed='true'>Selengkapnya</a>"
                      "</div>"+
                      "</div>"
                      "<hr style='border:1px outset;background-color:#000000;color:#353535;height:5px;width:75%;text-align:left;margin-left:12.5%'/><br>"
                    }
                    
                  })
  
          }

          function keluar(pilihan){
          document.getElementById("hasil").innerHTML="";
          console.log(' '); 
          fetch("https://api.jikan.moe/v3/genre/anime/"+pilihan+"/1")
                  .then(Response => Response.json())
                  .then(data => {
                    for(var i=0; i<8; i++){
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

          
          