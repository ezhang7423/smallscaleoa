let searchParams = window.location.href
anime.speed = .38;
var timeline = anime.timeline({ autoplay: true, direction: 'linear', loop: true });


var temp = document.querySelector('.metric');

if (searchParams.includes('fisher')) {
    var dataCotainer = {
        Temperature: 187,
      }
    timeline.add({
        targets: dataCotainer,
        Temperature: 196,
        easing: 'linear',
        round: 1,
        update: function() {
            temp.innerHTML =  "CURRENT: "+ dataCotainer.Temperature;
        },
        duration: 10000,
    })
        
      timeline.add({
        targets: dataCotainer,
        Temperature: 195,
        round: 1,
        update: function() {
          temp.innerHTML = "CURRENT: "+ dataCotainer.Temperature;
        },
        duration: 10000,
      })
  }
  else if (searchParams.includes('org')) {
    var dataCotainer = {
        Temperature: 197,
      }
    timeline.add({
        targets: dataCotainer,
        Temperature: 203,
        easing: 'linear',
        round: 1,
        update: function(){
            if (dataCotainer.Temperature >= 200){
            document.querySelector('.paid-no').innerText = 'YES'
            document.querySelector('.paid-no').classList.toggle('yes')
        }
          temp.innerHTML = ("CURRENT: "+ dataCotainer.Temperature);
        },
        duration: 6000,
      })
      timeline.add({
        targets: dataCotainer,
        Temperature: 200,
        round: 1,
        update: function() {
          temp.innerHTML = ("CURRENT: "+dataCotainer.Temperature);
        },
        duration: 30000,
      })
  }
