import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Technology } from 'src/app/models/technology.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {

  public technology: Technology = {
    name: '',
    description: '',
    logo: '',
    _id:'',
    tags: [],
    updatedAt: null,
    createdAt: null
  }
  constructor(private _activatedRoute: ActivatedRoute, private _httpService: HttpService) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(params=>{
      const id:string = params['id'];
      this._httpService.getTechnology(id).subscribe((technology: Technology) => {
        this.technology = technology["data"];
      })
    })
  }

}
