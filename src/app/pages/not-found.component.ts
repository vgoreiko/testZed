import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-not-found",
  template: `
    <div class="not-found-container">
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <a routerLink="/">Go to Home</a>
    </div>
  `,
  styles: [
    `
      .not-found-container {
        text-align: center;
        margin-top: 80px;
      }
      h1 {
        font-size: 3rem;
        margin-bottom: 16px;
      }
      p {
        font-size: 1.25rem;
        margin-bottom: 24px;
      }
      a {
        color: #1976d2;
        text-decoration: underline;
        font-size: 1rem;
      }
    `,
  ],
  imports: [RouterLink],
})
export class NotFoundComponent {}
