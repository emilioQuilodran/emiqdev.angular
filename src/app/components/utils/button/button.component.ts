import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})

export class ButtonComponent implements OnInit {
  @Input() text: string | undefined;
  @Input() disabled: boolean | undefined;


  ngOnInit(): void {
    if(this.text === 'SEND MESSAGE'){
    console.log("q valor llega aca: ", this.disabled)

    }
  }


}
