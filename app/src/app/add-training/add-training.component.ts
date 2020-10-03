import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-training',
  templateUrl: './add-training.component.html',
  styleUrls: ['./add-training.component.css']
})
export class AddTrainingComponent implements OnInit {
  addForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
    trainingName: ['', Validators.required],
    facultyName: ['', Validators.required],
    courseName: ['', Validators.required],
    startDate: ['', Validators.required],
    endDate: ['', Validators.required],
    
});
}

get f() { return this.addForm.controls; }

onSubmit() {
  this.submitted = true;

  // stop here if form is invalid
  if (this.addForm.invalid) {
      return;
  }
}

onReset() {
  this.submitted = false;
  this.addForm.reset();
}


}
