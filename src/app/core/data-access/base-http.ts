import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { environment } from "@env/environment.development";

@Injectable({
  providedIn: 'root'
})
export class BaseHttpClient {
  protected http = inject(HttpClient)
  protected apiUrl = environment.API_URL
}
