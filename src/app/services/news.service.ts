import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewsResponse } from '../interfaces/Index';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http:HttpClient) { }

  getTopHeadLines(){
    return this.http.get<NewsResponse>('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=fbbb6962c39c4086863b300a2fb3ece6')
  }
}
