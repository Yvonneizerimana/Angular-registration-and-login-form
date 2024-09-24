import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,RouterModule,RouterOutlet],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  student={
    email: '',
    password: ''
  }


studentLogin(){
  if(this.student.email === 'yvonne@gmail.com' && this.student.password === 'yvonne12345'){
    alert('Login Successful');
    console.log(
      this.student.email,this.student.password
    );
  }else{
    alert('Invalid Credentials');
  }
}
}
