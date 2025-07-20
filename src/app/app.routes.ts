import { Routes } from "@angular/router";
import { NotFoundComponent } from "./pages/not-found.component";
import { DashboardComponent } from "./pages/dashboard.component";

export const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
  },
  {
    path: "**",
    component: NotFoundComponent,
  },
];
