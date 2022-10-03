import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TitleStrategy } from '@angular/router';
import { BloodExam,ccForm } from 'src/app/bloodexam';
import { CalculateService } from 'src/app/services/calculate.service';
@Component({
  selector: 'app-consult',
  templateUrl: './consult.component.html',
  styleUrls: ['./consult.component.css']
})
export class ConsultComponent implements OnInit {
  cedulaForm!: FormGroup;
  bloodExam:BloodExam[] = [];

  constructor(private readonly dataSVc : CalculateService,private readonly fb: FormBuilder) { }

  ngOnInit(): void {
    this.cedulaForm = this.initForm();
  }
  getBloodExam(cedula: string): void {
    this.dataSVc.getBloodExamByCc(cedula)
    .subscribe(bloodExams => {     
      this.bloodExam = bloodExams;
      console.log(this.bloodExam);
    });
  }
  onSubmit(data : ccForm){
    console.log(data)
    this.getBloodExam(data.cc);
  }
  initForm():FormGroup {
    return this.fb.group({
      cc :['', [Validators.required,Validators.minLength(3)]],
    })
  }
}
