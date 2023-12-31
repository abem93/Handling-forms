import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  subcriptions = ['Basic', 'Advanced', 'Pro'];
  selectedSubcription = 'Advanced';
  @ViewChild('signupForm') signupForm: NgForm;

  onSubmit(){
    console.log(this.signupForm.value)
  }
}

