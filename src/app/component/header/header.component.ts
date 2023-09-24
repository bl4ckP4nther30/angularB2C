import { Component, OnInit } from '@angular/core';
import { MsalService } from '@azure/msal-angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  loginDisplay: Boolean = false;
  userName: any = ""

  constructor(private msalService: MsalService) { }

  ngOnInit(): void {
    
    if(this.msalService.instance.getActiveAccount() != null){
      this.loginDisplay = true;
      const account = this.msalService.instance.getActiveAccount();
    }
  }

  login() {
    this.msalService.instance.loginRedirect()
    
  }
}
