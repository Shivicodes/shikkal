import { Component, OnInit } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {

  title: string = "Live Hosting RESUME -Jyotirmai Tiwari";

  constructor(
    private titleService: Title,
    private metaTagService: Meta
  ) { }

  ngOnInit(): void {

    this.titleService.setTitle(this.title);

    this.metaTagService.addTags([
      { name: "keywords", content: "Web Developer, Java Developer, Full-stack Java Developer"},
      { name: "author", content: "Jyotirmai" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "date", content: "11-02-2023", scheme: "DD-MM-YYYY" },
      { charset: "UTF-8" }
    ]);

    this.metaTagService.updateTag(
      { name: "description", content: "Hello, I'm a Full-stack Web Developer with 1 year of experience designing web and ANGULAR projects." }
    );
  }
}
