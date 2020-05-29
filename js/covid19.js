window.fetch("htpps://api.covid19api.com/")
.then((data)=> {
    data.json()
    .then((covid)=> {
        console.log(covid.Global);
        document.getElementById("covidBlock").innerHTML =
        <section>

      <div>
             <h4 class="badge badge-danger">TotalConfirmed</h4>
             <span>${Global.TotalCofirmed}</span>
     </div>
     <div>
         <h4 class="badge badge-danger">TotalDeaths</h4>
          <span>${Global.TotalDeaths}</span>
     </div>

     <div>
         <h4 class="badge badge-danger">NewRecovered</h4>
         <span>${Global.NewRecovered}</span>
     </div>
     <div>
         <h4 class="badge badge-danger">TotalRecovered</h4>
         <span>${Global.TotalRecovered}</span>
     </div>
            <div>
             <h4 class="badge badge-danger">NewConfirmed</h4>
             <span>${Global.NewCofirmed}</span>
     </div>
     <div>
          <h4 class="badge badge-danger">NewDeaths</h4>
             <span>${Global.NewDeaths}</span>
     </div>
     </section>
     
     ;
    })
      .catch((err)=>console.log(err));
})
 .catch((err)=>console.log(err));