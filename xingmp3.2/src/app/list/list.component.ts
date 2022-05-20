import { Component, OnInit, Output } from '@angular/core';
import { Mussic } from '../mussic';
import { MussicService } from '../mussic.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  selectedMussic?: any;    
  add?: number;  
  k?: number;
  s?: number;
  li:any;
  mussics: Mussic[] = [];
  //selectedussic: Mussic= {id:1, image: '11', name_cs: 'Dr Nice', name_bh:"Son dep trai" };  
  constructor(private mussicService: MussicService) { }
  ngOnInit(): void {
    this.getMussics();
  }
  
  onSelect(mussic:any): void {
    this.selectedMussic = mussic;
    this.k=1;
  }
  onSelect_add(): void{
    this.add=1;
    this.k=2;
  }
  getMussics(): void {
    this.mussicService.getMussics()
        .subscribe(Response=>{
          this.li=Response;
          console.log(this.li);
          this.mussics=this.li.musics;
        });
       
  }
  addItem(newItem: number){
    this.k=0;
  }
  add_mussic(mussics: Mussic[])
  {
   this.mussics=mussics;
   this.k=0;
  }
  delete(mussic: Mussic): void {
    this.mussics = this.mussics.filter(h => h !== mussic);
    this.mussicService.deleteMussic(mussic.id).subscribe();
  }
}
