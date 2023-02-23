import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  length = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  password = '';

  onChangeLength( event: Event ) {
    const value = parseInt( ( event.target as HTMLInputElement ).value )
    console.log(value)
    if ( !isNaN( value ) ) {
      this.length = value
      
    }
  }

  onButtonClick() {
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()_+';

    let validChars = '';
    if ( this.includeLetters ) { 
      validChars += letters;
    }
    if ( this.includeNumbers ) { 
      validChars += numbers;
    }
    if ( this.includeSymbols ) { 
      validChars += symbols;
    }

    let generatedPassword = '';
    for ( let i = 0; i < this.length; i++ ) {
      // Random character in validChars
      const index = Math.floor( Math.random() * validChars.length );
      generatedPassword += validChars[index];
    }
    this.password = generatedPassword;

  }

  getPassword() {
    return this.password;
  }

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }


}
