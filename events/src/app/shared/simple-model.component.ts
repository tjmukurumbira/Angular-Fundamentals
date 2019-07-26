import { Component, OnInit, Input, ViewChild, ElementRef, Inject } from '@angular/core';
import { $ } from 'protractor';
import { JQ_TOKEN } from './jquery.service';

@Component({
  selector: 'app-simple-modal',
  templateUrl: './simple-model.component.html',
  styleUrls: ['./simple-model.component.css']
})
export class SimpleModelComponent implements OnInit {

  @Input() elementId: string;
  @Input() title: string;
  @Input() closeOnBodyClick: string;
  @ViewChild('modalContainer') mycontainer : ElementRef;
  constructor( @Inject(JQ_TOKEN) private $: any) { }

  ngOnInit() {
  }

  closeModal() {
    if (this.closeOnBodyClick === "true"){
    this.$(this.mycontainer.nativeElement).modal('hide');
  }
  }

}
