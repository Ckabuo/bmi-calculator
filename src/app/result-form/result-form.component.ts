import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CommonModule } from '@angular/common';
// import { DataFormComponent } from '../data-form/data-form.component';

@Component({
  selector: 'app-result-form',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './result-form.component.html',
  styleUrl: './result-form.component.css'
})
export class ResultFormComponent implements OnInit {
  bmi!: number;
  bmiCategory!: string;
  imageSrc!: string;
  bmiMessage!: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.bmi = +params['bmi'];
      this.setBMICategory();
    });
  }

  setBMICategory() {
    if (this.bmi < 18.5) {
      this.bmiCategory = 'underweight';
      this.imageSrc = 'assets/underweight.png';
      this.bmiMessage = 'You are underweight.';
    } else if (this.bmi >= 18.5 && this.bmi < 24.9) {
      this.bmiCategory = 'normal';
      this.imageSrc = 'assets/normal.png';
      this.bmiMessage = 'You have a normal weight.';
    } else if (this.bmi >= 25 && this.bmi < 29.9) {
      this.bmiCategory = 'overweight';
      this.imageSrc = 'assets/overweight.png';
      this.bmiMessage = 'You are overweight.';
    } else if (this.bmi >= 30) {
      this.bmiCategory = 'obese';
      this.imageSrc = 'assets/obese.png';
      this.bmiMessage = 'You are obese.';
    } else {
      this.bmiCategory = 'unknown BMI';
      this.imageSrc = 'assets/unknown.png';
      this.bmiMessage = 'Unknown classification.';
    }
  }

}

