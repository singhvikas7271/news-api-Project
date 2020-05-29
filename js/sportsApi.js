
/*-------News Api key  e6e33367ed964857a7d626445acda72f */
 
let SportsApi= " http://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=e6e33367ed964857a7d626445acda72f";
//let entertenmentApi =" http://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=e6e33367ed964857a7d626445acda72f";
//let businessApi =" http://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=e6e33367ed964857a7d626445acda72f ";
//let healthApi =" http://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=e6e33367ed964857a7d626445acda72f";
//let scienceApi =" http://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=e6e33367ed964857a7d626445acda72f";
 //let technologyApi = " http://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=e6e33367ed964857a7d626445acda72f";

 /*=====Sports Section Stars here======= */


window.fetch(SportsApi).then((SportsApi) => {
      SportsData.json() 
        .then(sports) => {
          console.log(sports.articles);
            let SportsFeed = sports.articles;
            let firstSportsBlock = sports.articles;

            let sportsnewsBlockOne = firstSportsBlock[0];
            document.getElementById("FirstSports").innerHTML = <ul>
              <img src ="${ sportsnewsBlockOne.urlToImage }" />
              <a href =" ${ sportsnewsBlockOne.url }" target="_blank">
                <li class = "text-dark">${sportsnewsBlockOne.title} </li>
              </a>
            </ul>
            ;
            let output = [];
            for (let sport of SportsFeed) {
                
                ouput +=
                 <ul class="list-group ">
                  <a href ="${sport.url" target="_blank">
                    <li class="text-dark">
                      ${sport.title}
                    </li>
                  </a>
                 </ul>
                ;
               
            document.getElementById("sportsSection").innerHTML = output;
                }
    
    })
      .catch((err) => console.log(err));

      })
        .catch((err) => console.log(err)) ;

/*=====Sports Section ends here======= */