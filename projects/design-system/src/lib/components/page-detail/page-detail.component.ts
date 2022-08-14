import { Component, Input, OnInit } from '@angular/core';
import { PageDetailService } from './page-detail.service';

@Component({
  selector: 'eshop-page-detail',
  templateUrl: './page-detail.component.html',
  styleUrls: ['./page-detail.component.css']
})
export class PageDetailComponent implements OnInit {
  copy = ''

  @Input() detail!: string

  constructor(private pageDetailService: PageDetailService) { }

  ngOnInit(): void {
    this.copy = this.pageDetailService.getCopy(this.detail)
  }

}
