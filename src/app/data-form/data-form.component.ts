import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-data-form',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
  ],
  templateUrl: './data-form.component.html',
  styleUrl: './data-form.component.css'
})
export class DataFormComponent {
  weight!: number;
  weightUnit: string = 'kg';
  height!: number;
  heightUnit: string = 'cm';

  constructor(private router: Router) { }

  calculateBMI() {
    let weightInKg = this.weightUnit === 'kg' ? this.weight : this.weight * 0.453592;
    let heightInM = this.heightUnit === 'cm' ? this.height / 100 : this.height * 0.0254;
    let bmi = weightInKg / (heightInM * heightInM);

    this.router.navigate(['/result', bmi.toFixed(2)]);
  }
}
