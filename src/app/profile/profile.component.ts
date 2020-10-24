import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(
    private userService: ServiceService,
    private location: Location,
    private route: ActivatedRoute
  ) { }
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
  }
}
