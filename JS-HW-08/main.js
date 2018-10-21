
  
  
function getGeoData() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    }
  
    function success(position) {
      
      const data = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        accurancy: 10
      };
  
      data.latitude = position.coords.latitude.toFixed(data.accurancy);
      data.longitude = position.coords.longitude.toFixed(data.accurancy);
      console.table(data);
      
      const mymap = L.map("mapid").setView(
        [data.latitude, data.longitude],
        17
      );
      L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(mymap);
      var marker = L.marker([data.latitude, data.longitude]).addTo(mymap);
      marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();

    //   var popup = L.popup()
    // .setLatLng([data.latitude, data.longitude])
    // .setContent("I am a standalone popup.")
    // .openOn(mymap);
    
      
    }
    function error(err) {
      return new Error("ERROR:" + err);
    }
  }
  
  getGeoData();
  
