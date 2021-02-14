import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password = ''
  passwordLength = 0
  includeLetters = false
  includeNumbers = false
  includeSpecialChars = false

  onProvidingLength(event: any) {
    const parsedValue = parseInt(event.target.value)

    if(!isNaN(parsedValue)) {
      this.passwordLength = parsedValue
    }
  }

  onIncludingLetters() {
    this.includeLetters = !this.includeLetters
  }
  onIncludingNumbers() {
    this.includeNumbers = !this.includeNumbers
  }
  onIncludingSpecialChars() {
    this.includeSpecialChars = !this.includeSpecialChars
  }

  onGeneratingPassword() {
    if(this.passwordLength < 1) {
      return alert('length should be greater than 0')
    }
    if(!(this.includeLetters || this.includeNumbers || this.includeSpecialChars)) {
      return alert('select at least 1 checkbox')
    }
    const letters = 'abcdefghijklmnopqrstuvwxyz'
    const numbers = '0123456789'
    const specialchars = '~!@#$%^&*()_  '
    let validChars = ''
    if(this.includeLetters) {
      validChars += letters
    }
    if(this.includeNumbers) {
      validChars += numbers
    }
    if(this.includeSpecialChars) {
      validChars += specialchars
    }

    let generatedPassword = ''
    for(let i =0; i<this.passwordLength; i++) {
      const index = Math.floor(Math.random() * validChars.length)
      generatedPassword += validChars[index]
    }
    this.password = generatedPassword
  }
}
