import { Component, ViewChild, ViewChildren } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  @ViewChild("f", { static: false }) formReference: NgForm;
  defaultQuestion = "pet";
  questionAnswer = "";
  genders = ["male", "female"];
  user = {
    username: "",
    email: "",
    secretQuestion: "",
    answer: "",
    gender: ""
  };
  submitted = false;

  suggestUserName() {
    const suggestedName = "Superuser";
    this.formReference.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  // onSubmited(form: NgForm) {
  //   console.log(form.value);
  // }

  onSubmited() {
    console.log(this.formReference);
    this.user.username = this.formReference.value.userData.username;
    this.user.email = this.formReference.value.userData.email;
    this.user.secretQuestion = this.formReference.value.secret;
    this.user.answer = this.formReference.value.questionAnswer;
    this.user.gender = this.formReference.value.gender;
    this.submitted = true;
    this.formReference.reset({
      userData: {
        username: "New User"
      }
    });
  }
}
