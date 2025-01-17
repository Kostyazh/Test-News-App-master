import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  private base_url: string = "https://newsapi.org/v2/";
  private api_key: string = "35412ec1c073432c8b21ef7b40eddcd5";
  private http_options: any = ({
    observe: 'response'
  });

  constructor(
    private http: HttpClient
  ) { }

  async getNewsApiSearch(keyword: string, from: any = null, to:any  = null, page: any = 1): Promise<any>{
    let url = this.base_url+'everything?q='+keyword+'&language=ru';
    if(from){
      url+='&form='+from;
    }
    if(to){
      url+='&to='+to;
    }
    if(page){
      url += '&page=' + page;
    }
    url+="&sortBy=publishedAt&apiKey="+this.api_key;
    return this.http.get(url, this.http_options).toPromise();
  }

  async getHeadlines(country: any = 'in', category: string = null, sources: string = null, max: any = 1, page: any = null): Promise<any>{
    let url = this.base_url + 'top-headlines?country=' + country ;
    if(category){
      url += '&category=' + category;
    }
    if(sources){
      url += '&sources=' + sources;
    }
    if(page){
      url += '&page=' + page;
    }
    url += '&pageSize=' + max;
    url+= '&apiKey=' + this.api_key;
    return this.http.get(url, this.http_options).toPromise();
  }
  async getSideNews(keyword:any,country: any = 'in',sortBy:any): Promise<any>{
    let url = this.base_url +'everything?q='+keyword+'&language=ru' ;
    if(sortBy){
      url += '&sortBy=' + sortBy;
    }
    url+= '&apiKey=' + this.api_key;
    return this.http.get(url, this.http_options).toPromise();
  }
}
