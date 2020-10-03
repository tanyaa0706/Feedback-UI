import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-training',
  templateUrl: './edit-training.component.html',
  styleUrls: ['./edit-training.component.css']
})
export class EditTrainingComponent implements OnInit {
  editForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.editForm = this.formBuilder.group({
      trainingName: ['', Validators.required],
      facultyName: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      
  });
  }

  get f() { return this.editForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.editForm.invalid) {
        return;
    }
}

onReset() {
    this.submitted = false;
    this.editForm.reset();
}

}
