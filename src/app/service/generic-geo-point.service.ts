import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GenericGeoPointService {
  private SERVER_URL = "https://frozen-inlet-49889.herokuapp.com";
  private resourceUrl = "all-generic-geo-point";

  constructor(private httpClient: HttpClient) { 
    
  }

  public fetchData(){  
		return this.httpClient.get(`${this.SERVER_URL}/${this.resourceUrl}`);  
	} 
}
