const weather = {
    result: null
}

const weatherContainer = document.getElementById('wContain');

const getAPI = function(){
    // const url = 'http://api.openweathermap.org/data/2.5/group?id=524901,703448,2643743&units;=metric&appid=e3d39f20368babf171320725f7051b07';

    // axios.get('../files/API.txt')
    axios.get('http://api.openweathermap.org/data/2.5/group?id=524901,703448,2643743&units;=metric&appid=e3d39f20368babf171320725f7051b07')
    .then(function(response){
        weather.result = response.data;
    })
    .then(function(){
        // console.log(weather.result.list[0].main.temp)
        for(let i in weather.result.list){
            let tr = document.createElement("tr");
          tr.className = "row text-center mt-2 d-flex align-items-center";
      
          let rank = document.createElement("td");
          rank.className = "col-3 text-start";
          tr.append(rank);
          let span = document.createElement("span");
          span.innerText = weather.result.list[i].name;
          rank.append(span);
      
          let price = document.createElement("td");
          price.className = "col-3";
          let priceSpan = document.createElement("span");
          priceSpan.innerText = weather.result.list[i].sys.country;
          price.append(priceSpan);
          rank.after(price);
      
          let pch24 = document.createElement("td");
          pch24.className = "col-3";
          let pch24Span = document.createElement("span");
          pch24Span.innerText = weather.result.list[i].main.temp;
          pch24.append(pch24Span);
          price.after(pch24);

          let mCap = document.createElement("td");
      mCap.className = "col-3 text-end";
      let mCapSpan = document.createElement("span");
      mCapSpan.innerText = weather.result.list[i].weather[0].description;
      mCap.append(mCapSpan);
      pch24.after(mCap);
      
          weatherContainer.append(tr);
        }
    })

    }


window.addEventListener("load",function(){getAPI();});