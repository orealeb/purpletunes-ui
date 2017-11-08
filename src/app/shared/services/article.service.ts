import { Article } from '../interfaces/all.interface';
import { ARTICLES } from '../mock-data/mock-articles';
import { Injectable } from '@angular/core';

@Injectable()
export class ArticleService {
  getArticles(): Promise<Article[]> {
    return Promise.resolve(ARTICLES);
  }

  getArticlesSlowly(): Promise<Article[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getArticles()), 2000);
    });
  }

  getArticle(id: number): Promise<Article> {
    return this.getArticles()
               .then(articles => articles.find(articles => articles.id === id));
  }
}
