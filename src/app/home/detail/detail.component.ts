import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from "@angular/common";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  // styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  data;

  constructor(private location: Location,
    private route: ActivatedRoute) {}
  ngOnInit() {}

  ngDoCheck()	{
    this.data = this.route.snapshot.paramMap.get('data');
  }

  goBack() {
    this.location.back();
  }

}
