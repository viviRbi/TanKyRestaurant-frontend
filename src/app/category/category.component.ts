import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CategoryService } from '../category.service';
import { Category } from '../model/Category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  allCategory: Category[] = [];
  sub: Subscription = new Subscription();

  constructor(private cateService: CategoryService) { }

  ngOnInit(): void {
    this.getAllCategory()
  }

  getAllCategory(){
    this.cateService.getAllCategory().subscribe(
      all => {this.allCategory=all}
    )
  }

}
