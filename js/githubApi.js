//es7(ecma2017) onwords async and await (ontop of promises);

let url ="https://"applicationCache.github.com/users";

let findGitUsers = async()=> {
    let data = await window.fetch(url);
    let response = await data.json();
     console.log(response);
};

findGitUsers();