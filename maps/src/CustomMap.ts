import { User } from "./User";
import { Company } from "./Company";


interface Mappable {
    location: {
        lat: number;
        lng: number;
    }
    markerContent(): string;
}


export class CustomMap {
    private googleMap: google.maps.Map;


  constructor(divId: string) {
    this.googleMap = new google.maps.Map(
      document.getElementById(divId) as HTMLElement,
      {
        zoom: 1,
        center: {
          lat: 0,
          lng: 0,
        },
      });
  }


addMarker(mapppable: Mappable) : void {
   const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mapppable.location.lat,
        lng: mapppable.location.lng,
      },
    })

 

    marker.addListener('click', () => {
        const infoWindow = new google.maps.InfoWindow({
            content: mapppable.markerContent()
        });
        infoWindow.open(this.googleMap, marker)
    })
}
}
  

// addCompanyMarker(company: Company): void {
//     new google.maps.Marker({
//         map: this.googleMap,
//         position: {
//           lat: user.location.lat,
//           lng: user.location.lng,
//         },
//       });
// }  