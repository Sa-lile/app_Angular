import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit {
    id: number;
    titre: string;
    prix: number;
    description: string;
    urlImg: string;
    liste;
    // titre: string ="koko";;
    // prix: number = 12;
    // description: string;
    // urlImg: string = "https://via.placeholder.com/700x450";
    // titreArticle: string 

    constructor(
      private route: ActivatedRoute,
      private dataService: DataService,
    ) { }

  ngOnInit() {
      this.liste = this.dataService.listeArticles;
      const id = this.route.snapshot.params["id"];
      this.id = id;
      this.titre = this.dataService.getArticle(id).titreArticle;
      this.prix = this.dataService.getArticle(id).prixArticle;
      this.description = this.dataService.getArticle(id).description;
      this.urlImg = this.dataService.getArticle(id).urlImg;
    

    const article = this.dataService.getArticle[id];
    
  // if (article) {
  //   const id= this.route.snapshot.params["id"];
  //   this.id = id;
  //   this.titre = article.titreArticle;
  //   this.prix = article.prixArticle;
  //   this.description = article.description;
  //   this.urlImg = article.urlImg;
  // } else {
  //   console.error(`Article with ID not found.`);
  // }
}

}
