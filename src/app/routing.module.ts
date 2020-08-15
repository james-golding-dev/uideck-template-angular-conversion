import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";

const routes: Routes = [
  {
    path: "",
    component: AppComponent,
    runGuardsAndResolvers: "always"
    //   children: [
    //     { path: "#home", component: AppComponent },
    //     { path: "#services", component: AppComponent },
    //     { path: "#portfolio", component: AppComponent },
    //     { path: "#pricing", component: AppComponent },
    //     { path: "#about", component: AppComponent },
    //     { path: "#team", component: AppComponent },
    //     { path: "#contact", component: AppComponent }
    //   ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: "reload"

      // Tell the router to use the hash instead of HTML5 pushstate.
      // useHash: true,

      // In order to get anchor / fragment scrolling to work at all, we need to
      // enable it on the router.
      // anchorScrolling: "enabled",

      // Once the above is enabled, the fragment link will only work on the
      // first click. This is because, by default, the Router ignores requests
      // to navigate to the SAME URL that is currently rendered. Unfortunately,
      // the fragment scrolling is powered by Navigation Events. As such, we
      // have to tell the Router to re-trigger the Navigation Events even if we
      // are navigating to the same URL.

      // Let's enable tracing so that we can see the aforementioned Navigation
      // Events when the fragment is clicked.
      // enableTracing: true,
      // scrollPositionRestoration: "enabled"
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
