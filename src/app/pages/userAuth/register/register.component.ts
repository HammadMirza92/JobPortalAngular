import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private router: Router, private formBuilder: FormBuilder){}

  form: FormGroup  = new FormGroup({});

  ngOnInit(): void {
     this.form = this.formBuilder.group({
      name: ['',{
        validators: [Validators.required , Validators.minLength(3) ]
      }]
     });
  }
  saveChanges(){
    //.......save the genre

    this.router.navigate(['/geners']);
  }
  getErrorMessageFieldName(){
    const field = this.form.get('name');

    if(field && field.hasError('required')){
      return 'The name field is required';
    }

    if (field && field.hasError('minlength')){
      return 'The minimum length is 3';
    }


    return '';
  }
}

