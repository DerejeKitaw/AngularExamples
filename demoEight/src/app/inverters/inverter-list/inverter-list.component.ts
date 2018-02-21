import { Component, OnInit } from '@angular/core';
import { InverterService } from '../inverter.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inverter-list',
  templateUrl: './inverter-list.component.html',
  styleUrls: ['./inverter-list.component.scss']
})
export class InverterListComponent implements OnInit {

  constructor(private inverterService: InverterService,
    private route: ActivatedRoute) {
    console.log('inverterListCompnent works');
  }

  ngOnInit() {
  }

}
