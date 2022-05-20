import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Mussic } from '../mussic';
import { MussicService } from '../mussic.service';
@Component({
  selector: 'app-music-detail',
  templateUrl: './music-detail.component.html',
  styleUrls: ['./music-detail.component.css']
})
export class MusicDetailComponent implements OnInit {
  mussic: Mussic | undefined;

  constructor(
    private route: ActivatedRoute,
    private mussicService: MussicService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getMussic();
  }

  getMussic(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.mussicService.getmussic(id)
      .subscribe(mussic => this.mussic = mussic);
  }

  goBack(): void {
    this.location.back();
  }

}
