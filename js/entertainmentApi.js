let entertenmentApi =" http://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=e6e33367ed964857a7d626445acda72f";

 /*=======entertainment Section start here======== */

window.fetch(entertainmentApi)
.then((entertainmentApi) => {
  entertainmentData.json() 
      .then(entertainment) => {
        console.log(entertainment.articles);
          let entertainmentFeed = entertainment.articles;
         // let firstEntertainmentBlock = entertainment.articles;

      /*let entertainmentDatanewsBlockOne = firstEntertainmentBlock[0];
          document.getElementById("entertainmentFirstTemplate").innerHTML = <ul>
            <img src ="${ entertainmentDatanewsBlockOne.urlToImage }" />
            <a href =" ${ entertainmentDatanewsBlockOne.url }" target="_blank">
              
            </a>
          </ul>
          ;  -----*/
          let output = [];
          for (let enter of entertainmentFeed) {
               console.log(enter);
               let data = new DataCue(enter.publishedAt).toDateString();
              ouput +=
              <div class="row">
                <div class="col-md-5">
                  <img src = "${enter.urlToImage }" class="enterImage" />
                </div>
                <div class="col-md-7">
               <ul class="list-group ">
                <a href ="${entertainment.url}" target="_blank">
                  <li class="text-dark">
                    ${entertainment.title}
                  </li>
                </a>
                <span class="text-muted text-right">publishedAt : ${data }</span>
               </ul>
               </div>
               </div>
              ;
             
          document.getElementById("entertainmentAllTemplate").innerHTML = output;
              }
  
  })
    .catch((err) => console.log(err));

    })
      .catch((err) => console.log(err)) ;

      /*=======entertainment Section ends here======== */
