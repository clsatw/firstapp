import { Component } from '@angular/core';
import { IonicPage, ToastController } from 'ionic-angular';
// import { Geolocation } from '@ionic-native/geolocation';
// import { NativeAudio } from '@ionic-native/native-audio';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { BackgroundMode } from '@ionic-native/background-mode';

import { } from '@types/googlemaps';

import { SpeedyInfo } from './mymap.model';

/**
 * Generated class for the MymapPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
// declare let map;
declare let google: any;

@IonicPage()
@Component({
  selector: 'page-mymap',
  templateUrl: 'mymap.html',
})
export class MymapPage {
  mapElement: HTMLElement;
  // options : GeolocationOptions;
  // currentPos : Geoposition;
  // distance from speedy camera
  d: number = 0;
  statusMsg: string = 'not set';
  map: google.maps.Map = null;
  currentMarker: google.maps.Marker;
  markers: Array<google.maps.Marker> = [];
  lineCoords: Array<google.maps.LatLng> = [];
  infoWindow: google.maps.InfoWindow;

  // latLng: google.maps.LatLng;

  constructor(public toastCtrl: ToastController, private tts: TextToSpeech, private backgroundMode: BackgroundMode) {

  }

  ionViewDidLoad() {
    this.backgroundMode.enable();
    this.backgroundMode.moveToBackground();
    this.backgroundMode.disableWebViewOptimizations();

    this.initMap();
    // this.map.data.loadGeoJson('assets/speedy.geo.json');
    this.getCurrentPos();
    this.loadGeoFile();
    this.trackPos();
  }


  loadGeoFile() {
    //results: google.maps.Data.Feature
    // this.map.data.loadGeoJson('assets/speedy.geo.json');    

    this.map.data.loadGeoJson('assets/speedy.geo.json', null, (results: Array<google.maps.Data.Feature>) => {
      console.log('call back');
      let speedyInfo: SpeedyInfo = { RegionName: '', Address: '', direct: '', limit: '' };
      for (let res of results) {
        speedyInfo.limit = res.getProperty('limit');
        speedyInfo.Address = res.getProperty('Address');
        speedyInfo.direct = res.getProperty('direct');
        speedyInfo.RegionName = res.getProperty('RegionName');
        res.getGeometry().forEachLatLng(latLng => {
          this.addMarker(latLng, speedyInfo);
          // this.marker.setMap(this.map);
        })
      }
    });
  }

  addMarker(latLng, info: SpeedyInfo) {
    let markerOptions = {
      position: latLng,
      map: this.map,
      title: `${info.Address} ${info.direct}`,
      label: info.limit,
      // label: 'speedy camera!',
      // icon: 'assets/icon/icons8-50t.png',
      // icon: 'http://maps.google.com/mapfiles/ms/micons/camera.png',
    }

    let marker: google.maps.Marker = new google.maps.Marker(markerOptions);

    // save markers for distance checking
    this.markers.push(marker);
    //console.log(this.markers[0].getLabel());    
    // console.log(this.markers[0].getTitle());

    let infowindowOptions = {
      position: latLng,
      content: `<div>                 
                    <p>${info.RegionName}<p>
                    <p>${info.Address}</p>
                    <p>速限: ${info.limit}km</p>
                    <p>${info.direct}</p>                 
                </div>`
      ,
    };
    let myinfoWindow = new google.maps.InfoWindow(infowindowOptions);
    google.maps.event.addListener(marker, 'click', (e) => {
      myinfoWindow.open(this.map, marker);
    });

    marker.setIcon('http://maps.google.com/mapfiles/kml/pal4/icon46.png');

    // marker.setIcon('http://labs.google.com/ridefinder/images/mm_20_orange.png');
    // marker.setMap(this.map);
  }

  initMap() {
    // this.geolocation.getCurrentPosition().then((pos) => {
    // let geolocate = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);

    this.map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      // center: { lat: 25.0220265, lng: 121.52305009999999 }
    });

    // let trafficLayer = new google.maps.TrafficLayer();
    // trafficLayer.setMap(this.map);
  }

  getCurrentPos() {
    /*
    let handleLocationError = ((browserHasGeolocation, infoWindow, pos) => {
      infoWindow.setPosition(pos);
      infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
      infoWindow.open(this.map);
    });
    
        let options = {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0
        };
    */
    this.infoWindow = new google.maps.InfoWindow;

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

        // mark real-time position.
        this.currentMarker = new google.maps.Marker({
          position: latLng,
          map: this.map,
          icon: {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 7,
            strokeColor: '#393',
            // strokeWeight: 13,
            // fillColor:'#ff0000',
            fillOpacity: 1
          }
        });

        this.infoWindow.setPosition(latLng);
        this.infoWindow.setContent('Location found.');
        this.infoWindow.open(this.map);
        this.map.setCenter(latLng);
        this.statusMsg = 'does support geoloc';
        this.presentToast(this.statusMsg);
        this.tts.speak({ text: '前方有測速照相', locale: 'zh-TW' })
          .then(() => console.log('Success'))
          .catch((reason: any) => console.log(reason));

      }), ((err) => {
        // this.alert.alert('support geoloc');        
        this.statusMsg = err;
        this.presentToast(this.statusMsg);
        // handleLocationError(true, this.infoWindow, this.map.getCenter());
      })
    } else {
      this.statusMsg = 'does NOT support geoloc!';
      this.presentToast(this.statusMsg);
      // this.alert.alert('does not support geolocation!');
      // Browser doesn't support Geolocation
      // handleLocationError(false, this.infoWindow, this.map.getCenter());
    }
  }

  redraw(coords) {
    let latLng: google.maps.LatLng = new google.maps.LatLng(coords.latitude, coords.longitude);
    // let prevLatLng = this.currentMarker.getPosition();
    // get direction (0:N, 90:E, 180:S, -90:E,)
    // let heading = google.maps.geometry.spherical.computeHeading(prevLatLng, latLng);

    this.currentMarker.setPosition(latLng);

    this.map.setCenter(latLng);

    //this.currentMarker.setIcon('assets/icon/icons8-48.png')
    // array may end up full!!! (overstack).
    /*
    this.lineCoords.push(latLng);
    let lineCoordinatesPath = new google.maps.Polyline({
      path: this.lineCoords,
      geodesic: true,
      strokeColor: '#2E10FF',
      strokeOpacity: 1.0,
      strokeWeight: 2,
      fillOpacity: 0.45,
    });
    lineCoordinatesPath.setMap(this.map);
    */
  }

  find_closest_marker(currentCoords) {
    let rad = (x => { return x * Math.PI / 180; });

    let lat = currentCoords.latitude;
    let lng = currentCoords.longitude;
    let R = 6371; // radius of earth in km
    let i = 0;
    let distances = [];
    let closest = -1;
    for (let marker of this.markers) {
      let mlatLng = marker.getPosition();
      let mLat = mlatLng.lat();
      let mLng = mlatLng.lng();
      // skip checking markers in diffent cities.
      if (Math.trunc(mLat) === Math.trunc(lat) && Math.trunc(mLng) === Math.trunc(lng)) {
        let dLat = rad(mLat - lat);
        let dLong = rad(mLng - lng);
        let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.cos(rad(lat)) * Math.cos(rad(lat)) * Math.sin(dLong / 2) * Math.sin(dLong / 2);
        let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        this.d = R * c;

        distances[i] = this.d;

        if (this.d < 0.2) {
          let address = this.markers[closest].getTitle();
          let limit = this.markers[closest].getLabel().text;
          this.tts.speak({ text: `前方${address}有測速照相限速${limit}公里`, locale: 'zh-TW' })
            .then(() => console.log('Success'))
            .catch((reason: any) => console.log(reason));
          return;
        }

        if (closest === -1 || this.d < distances[closest]) {
          closest = i;
        }
        i++;
      }
    }
    // alert(this.markers[closest].getTitle());
    // this.nativeAudio.preloadSimple('uniqueId1', 'path/to/file.mp3').then(onSuccess, onError);  

    // this.presentToast(`距離: ${distances[closest]}km., ${this.markers[closest].getTitle()}`);
  }

  trackPos() {
    /*
    const subscription = this.geolocation.watchPosition()
      .filter((p) => p.coords !== undefined) //Filter Out Errors
      .subscribe(position => {
        console.log(position.coords.longitude + ' ' + position.coords.latitude);
      });
    */
    let id, target, options;

    let success = ((pos) => {
      let coords = pos.coords;
      console.log(`lat: ${coords.latitude}, lng: ${coords.longitude}`);
      // pass in current postion.
      this.redraw(coords);
      this.find_closest_marker(coords);

      if (target.latitude === coords.latitude && target.longitude === coords.longitude) {
        console.log('Congratulations, you reached the target');
        navigator.geolocation.clearWatch(id);
      }
    });

    function error(err) {
      console.warn('ERROR(' + err.code + '): ' + err.message);
    }

    target = {
      latitude: 0,
      longitude: 0
    };

    options = {
      enableHighAccuracy: false,
      timeout: 5000,
      maximumAge: 0
    };

    id = navigator.geolocation.watchPosition(success, error, options);
  }

  presentToast(msg: string) {
    let toast = this.toastCtrl.create({
      cssClass: '#status',
      message: msg,
      duration: 6000
    });
    toast.present(toast);
  }
}
