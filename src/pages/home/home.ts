import {Component, ElementRef, ViewChild} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Platform} from "ionic-angular";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    @ViewChild('map') mapElement: ElementRef;

    destination: any = {lat: -26.00235106, lng: 28.04149661};
    map: any;
    mapWidth: string;
    mapHeight: string;
    points: any;
    routes: any;
    routePolyline: any;

    constructor(public navCtrl: NavController, public platform: Platform) {

        this.points = [
            {lat: -26.02803545, lng: 28.028632},
            {lat: -26.02581122, lng: 28.02971872},
            {lat: -26.02382518, lng: 28.03098473},
            {lat: -26.02077401, lng: 28.03213966},
        ];

        this.routes = [
            [
                {lat: -26.02802, lng: 28.028630000000003},
                {lat: -26.02804, lng: 28.02877},
                {lat: -26.02758, lng: 28.02898},
                {lat: -26.026750000000003, lng: 28.02934},
                {lat: -26.025560000000002, lng: 28.029930000000004},
                {lat: -26.025520000000004, lng: 28.029960000000003},
                {lat: -26.0255, lng: 28.03001},
                {lat: -26.02344, lng: 28.031000000000002},
                {lat: -26.018610000000002, lng: 28.03338},
                {lat: -26.018430000000002, lng: 28.033430000000003},
                {lat: -26.018050000000002, lng: 28.033640000000002},
                {lat: -26.017220000000002, lng: 28.03405},
                {lat: -26.01602, lng: 28.03461},
                {lat: -26.015130000000003, lng: 28.03506},
                {lat: -26.01507, lng: 28.035120000000003},
                {lat: -26.013700000000004, lng: 28.035800000000002},
                {lat: -26.009900000000002, lng: 28.037650000000003},
                {lat: -26.005760000000002, lng: 28.03967},
                {lat: -26.004500000000004, lng: 28.040280000000003},
                {lat: -26.003500000000003, lng: 28.04079},
                {lat: -26.003300000000003, lng: 28.040930000000003},
                {lat: -26.002830000000003, lng: 28.041290000000004},
                {lat: -26.00243, lng: 28.04162}
            ],
            [
                {lat: -26.025840000000002, lng: 28.029790000000002},
                {lat: -26.025540000000003, lng: 28.029940000000003},
                {lat: -26.0255, lng: 28.03001},
                {lat: -26.02344, lng: 28.031000000000002},
                {lat: -26.018610000000002, lng: 28.03338},
                {lat: -26.018430000000002, lng: 28.033430000000003},
                {lat: -26.01818, lng: 28.03356},
                {lat: -26.017220000000002, lng: 28.03405},
                {lat: -26.01602, lng: 28.03461},
                {lat: -26.015130000000003, lng: 28.03506},
                {lat: -26.015010000000004, lng: 28.03515},
                {lat: -26.01218, lng: 28.036540000000002},
                {lat: -26.009580000000003, lng: 28.0378},
                {lat: -26.004710000000003, lng: 28.040180000000003},
                {lat: -26.00402, lng: 28.04052},
                {lat: -26.003380000000003, lng: 28.04087},
                {lat: -26.003220000000002, lng: 28.04098},
                {lat: -26.002460000000003, lng: 28.041600000000003},
                {lat: -26.00243, lng: 28.04162}
            ],
            [
                {lat: -26.023770000000003, lng: 28.03084},
                {lat: -26.018610000000002, lng: 28.03338},
                {lat: -26.018430000000002, lng: 28.033430000000003},
                {lat: -26.01818, lng: 28.03356},
                {lat: -26.017220000000002, lng: 28.03405},
                {lat: -26.01602, lng: 28.03461},
                {lat: -26.015130000000003, lng: 28.03506},
                {lat: -26.015010000000004, lng: 28.03515},
                {lat: -26.01218, lng: 28.036540000000002},
                {lat: -26.009580000000003, lng: 28.0378},
                {lat: -26.004710000000003, lng: 28.040180000000003},
                {lat: -26.00402, lng: 28.04052},
                {lat: -26.003380000000003, lng: 28.04087},
                {lat: -26.003220000000002, lng: 28.04098},
                {lat: -26.002460000000003, lng: 28.041600000000003},
                {lat: -26.00243, lng: 28.04162}
            ],
            [
                {lat: -26.020830000000004, lng: 28.032290000000003},
                {lat: -26.018610000000002, lng: 28.03338},
                {lat: -26.018430000000002, lng: 28.033430000000003},
                {lat: -26.018050000000002, lng: 28.033640000000002},
                {lat: -26.017220000000002, lng: 28.03405},
                {lat: -26.01602, lng: 28.03461},
                {lat: -26.015130000000003, lng: 28.03506},
                {lat: -26.01507, lng: 28.035120000000003},
                {lat: -26.013700000000004, lng: 28.035800000000002},
                {lat: -26.011280000000003, lng: 28.036980000000003},
                {lat: -26.009240000000002, lng: 28.03797},
                {lat: -26.004500000000004, lng: 28.040280000000003},
                {lat: -26.003500000000003, lng: 28.04079},
                {lat: -26.003300000000003, lng: 28.040930000000003},
                {lat: -26.002830000000003, lng: 28.041290000000004},
                {lat: -26.00243, lng: 28.04162}
            ]
        ];

        this.mapWidth  = this.platform.width() + 'px';
        this.mapHeight = this.platform.height() + 'px';

    }

    ionViewDidLoad(){
        this.initMap();
    }

    /**
     *
     */
    initMap(){
        this.map = plugin.google.maps.Map.getMap(document.getElementById("map"));

        this.map.one(plugin.google.maps.event.MAP_READY, () => {
            // console.log('MAP_READY');
            this.map.moveCamera(
                {
                    target: {lat: -26.01611106, lng: 28.03467008},
                    zoom: 14,
                }
            );

            // this.map.setMyLocationEnabled(true);
            this.drawRoute(0);
        });
    }

    /**
     * Draw route polyline
     * Working Android Only
     */
    drawRoute(id){
        // console.log('drawRoute');
        let points = this.routes[id];
        if(this.routePolyline){
            this.routePolyline.setPoints(points);
        }
        else {
            this.routePolyline = this.map.addPolyline({
                color: '#4986E7',
                visible: true,
                width: 7,
                points: points
            });
        }
    }

}
