import {Component} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-create-embeddings',
  templateUrl: './create-embeddings.component.html',
  styleUrls: ['./create-embeddings.component.css']
})
export class CreateEmbeddingsComponent {

  backendUrl = environment.backendUrl;
  partnerId = ''
  backgroundInformation: string = ''
  documentId: string = ''
  isLoading: boolean = false;

  // model properties
  header = ''
  message = ''
  opened = false

  constructor(private http: HttpClient) { }

  createEmbeddings() {
    this.isLoading = true
    const request = {
      partnerId: this.partnerId,
      documentId: this.documentId,
      text: this.backgroundInformation
    }
    this.http.post(`${this.backendUrl}/embeddings/createEmbeddings`, request).subscribe(
      data => {
        this.isLoading = false
        this.header = "Success"
        this.message = `Successfully created new embeddings for document: ${this.documentId}`
        this.opened = true
      },
      error => {
        console.error(error);
        this.isLoading = false
        this.header = "Failure"
        this.message = error.message
        this.opened = true
      }
    );
  }
}
