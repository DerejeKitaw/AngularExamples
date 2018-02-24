import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Inverter } from '../inverter.model';
// Services
import { InverterService } from '../inverter.service';

@Component({
  selector: 'app-inverter-list',
  templateUrl: './inverter-list.component.html',
  styleUrls: ['./inverter-list.component.scss']
})
export class InverterListComponent implements OnInit {

  inverterList: Inverter[];

  constructor(private _inverterService: InverterService,
    private route: ActivatedRoute) {
    console.log('inverterListCompnent works');
  }

  ngOnInit() {
    const empData = this._inverterService.getAllInverter();
    console.log(empData);
    empData.snapshotChanges().subscribe(item => {
      this.inverterList = [];
      item.forEach(element => {
        const storageElement = element.payload.toJSON();
        storageElement['id'] = element.key;
        this.inverterList.push(storageElement as Inverter);
      });
    });
  }

}
