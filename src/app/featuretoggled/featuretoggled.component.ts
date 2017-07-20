import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-featuretoggled',
  templateUrl: './featuretoggled.component.html',
  styleUrls: ['./featuretoggled.component.css'],
})


export class FeaturetoggledComponent implements OnInit {
  text;
  ngtoggled;
  data = {
    feature1: {
      displayed: true,
      text : 'feature 1'
    },
    feature2: {
      displayed: true,
      text : 'feature 2'
    },
    feature3: {
      displayed: false,
      text : 'feature 3'
    }
  };
  constructor() { }

  ngOnInit() {
    this.ngtoggled = Object.keys(this.data);
  }
/*
  addToggle() {
    this.featuretoggled.push({
      text : this.text
    });
  }

  deleteFeatute(featureText){
    for (var i =0; i < this.featuretoggled.length;i++){
      if(this.featuretoggled[i].text == featureText){
        this.featuretoggled.splice(i,1);
      }
    }
  }
*/

}


