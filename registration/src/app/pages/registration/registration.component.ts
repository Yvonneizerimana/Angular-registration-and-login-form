import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
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
