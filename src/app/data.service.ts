import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {
 listeArticles = [
    {
      id: 1,
      titreArticle: 'Vélo',
      prixArticle: 250,
      description: 'Un super vélo tout terrain',
      urlImg: '../assets/images/velo.png',
      textAltImg: 'Un vélo',
      dispo: true,
    },
    {
      id: 2,
      titreArticle: 'Chasseur basket',
      prixArticle: 50,
      description: "Très bonne qualité chasseur",
      urlImg: '../assets/images/chasseur_basket.png',
      textAltImg: 'chasseur basket',
      dispo: true,
    },
    {
      id: 3,
      titreArticle: 'Camera',
      prixArticle: 200,
      description: "Très bonne qualité",
      urlImg: '../assets/images/camera.png',
      textAltImg: 'Un camera',
      dispo: false,
    },
  ];
  constructor() { }

  getArticle(id: number) {
    const articles = this.listeArticles.find((a) => {
      return a.id == id;
    });
    return articles;
  }
}
