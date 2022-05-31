import { Component } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent {
  shipFormControl = new FormControl('', [Validators.required,]);

  matcher = new MyErrorStateMatcher();
  title = 'Order Confirmation Demo';
  public lineNumber: string='';
  public itemName: string='';
  public toggle = true;
  public status = 'accept';
  panelOpenState = false;
  
 
  constructor(

  ) { }

  ngOnInit(): void {
    this.lineNumber = '0010';
    this.itemName = 'NaCl (Sodium Chloride)';

  }

  public setState(value: any) {
   this.status= value;
}

public onSubmit(){
  
  console.log('submit')
}

}
