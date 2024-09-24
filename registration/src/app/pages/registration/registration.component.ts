import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [FormsModule,RouterOutlet,RouterModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {

  email:string='yvonne@gmail.com'
  password:string="yvonne123"

 student={
  fname:'',
 lname:'',
 email:'',
 password:'',
 confirmPassword:''
}
  studentRegistration(){
    if(this.student.password !== this.student.confirmPassword){
   alert('Passwords do not match');
    }
    else{
    console.log("student details",this.student);
    alert('Registration Successful');
    }
  }
}
