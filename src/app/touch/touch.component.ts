import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-touch',
  templateUrl: './touch.component.html',
  styleUrl: './touch.component.css'
})
export class TouchComponent implements OnInit{
  userInput: string = '';
  
  constructor(){}

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

sendEmail(event: Event): void {
  event.preventDefault();

  const email = 'mn.najeh1314@gmail.com';
  const subject = 'Hello from NC site';
  const body = encodeURIComponent(this.userInput);
  window.open(`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${body}`);
}


}
