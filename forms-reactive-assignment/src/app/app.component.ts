import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  projectForm: FormGroup;

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      'projectName': new FormControl(null, [Validators.required, this.invalidName], this.asyncInvalidName),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'projectStatus': new FormControl('critical')
    })
  }
  invalidName(control: FormControl):{[s:string]: boolean}{
    if(control.value == 'Test'){
      return {'nameIsForbidden': true};
    }
    return null;
  }

  asyncInvalidName(control: FormControl): Promise<any> | Observable<any>{
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if(control.value === 'test'){
          resolve({'nameIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 1500)
    });
    return promise
  }



  onSubmit(){
    console.log(this.projectForm.value)
  }
}
