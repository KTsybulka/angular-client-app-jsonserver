import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  FormControl,
  Validator,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  feedbackForm: FormGroup;
  submittedData: any | null = null; // Variable to store submitted data
  apiURL = 'http://localhost:4201/submissions';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    // Initialize the form with three fields
    this.feedbackForm = this.fb.group({
      name: ['', [Validators.required]], // Required field
      email: ['', [Validators.required, Validators.email]], // Valid email
      message: ['', [Validators.required, Validators.minLength(10)]], // Minimum length
    });
  }

  // Submit handler
 // Submit handler
 onSubmit() {
  if (this.feedbackForm.valid) {
    this.submittedData = this.feedbackForm.value; // Store the form data

    this.http.post(this.apiURL, this.feedbackForm.value).subscribe(
      (response) => {
        console.log('Form Submitted:', response);
        alert('Form submitted successfully!');
      },
      (error) => {
        console.error('Error submitting form:', error);
        alert('There was an error submitting the form. Please try again.');
      }
    );
  } else {
    console.log('Form is invalid');
  }
}
}

