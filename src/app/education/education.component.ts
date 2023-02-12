import { Component, OnInit } from '@angular/core';
import { EducateService } from '../core/shared/educate.service';
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  data: any[];

  constructor(public dataService :EducateService ) { }

  ngOnInit(): void {
    
  //   getExperiences() : Observable<IExperience[]> {
  //     return this.http.get<IExperience[]>(this.baseUrl + "experiences.json")
  //         .pipe(
  //             catchError(this.handleError)
  //         );
  // }
    this.dataService.getNews().subscribe((data)=>{
      console.log(data);
      this.data = data['articles'];
    });
  }

}
