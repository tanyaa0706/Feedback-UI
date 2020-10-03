import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-training',
  templateUrl: './view-training.component.html',
  styleUrls: ['./view-training.component.css']
})
export class ViewTrainingComponent implements OnInit {
  displayedColumns = ['id', 'trainingName', 'facultyName', 'courseName', 'startDate', 'endDate','actions'];
  dataSource = ELEMENT_DATA;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  refresh() {
    window.location.reload();
  }

  addNew(): void {
    this.router.navigateByUrl('/addtraining');
  };

  editItem(): void {
    this.router.navigateByUrl('/edittraining');
  };

  deleteItem(): void {
    this.router.navigateByUrl('/');
  };

}

  export interface PeriodicElement {
    trainingName: string;
    facultyName: string;
    courseName: string;
    id: number;
    startDate: any;
    endDate: any;
  }
  
  const ELEMENT_DATA: PeriodicElement[] = [
    {id: 1, trainingName: 'Hydrogen', facultyName: 'Hydrogen', courseName: 'Hydrogen', startDate: '2020/12/15', endDate: '2020/10/12'}
    // {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    // {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    // {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    // {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    // {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    // {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    // {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    // {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    // {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  ];


