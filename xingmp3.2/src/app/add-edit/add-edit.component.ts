import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Mussic } from '../mussic';
import { MussicService } from '../mussic.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit{

  constructor(
    private mussicService: MussicService,
   ) { }
  @Input() mussic?: Mussic;
  @Input() d?: number;
  @Output() newItemEvent = new EventEmitter<number>();
  @Output() mussics=new EventEmitter<Mussic[]>()
  @Input() add_mussic?: number;
  ngOnInit(): void {
  }
  onSelect(): void{
    //this.d=0;
    this.newItemEvent.emit(0);
    //console.log(true);
  }
  // goBack(): void {
  //   this.location.back();
  // }
  // add(name: string): void {
  //   name = name.trim();
  //   if (!name) { return; }
  //   this.heroService.addHero({ name } as Hero)
  //     .subscribe(hero => {
  //       this.heroes.push(hero);
  //     });
  // }
  save(): void {
    if (this.mussic) {
      this.mussicService.updateMussic(this.mussic)
        .subscribe(() => this.onSelect());
    }
  }
  add_mussicc(name_cs: string, name_bh: string): void {
    name_cs = name_cs.trim();
    name_bh = name_bh.trim();
    if (!name_bh && name_cs) { return;}
    // this.mussicService.addMussic( {img: '11', singer: name_cs, song:name_bh } as Mussic)
    //   .subscribe(()=>  this.mussicService.getMussics()
    //   .subscribe(mussics=> this.mussics.emit(mussics)));
     this.onSelect();
  }
}
